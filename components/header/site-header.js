import React, { useState, useEffect } from "react";
import Menu from "./menu";
import MobileMenu from "./mobile-menu";

const Header = () => {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
    },[]);

    return (
        <>
            <div className="header_container">
                <div className="inner">
                    {
                        windowWidth > 768
                        ? <Menu />
                        : <MobileMenu />
                    }
                </div>
            </div>
        </>
    );
};

export default Header;