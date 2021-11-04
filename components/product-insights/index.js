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
                windowWidth < 769
                ? <AddToCartButton 
                    price={props.productDetail ? props.productDetail.variants ? props.productDetail.variants[0].price : null : null}
                    onClick={props.addItemToCheckout} 
                />
                : null
            }
            <InsightsIcons windowWidth={windowWidth} />
            {
                windowWidth > 768
                ? <AddToCartButton
                    price={props.productDetail ? props.productDetail.variants ? props.productDetail.variants[0].price : null : null}
                    onClick={props.addItemToCheckout}
                />
                : null
            }            
        </div>
    );
};

export default ProductInsights;