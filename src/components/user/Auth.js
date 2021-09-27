import React from "react";
import UserCreate from "./UserCreate";
import UserLogin from "./UserLogin";

const Auth = (props) => {
    return(
        <div className="auth">
            <UserCreate updateToken={props.updateToken} />
            <br/>
            <UserLogin updateToken={props.updateToken} />
        </div>
    )
}
export default Auth;

// class Auth extends Component {
//     render() {
//         return(
//             <div className="auth">
//             {/* <UserCreate />
//             <UserLogin /> */}
//         </div> 
//         )
//     }
// }
// export default Auth;