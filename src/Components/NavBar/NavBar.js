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
import { useEffect, useRef, useState } from "react";
import Carousel from "../Carousel/Carousel";

function NavBar() {
    const { isAuthenticated, isLoading } = useAuth0();
    const [showLinks, setShowLinks] = useState(false);
    const ref = useRef(document);

    useEffect(() => {
        document.body.style.overflowX = 'hidden';
        const handleClick = (e) => {
            if (e.target.closest('.hamburgerMenu') || e.target.closest('.hamburger')) return;
            setShowLinks(false);
        }
        const el = ref.current;
        el.addEventListener('click', handleClick);
        return () => {
            el.removeEventListener('click', handleClick);
        }
    }, []);

    if (isLoading)
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
                <Route path="/" element={(
                <div>
                    <Carousel />
                    <div className="wideDisplay">
                        <AllCategories />
                    </div>
                    <div className="hamburger" ref={ref}>
                        <button onClick={() => setShowLinks(!showLinks)}>Выбрать категорию</button>
                    </div>
                    {showLinks && (
                    <div className={`hamburgerMenu ${showLinks ? 'show' : ''}`}>
                        <AllCategories  />
                    </div>
                    )}
                    <Books />
                </div>
                )} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
            </div>
        </Router>
    );
}
export default NavBar;