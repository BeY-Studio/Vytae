import React, { useState, useEffect } from "react";
import Link from 'next/link';

const MobileMenu = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [toggleProducts, setToggleProducts] = useState(false);
    const [toggleLanguageDd, setToggleLanguageDd] = useState(false);

    const [itemsNumber, setItemsNumber] = useState(0);
    useEffect(() => {
        let num = 0;
        for (let i=0;i<props.checkout?.lineItems?.length;i++) {
            num = num + Number(props.checkout?.lineItems[i]?.quantity);
        }
        setItemsNumber(num);
    },[props.checkout.lineItems]);

    const toggleMobileMenu = () => {
        setMenuOpen(!menuOpen);
        setToggleProducts(false);
        setToggleLanguageDd(false);
    };

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
                    <span className="menu_cart" onClick={props.toggleCart}>
                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        <span className="number">{itemsNumber}</span>
                    </span>
                </div>
                <ul className={menuOpen ? `mobile_menu_con opened_menu_mob` : `mobile_menu_con closed_menu_mob`}>
                    <li>
                        <a href="https://www.vytae.com/">Home</a>
                    </li>
                    <li>
                        <a href="https://www.vytae.org/sostenibilita/?lang=it">Sostenibilità</a>
                    </li>
                    <li className={toggleProducts ? "open_menu_dropdown" : "closed_menu_dropdown"}>
                        <span 
                            className={toggleProducts ? "theme_text_color menu_dropdown_bottom_border" : "theme_text_color"}
                            onClick={() => setToggleProducts(!toggleProducts)}
                        >
                            Prodotti &nbsp;
                            <i className="fa fa-caret-down"></i>
                        </span>
                        <div className="sub_menu_mob">
                            <ul>
                                {
                                    props.products.map((product) => (
                                        <li key={product.id} className="sub_menu_mob_li">
                                            <Link 
                                                href={"/" + product.title.split(" ").join("-").replace("%", "%25")}
                                            >
                                                <a onClick={toggleMobileMenu} className="menu_span_dd">{product.title}</a>
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </li>
                    <li className={toggleLanguageDd ? "open_menu_dropdown" : "closed_menu_dropdown"}>
                        <span
                            className={ toggleLanguageDd ? "theme_text_color menu_dropdown_bottom_border" : "theme_text_color"} 
                            onClick={() => setToggleLanguageDd(!toggleLanguageDd)}
                        >
                            Lingue &nbsp;
                            <i className="fa fa-caret-down"></i>
                        </span>
                        <div className="sub_menu_mob">
                            <ul>
                                <li className="drop_menu sub_menu_mob_li">
                                    <a href="#">English</a>
                                </li>
                                <li className="drop_menu sub_menu_mob_li">
                                    <a href="#">Italian</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default MobileMenu;