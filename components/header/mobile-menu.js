import React, { useState } from "react";
import Link from 'next/link';

const MobileMenu = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const goToShopifyCheckout = () => {
        if (props.checkout.lineItems.length) {
            localStorage.clear();
            window.location.href = props.checkout.webUrl;
        } else {
            alert("You do not have any item in the cart.");
        }
    }

    return (
        <>
           <nav className="menu_nav">
                <div className="logo">
                    <a href="https://vytae.org/">
                        <img src={"./images/logo/menu-logo-mobile.svg"} alt="vytae" />
                    </a>
                </div>
                <div className="menu_bars">
                    {
                        menuOpen
                        ? <i onClick={toggleMobileMenu} className="fa fa-times fa-2x theme_text_color"></i>
                        : <i onClick={toggleMobileMenu} className="fa fa-bars fa-2x theme_text_color"></i>
                    }
                    &nbsp;&nbsp;
                    <span className="menu_cart" onClick={goToShopifyCheckout}>
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        <span className="number">{props.checkout ? props.checkout.lineItems ? props.checkout.lineItems.length : null : null}</span>
                    </span>
                </div>
                <ul className={menuOpen ? `mobile_menu_con opened_menu_mob` : `mobile_menu_con closed_menu_mob`}>
                    <li>
                        <a href="https://www.vytae.com/">Home</a>
                    </li>
                    <li>
                        <a href="https://www.vytae.org/sostenibilita/?lang=it">Sostenibilità</a>
                    </li>
                    {
                        props.products.map((product) => (
                            <li key={product.id}>
                                <Link 
                                    href={"/" + product.id}
                                >
                                    <a onClick={toggleMobileMenu} className="menu_span_dd">{product.title}</a>
                                </Link>
                            </li>
                        ))
                    }                    
                    <li className="drop_menu">
                        <a href="#">English</a>
                    </li>
                    <li className="drop_menu">
                        <a href="#">Italian</a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default MobileMenu;