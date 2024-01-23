// Компонент Logout для выхода пользователя из системы с использованием Auth0
import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {
    const { logout } = useAuth0();
    const [showPopup, setShowPopup] = useState(false);

    return (
        <div className="navBarIcons">
            <button className="logoutBtn" onClick={() => {setShowPopup(true)}}>
                <img className="logoutIcon" src={`./logout.png`} alt="logoutIcon"/>
            </button>
            {showPopup && 
                <div className="popup">
                    <p>Вы уверены, что хотите выйти?</p>
                    <button onClick={() => logout()}>Да</button>
                    <button onClick={() => setShowPopup(false)}>Нет</button>
                </div>
            }
        </div>
    );
};

export default Logout;