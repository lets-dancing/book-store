// Компонент Logout для выхода пользователя из системы с использованием Auth0
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {
    const { logout } = useAuth0();
    return (
        <div className="navBarIcons">
            <button className="logoutBtn" onClick={() => logout()}>
                <img className="logoutIcon" src={`./logout.png`} alt="logoutIcon"/>
            </button>
        </div>
    );
};

export default Logout;