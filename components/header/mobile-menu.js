import React, { useState } from "react";

const MobileMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
           <nav className="menu_nav">
                <div className="logo">
                    <img src={"./images/logo/menu-logo-mobile.svg"} alt="vytae" />
                </div>
                <div className="menu_bars">
                    {
                        menuOpen
                        ? <i onClick={toggleMobileMenu} className="fa fa-times fa-2x theme_text_color"></i>
                        : <i onClick={toggleMobileMenu} className="fa fa-bars fa-2x theme_text_color"></i>
                    }
                </div>
                <ul className={menuOpen ? `mobile_menu_con opened_menu_mob` : `mobile_menu_con closed_menu_mob`}>
                    <li>
                        <a href="https://www.vytae.com/">Home</a>
                    </li>
                    <li>
                        <a href="https://www.vytae.com/sustainability/">Sustainability</a>
                    </li>
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