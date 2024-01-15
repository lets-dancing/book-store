import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
    const {loginWithRedirect} = useAuth0();
    return (
        <div className="navBarIcons">
            <button className="loginBtn" onClick={() => loginWithRedirect()}><img className="loginIcon" src={`./login.png`} alt="loginIcon"/></button>
        </div>
    )
};

export default Login;