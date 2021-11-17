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
                    price={props.productDetail ? props.productDetail.variants ? props.productDetail.variants[0].price : null : null}
                    onClick={props.addItemToCheckout} 
                    classsName="add_to_cart"
                />
                : null
            }
            <InsightsIcons windowWidth={windowWidth} productDetail={props.productDetail} />
            {
                windowWidth > 1024
                ? <AddToCartButton
                    price={props.productDetail ? props.productDetail.variants ? props.productDetail.variants[0].price : null : null}
                    onClick={props.addItemToCheckout}
                    classsName="add_to_cart fixed_cart_btn"
                />
                : null
            }            
        </div>
    );
};

export default ProductInsights;