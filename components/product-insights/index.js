import React, { useState, useEffect } from "react";
import InsightsIcons from "./insights-icons";
import AddToCartButton from "../buttons/addToCart";

const ProductInsights = (props) => {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
    },[]);

    return (
        <div className="product_insights_con">
            {
                windowWidth < 1025
                ? <AddToCartButton
                    itemAdded={props.itemAdded}
                    checkout={props.checkout}
                    toggleCart={props.toggleCart}
                    price={props.productDetail}
                    onClick={props.addItemToCheckout}
                    conClassName="add_to_cart_con"
                    lang={props.lang}
                />
                : null
            }
            <InsightsIcons windowWidth={windowWidth} productDetail={props.productDetail} lang={props.lang} />
            {
                windowWidth > 1024
                ? <AddToCartButton
                    itemAdded={props.itemAdded}
                    checkout={props.checkout}
                    toggleCart={props.toggleCart}
                    price={props.productDetail}
                    onClick={props.addItemToCheckout}
                    conClassName="add_to_cart_con fixed_cart_btn"
                    lang={props.lang}
                />
                : null
            }            
        </div>
    );
};

export default ProductInsights;