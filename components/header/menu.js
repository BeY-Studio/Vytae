import React, { useState } from "react";

const Menu = () => {
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
                        <a href="/">English <i className="fa fa-caret-down"></i></a>
                        <div className="menu_dropdown">
                            <span>Italian</span>
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Menu;