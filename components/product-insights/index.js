import React, { useState, useEffect } from "react";
import InsightsIcons from "./insights-icons";
import AddToCartButton from "../buttons/addToCart";

const ProductInsights = () => {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
    },[]);

    return (
        <div className="product_insights_con">
            {
                windowWidth < 769
                ? <AddToCartButton price={'49,99'} />
                : null
            }
            <InsightsIcons windowWidth={windowWidth} />
            {
                windowWidth > 768
                ? <AddToCartButton price={'49,99'} />
                : null
            }            
        </div>
    );
};

export default ProductInsights;