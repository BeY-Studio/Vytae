import React, { useState, useEffect } from "react";
import Menu from "./menu";
import MobileMenu from "./mobile-menu";

const Header = (props) => {
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
                        ? <Menu
                            products={props.products}
                            checkout={props.checkout}
                            toggleCart={props.toggleCart}
                            lang={props.lang}
                            changeLangFromMenu={props.changeLangFromMenu}
                        />
                        : <MobileMenu 
                            products={props.products}
                            checkout={props.checkout}
                            toggleCart={props.toggleCart}
                            lang={props.lang}
                            changeLangFromMenu={props.changeLangFromMenu}
                        />
                    }
                </div>
            </div>
        </>
    );
};

export default Header;