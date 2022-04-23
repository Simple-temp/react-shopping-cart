import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartItem }) => {

    const [toggle, setToggle] = useState(false)

    return (
        <header>
            <div className="logo">
                <h2>Logo</h2>
                <i class="fa-solid fa-bars" onClick={() => setToggle(!toggle)}></i>
            </div>
            <nav className={toggle ? "toggle" : ""}>
                <div className="menu">
                    <ul>
                        <li>
                            <Link to="/"> Home </Link>
                        </li>
                        <li>
                            <Link to="/productspage"> Products </Link>
                        </li>
                        <li>
                            <Link to="/signinpage"> Sign-in </Link>
                        </li>
                        <li>
                            <Link to="/cart"> <i class="fa-solid fa-cart-arrow-down"></i>
                                {
                                    cartItem.length === 0 ? "" : <span>{cartItem.length}</span>
                                }
                            </Link>
                        </li>
                    </ul>
                </div>
                <i class="fa-solid fa-xmark" onClick={() => setToggle(!toggle)}></i>
            </nav>
        </header>
    );
};

export default Navbar;