import { Redirect } from "react-router";
import User from "../../context/user.context";
 

function Signup() {
    return (
        <User.Consumer>
            {
               ({user,signup}) => user.isLoggedIn? <Redirect to="/quiz"  /> 
               : (
               <div>
                   <button onClick={signup}>Sign Up</button>
                </div>
               )
            }
        </User.Consumer>
        
    )
}

export default Signup;

