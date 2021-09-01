import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useGlobalContext } from '../context';

function Navbar() {

    const {amount} = useGlobalContext()
    return (
        <div className="navbar-contenedor">
            <Link to="/"><h2 className="logo">Comfy<span>Sloth</span></h2></Link>
            <ul className="menu-list">
                <Link to="/" className="Link"><li className="menu-li">Home</li></Link>
                <Link to="/about" className="Link"><li className="menu-li">About</li></Link>
                <Link to="/products" className="Link"><li className="menu-li">Products</li></Link>  
            </ul>
            <div className="icons-section">
                <Link to="/cart" className="Link">
                    <div className="cart-section">
                        <p className="cart">Cart</p>
                        <AiOutlineShoppingCart size="1.4em" />
                        <p className="icon-number">{amount}</p>
                    </div>
                </Link>
                <GiHamburgerMenu className="burger" size="1.4em" />
            </div>

        </div>
    )
}

export default Navbar
