
import React from "react";

import {auth,signupWithGoogleAccount,addUserDetails} from "../utils/firebase.utils";
import LoaderContext from "./loader.context";

const INIT_STATE = {
    isLoggedIn:false,
    _id:null,
    name:null
};

var UserContext = React.createContext(INIT_STATE);
UserContext.displayName ="UserContext";

export default UserContext;

var authComp = React.memo(class Authentication extends React.Component{

    state = INIT_STATE;

    start = null;
    
    stop = null;

    componentDidMount()
    {
        this.start();
        auth.onAuthStateChanged((userCred)=>{
            this.stop()
            if(!userCred)
            {
                return this.setState(INIT_STATE)
            }
            
            this.setState({
                isLoggedIn : true,
                name:userCred.displayName,
                _id:userCred.uid

            })
        })
    }

    signup = () => {
        // TODO: Need to sign up with Google 
        signupWithGoogleAccount()
        .then((userCred) =>{
            var user = {
                uid : userCred.user.uid,
                name:userCred.user.displayName,
                email:userCred.user.email
            };           
            addUserDetails(user);

        })
        //.then((userCred) => {
        //    var {displayName,uid} = userCred.user;
        //    this.setState({
        //        isLoggedIn : true,
        //        name:displayName,
        //        _id:uid
        //    })
        //});
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
                        <UserContext.Provider value={{
                            user : this.state,
                            signup : this.signup
                        }}>
                            {children}
                        </UserContext.Provider>
                        )
                   }
               }
           </LoaderContext.Consumer>
        )
    }
}  ); 

export const Authentication = authComp;
