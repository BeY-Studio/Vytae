import React, { useState, useEffect } from "react";
import Link from 'next/link';

const Menu = (props) => {
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
                        <img src={"./images/logo/menu-logo.svg"} alt="vytae" />
                    </a>
                </div>
                <ul>
                    <li>
                        <a href="https://vytae.org/">Home</a>
                    </li>
                    <li>
                        <a href="https://www.vytae.org/sostenibilita/?lang=it">Sostenibilità</a>
                    </li>
                    <li className="drop_menu">
                        <a href="#">Prodotti <i className="fa fa-caret-down"></i></a>
                        <div className="menu_dropdown">
                            {
                                props.products.map((product) => (
                                    <Link 
                                        href={"/" + product.id} 
                                        key={product.id}
                                    >
                                        <a className="menu_span_dd">{product.title}</a>
                                    </Link>
                                ))
                            }
                        </div>
                    </li>
                    <li className="drop_menu">
                        <a href="#">English <i className="fa fa-caret-down"></i></a>
                        <div className="menu_dropdown">
                            <span>Italian</span>
                        </div>
                    </li>
                </ul>
                <span className="menu_cart" onClick={goToShopifyCheckout}>
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    <span className="number">{props.checkout ? props.checkout.lineItems ? props.checkout.lineItems.length : null : null}</span>
                </span>
            </nav>
        </>
    );
};

export default Menu;