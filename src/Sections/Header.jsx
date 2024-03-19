import { Link } from "react-router-dom";

function Header() {
    return (
        <header>

            <div className="logo">
                <Link to="/">
                    <h1 className="logo">Logo</h1>
                </Link>
            </div>

            <div className="header-links">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    
                    <li>
                        <Link to="/shop">Shop</Link>
                    </li>
                </ul>
            </div>

            <div className="cart">
                <Link to="/cart">Cart</Link>
            </div>

        </header>
    );
}

export default Header;