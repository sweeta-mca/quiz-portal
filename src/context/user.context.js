
import React from "react";

import {auth,signupWithGoogleAccount} from "../utils/firebase.utils";
import LoaderContext from "./loader.context";

const INIT_STATE = {
    isLoggedIn:false,
    _id:null,
    name:null
};

var User = React.createContext(INIT_STATE);
User.displayName ="User";

export default User;

export class Authentication extends React.Component{

    state = INIT_STATE;

    start = null;
    
    stop = null;

    componentDidMount()
    {
        this.start();
        auth.onAuthStateChanged((user)=>{
            this.stop()
            if(!user)
            {
                return this.setState(INIT_STATE)
            }
            
            this.setState({
                isLoggedIn : true,
                name:user.displayName,
                _id:user.uid

            })
        })
    }

    signup = () => {
        // TODO: Need to sign up with Google 
        signupWithGoogleAccount()
        .then((userCred) => {
            var {displayName,uid} = userCred.user;
            this.setState({
                isLoggedIn : true,
                name:displayName,
                _id:uid
            })
        });
    }

    logout = () => {
        auth.signOut()
    }

    render()
    {
        var {children} = this.props
        return(
           <LoaderContext.Consumer>
               {
                   ({start,stop}) => {
                       this.start = start;
                       this.stop = stop;

                        return (
                        <User.Provider value={{
                            user : this.state,
                            signup : this.signup
                        }}>
                            {children}
                        </User.Provider>
                        )
                   }
               }
           </LoaderContext.Consumer>
        )
    }
}   


