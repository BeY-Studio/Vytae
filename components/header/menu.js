import React, { useState, useEffect } from "react";
import Link from 'next/link';

const Menu = (props) => {
    const [itemsNumber, setItemsNumber] = useState(0);
    useEffect(() => {
        let num = 0;
        for (let i=0;i<props.checkout?.lineItems?.length;i++) {
            num = num + Number(props.checkout?.lineItems[i]?.quantity);
        }
        setItemsNumber(num);
    },[props.checkout.lineItems]);

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
                        <a href={"https://www.vytae.org/" + ( props.lang === "it" ? "sostenibilita/?lang=it" : "sustainability/")}>
                            {
                                props.lang === "it"
                                ? "Sostenibilità"
                                : "Sustainability"
                            }
                        </a>
                    </li>
                    <li className="drop_menu">
                        <a href="#">
                            {
                                props.lang === "it"
                                ? "Prodotti"
                                : "Products"
                            }
                            &nbsp;                            
                            <i className="fa fa-caret-down"></i>
                        </a>
                        <div className="menu_dropdown">
                            {
                                props.products.map((product) => (
                                    <Link 
                                        href={"/" + product.title.split(" ").join("-").replace("%", "%25") + "?lang=" + props.lang}
                                        key={product.id}
                                    >
                                        <a className="menu_span_dd">{product.title}</a>
                                    </Link>
                                ))
                            }
                        </div>
                    </li>
                    <li className="drop_menu">
                        {
                            props.lang === "it"
                            ? <div className="menu_links" onClick={() => props.changeLangFromMenu("it")}>Italiano <i className="fa fa-caret-down"></i></div>
                            : <div className="menu_links" onClick={() => props.changeLangFromMenu("en")}>English <i className="fa fa-caret-down"></i></div>
                        }
                        <div className="menu_dropdown">
                            {
                                props.lang === "it"
                                ? <span onClick={() => props.changeLangFromMenu("en")}>English</span>
                                : <span onClick={() => props.changeLangFromMenu("it")}>Italian</span>
                            }
                        </div>
                    </li>
                </ul>
                <span className="menu_cart" onClick={props.toggleCart}>
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    <span className="number">{itemsNumber}</span>
                </span>
            </nav>
        </>
    );
};

export default Menu;