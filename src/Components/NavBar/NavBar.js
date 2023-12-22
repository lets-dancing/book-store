import { 
    BrowserRouter as Router, 
    Routes, 
    Route, 
    Link 
} from "react-router-dom";
import Search from "../Search/Search";
import Books from "../BooksComponents/Books";
import Cart from "../Cart/Cart";
import Login from "../Auth/Login";
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "../Auth/Logout";
import AllCategories from "../Filter/AllCategories";
import Book from "../BooksComponents/Book";

function NavBar() {
    const {isAuthenticated, isLoading} = useAuth0();

    if(isLoading) 
        return (
            <div className="loader">
            <h3>Загрузка...</h3>
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
        )

    return ( 
        <Router>
            <div className="container">
                <nav>
                    <Link to="/"><img className="bookLogo" src={`./book-logo.avif`} alt="bookLogo"></img></Link>
                    <Search />
                    <div className="navBarIcons">
                        <Link to="/cart"><img className="cartIcon" src={`./cart.png`} alt="cartIcon"/></Link>
                        {isAuthenticated ? <Logout /> : <Login />}
                    </div>
                </nav>
            
            <Routes>
                <Route path="/" element={(<div><AllCategories /> <Books /></div>)} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/book/:id" element={<Book />} />
            </Routes>
            </div>
        </Router>
    );
}

export default NavBar;