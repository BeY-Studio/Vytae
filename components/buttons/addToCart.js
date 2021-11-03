import React from "react";

const AddToCartButton = (props) => {
    return (
        <button className="add_to_cart"><span>&euro;{props.price}</span>/month - Add to cart</button>
    );
};

export default AddToCartButton;