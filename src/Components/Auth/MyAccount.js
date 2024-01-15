import { useAuth0 } from "@auth0/auth0-react";

function MyAccount() {
    const { user, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <div>
                <h1>My Account</h1>
                <p>Nick: {user.nickname}</p>
                <p>Email: {user.email}</p>
                <img src={user.picture} alt="userPicture"></img>
            </div>
        )
    );
}

export default MyAccount;