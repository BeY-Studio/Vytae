import React, { useState, useEffect } from "react";
import Link from 'next/link';

const MobileMenu = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [toggleProducts, setToggleProducts] = useState(false);
    const [toggleLearn, setToggleLearn] = useState(false);
    const [toggleLanguageDd, setToggleLanguageDd] = useState(false);

    const [itemsNumber, setItemsNumber] = useState(0);
    useEffect(() => {
        let num = 0;
        for (let i=0;i<props.checkout?.lineItems?.length;i++) {
            num = num + Number(props.checkout?.lineItems[i]?.quantity);
        }
        setItemsNumber(num);
    },[props.checkout?.lineItems]);

    const toggleMobileMenu = () => {
        setMenuOpen(!menuOpen);
        setToggleProducts(false);
        setToggleLearn(false);
        setToggleLanguageDd(false);
    };

    return (
        <>
           <nav className="menu_nav">
                <div className="logo">
                    <a href={"https://vytae.com/?lang=" + props.lang}>
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
                        <a href={"https://www.vytae.com/?lang=" + props.lang}>Home</a>
                    </li>
                    <li className={toggleProducts ? "open_menu_dropdown" : "closed_menu_dropdown"}>
                        <span 
                            className={toggleProducts ? "theme_text_color menu_dropdown_bottom_border" : "theme_text_color"}
                            onClick={() => setToggleProducts(!toggleProducts)}
                        >
                            <a href={`https://www.vytae.com/shop/?lang=it${props.lang}`}>
                                {
                                    props.lang === "it"
                                    ? "Shop"
                                    : "Shop"
                                }
                            </a>
                            &nbsp;
                            <i className="fa fa-caret-down"></i>
                        </span>
                        <div className="sub_menu_mob">
                            <ul>
                                {
                                    props.products.map((product) => (
                                        <li key={product.id} className="sub_menu_mob_li">
                                            <Link 
                                                href={"/" + product.title.split(" ").join("-").replace("%", "%25") + "?lang=" + props.lang}
                                            >
                                                <a onClick={toggleMobileMenu} className="menu_span_dd">{product.title}</a>
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </li>
                    <li className={toggleLearn ? "open_menu_dropdown" : "closed_menu_dropdown"}>
                        <span 
                            className={toggleLearn ? "theme_text_color menu_dropdown_bottom_border" : "theme_text_color"}
                            onClick={() => setToggleLearn(!toggleLearn)}
                        >
                            {
                                props.lang === "it"
                                ? "Approfondisci"
                                : "Learn"
                            }
                            &nbsp;
                            <i className="fa fa-caret-down"></i>
                        </span>
                        <div className="sub_menu_mob">
                            <ul>
                                <li className="sub_menu_mob_li">
                                    <Link 
                                        href={"https://vytae.com/" + (props.lang === "it" ? "sec-101/?lang=it" : "learn/sec-101/")}
                                    >
                                        <a onClick={toggleMobileMenu} className="menu_span_dd">SEC 101</a>
                                    </Link>
                                </li>
                                <li className="sub_menu_mob_li">
                                    <Link 
                                        href={"https://vytae.com/" + (props.lang === "it" ? "cbd-101/?lang=it" : "learn/cbd-101/")}
                                    >
                                        <a onClick={toggleMobileMenu} className="menu_span_dd">CBD 101</a>
                                    </Link>
                                </li>
                                <li className="sub_menu_mob_li">
                                    <Link 
                                        href={"https://vytae.com/" + (props.lang === "it" ? "cdb-e-sonno/?lang=it" : "learn/cdb-e-sonno/")}
                                    >
                                        <a onClick={toggleMobileMenu} className="menu_span_dd">{props.lang === "it" ? "CBD e Sonno" : "CDB and Insomnia"}</a>
                                    </Link>
                                </li>
                                <li className="sub_menu_mob_li">
                                    <Link 
                                        href={"https://vytae.com/" + (props.lang === "it" ? "cbd-e-ansia/?lang=it" : "learn/cbd-and-anxiety/")}
                                    >
                                        <a onClick={toggleMobileMenu} className="menu_span_dd">{props.lang === "it" ? "CBD e Ansia" : "CBD and Anxiety"}</a>
                                    </Link>
                                </li>
                                <li className="sub_menu_mob_li">
                                    <Link 
                                        href={"https://vytae.com/" + (props.lang === "it" ? "cdb-e-sollievo-dal-dolore/?lang=it" : "learn/cdb-and-pain-relief/")}
                                    >
                                        <a onClick={toggleMobileMenu} className="menu_span_dd">{props.lang === "it" ? "CBD e sollievo dal dolore" : "CBD and Pain Relief"}</a>
                                    </Link>
                                </li>
                                <li className="sub_menu_mob_li">
                                    <Link 
                                        href={"https://vytae.com/" + (props.lang === "it" ? "cbd-e-infiammazione/?lang=it" : "learn/cbd-and-inflammation/")}
                                    >
                                        <a onClick={toggleMobileMenu} className="menu_span_dd">{props.lang === "it" ? "CBD e infiammazione" : "CBD and Inflammation"}</a>
                                    </Link>                                  
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href={"https://www.vytae.com/" + ( props.lang === "it" ? "sostenibilita/?lang=it" : "sustainability/")}>
                            {
                                props.lang === "it"
                                ? "Sostenibilità"
                                : "Sustainability"
                            }
                        </a>
                    </li>
                    <li className={toggleLanguageDd ? "open_menu_dropdown" : "closed_menu_dropdown"}>
                        <span
                            className={ toggleLanguageDd ? "theme_text_color menu_dropdown_bottom_border" : "theme_text_color"} 
                            onClick={() => setToggleLanguageDd(!toggleLanguageDd)}
                        >
                            {
                                props.lang === "it"
                                ? "Lingue"
                                : "Language"
                            } &nbsp;
                            <i className="fa fa-caret-down"></i>
                        </span>
                        <div className="sub_menu_mob">
                            <ul>
                                <li className="drop_menu sub_menu_mob_li">
                                    <span onClick={() => props.changeLangFromMenu("en")}>English</span>
                                </li>
                                <li className="drop_menu sub_menu_mob_li">
                                    <span onClick={() => props.changeLangFromMenu("it")}>{props.lang === "it" ? "Italiano" : "Italian"}</span>
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