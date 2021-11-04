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
                    <img src={"./images/logo/menu-logo.svg"} alt="vytae" />
                </div>
                <ul>
                    <li>
                        <a href="https://www.vytae.com/">Home</a>
                    </li>
                    <li>
                        <a href="https://www.vytae.com/sustainability/">Sustainability</a>
                    </li>
                    <li className="drop_menu">
                        <a href="#">Products <i className="fa fa-caret-down"></i></a>
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
                        <a href="/">English <i className="fa fa-caret-down"></i></a>
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