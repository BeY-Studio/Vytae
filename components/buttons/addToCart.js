import React from "react";

const AddToCartButton = (props) => {

    // const goToShopifyCheckout = () => {
    //     if (props.checkout?.lineItems?.length) {
    //         localStorage.clear();
    //         window.location.href = props.checkout.webUrl;
    //     } else {
    //         alert("You do not have any item in the cart.");
    //     }
    // }

    return (
        <div className={props.conClassName}>
            {/* <div className={props.itemAdded ? "cart_item_addition cart_item_addition_open" : "cart_item_addition cart_item_addition_closed" }>
                <div>
                    <div className="cart_add_text">
                        <span onClick={goToShopifyCheckout}>Checkout</span> | <span onClick={props.toggleCart}>Cart</span>
                    </div>
                    <div className="number">+1</div>
                </div>
            </div> */}
            {
                props?.price?.variants?.length > 0 &&
                <button className="add_to_cart" onClick={props.onClick}><span>&euro;{props?.price?.variants?.[0]?.price?.amount}</span> - {props.lang ==="it" ? "Aggiungi al carrello" : "Add to cart"}</button>
            }
            
        </div>
    );
};

export default AddToCartButton;