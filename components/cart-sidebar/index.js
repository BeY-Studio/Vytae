import React from "react";

const Cart = (props) => {

    const goToShopifyCheckout = () => {
        if (props.checkout.lineItems.length) {
            localStorage.clear();
            window.location.href = props.checkout.webUrl;
        } else {
            alert("You do not have any item in the cart.");
        }
    }

    const updateProductQuantity = (type, id, quantity) => {
        if (type === "minus") {
            if (Number(quantity) > 1) {
                props.updateLineItem(id, (Number(quantity) - 1));
            }
        }
        if (type === "plus") {
            props.updateLineItem(id, (Number(quantity) + 1));
        }
    }


    return (
        <>
            <div
                className={props.openCart ? "backdrop backdrop_open" : "backdrop backdrop_closed"}
                onClick={props.toggleCart}
            ></div>
            <div className={props.openCart ? "cart_container cart_container_open" : "cart_container cart_container_closed"}>
                <div className="close_cart" onClick={props.toggleCart}>
                    <i className="far fa-2x fa-times-circle color_theme_text"></i>
                </div>
                <h2 className="section_h2 color_theme_text cart_h2">Cart</h2>
                {
                    props.checkout?.lineItems?.length
                    ?
                        <>
                            <div className="c_p_con color_theme_text">
                                {
                                    props.checkout?.lineItems.map((item, index) => (
                                        <div className="inner" key={"vy_" + index}>
                                            <span className="title font_500">{item.title}</span>
                                            <div className="p_and_q color_black">
                                                <span className="price font_500">&euro;{item.variant?.price}</span>
                                                <div className="quantity">
                                                    <div className="q_inner">
                                                        <i className="fa fa-minus color_theme_text" onClick={() => updateProductQuantity("minus", item.id, item.quantity)}></i>
                                                        <span className="quantity_number">{item.quantity}</span>
                                                        <i className="fa fa-plus color_theme_text" onClick={() => updateProductQuantity("plus", item.id, item.quantity)}></i>
                                                    </div>
                                                    <i className="fa fa-trash-alt" onClick={() => props.deleteLineItem(item.id)}></i>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }                            
                            </div>
                            <div className="checkout_con">
                                <button className="normal_button color_white" onClick={goToShopifyCheckout}>Check out</button>
                            </div>
                        </>
                    :
                        <div className="empty_cart">
                            <span>Your cart is empty</span>
                            <span className="go_back color_theme_text" onClick={props.toggleCart}>
                                <i className="fa fa-long-arrow-alt-left"></i> go back
                            </span>
                        </div>
                }
            </div>
        </>
    );
};

export default Cart;