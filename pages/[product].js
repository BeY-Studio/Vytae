import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Client from 'shopify-buy';
import Main from '../layouts/main';
import ProductSlider from '../components/product-slider';
import ProductInsights from '../components/product-insights';
import TabsSection from "../components/tabsSection";
import AccordionSection from "../components/accordionSection";
// import Reviews from "../components/reviews-section";
import Packaging from "../components/packaging";
import HandsSec from "../components/hands-sec";
import Loader from "../components/loader";

export default function Home() {
    const [windowWidth, setWindowWidth] = useState(0);
    const [products, setProducts] = useState([]);
    const [productDetail, setProductDetail] = useState({});
    const [checkoutData, setCheckoutData] = useState({});
    const [openCart, setOpenCart] = useState(false);
    const [loader, setLoader] = useState(false);
    const [itemAdded, setItemAdded] = useState(false);

    const router = useRouter();

    // Initializing a client to return content in the store's primary language
    const client = Client.buildClient({
        domain: 'vytaescience.myshopify.com',
        storefrontAccessToken: 'cd9938f5f518fd5362be333e604a4c87'
    });

    const fetchAllProducts = async () => {
        // initiate loader first
        setLoader(true);
        // Fetch all products in your shop
        const products = await client.product.fetchAll();
        setProducts(products);

        // once the products are fetched initially then get the product details by matching the name
        getProductDetails(products);
    };

    const fetchProductWithId = async (id) => {
        const productDetails = await client.product.fetch(id);
        setProductDetail(productDetails);
    };

    // const addItemToCheckout = async (variantId, quantity) => {
    const addItemToCheckout = async () => {
        setLoader(true);
        let variantId = productDetail.variants[0].id;
        const lineItemsToAdd = [
            {
              variantId: variantId,
              quantity: 1,
            }
        ];
        // // // Add an item to the checkout
        const checkoutDataUpdated = await client.checkout.addLineItems(checkoutData.id, lineItemsToAdd);
        
        // // // update the product in the state checkout
        setCheckoutData(checkoutDataUpdated);
        setLoader(false);
        setItemAdded(true);
        setTimeout(() => { setItemAdded(false); },5000);
    };

    const createCheckout = async () => {
        const checkoutData = await client.checkout.create();
        setCheckoutData(checkoutData);
        localStorage.setItem("checkoutId",JSON.stringify(checkoutData.id));
    };

    const getProductDetails = (allProducts) => {
        // old method fetch product by id
        // let productId = window.location.pathname.replace("/","");
        // fetchProductWithId(productId);
        
        if (allProducts.length) {
            let productId = "";
            let productName = window.location.pathname.replace("/","");
            for (let i=0;i<allProducts.length;i++) {
                if (allProducts[i].title.split(" ").join("-") === productName.replace("%25", "%")) {
                    productId = allProducts[i].id;
                }
            }
            fetchProductWithId(productId);
        }
        setLoader(false);
    }

    const fetchCheckout = async () => {
        const checkoutId = JSON.parse(localStorage.getItem("checkoutId"));

        const checkoutData = await client.checkout.fetch(checkoutId);
        setCheckoutData(checkoutData);
    }

    useEffect(() => {
        if (JSON.parse(localStorage.getItem("checkoutId"))) {
            fetchCheckout();
        } else {
            createCheckout();
        }
        setWindowWidth(window.innerWidth);

        // getProductDetails();
        fetchAllProducts();   

    },[]);

    const onRouteChangeDone = () => {
        // reload the product data
        if (products.length === 0) {
            fetchAllProducts();
        } else {
            // in the old method we only need the line below
            getProductDetails(products);
        }
    }

    const updateLineItem = async (id, quantity) => {
        setLoader(true);
        const lineItemsToUpdate = [ {id: id, quantity: quantity} ];
        // Update the line item on the checkout (change the quantity or variant)
        const checkoutDataUpdated = await client.checkout.updateLineItems(checkoutData.id, lineItemsToUpdate);
        // // // update the product in the state checkout
        setCheckoutData(checkoutDataUpdated);
        setLoader(false);
    }

    const deleteLineItem = async (id) => {
        setLoader(true);
        const lineItemIdsToRemove = [id];        
        // Remove an item from the checkout
        const checkoutDataUpdated = await client.checkout.removeLineItems(checkoutData.id, lineItemIdsToRemove)
        // // // update the product in the state checkout
        setCheckoutData(checkoutDataUpdated);
        setLoader(false);
    }

    const toggleCart = () => {
        setOpenCart(!openCart);
    }

    useEffect(() => {
        router.events.on('routeChangeComplete', onRouteChangeDone);
        return () => {
            router.events.off('routeChangeComplete', onRouteChangeDone);
          };
    }, [router.events]);

    return (
        <Main
            title={productDetail?.title}
            description={"this will be product description for seo"}
            imageUrl={"this will be product image url"}
            keyword={"These will be product keywords"}
            products={products}
            checkout={checkoutData}
            openCart={openCart}
            setOpenCart={setOpenCart}
            toggleCart={toggleCart}
            updateLineItem={updateLineItem}
            deleteLineItem={deleteLineItem}
        >
            {loader ? <Loader /> : null}
            <ProductSlider productDetail={productDetail} />
            <ProductInsights
                productDetail={productDetail}
                addItemToCheckout={addItemToCheckout}
                toggleCart={toggleCart}
                checkout={checkoutData}
                itemAdded={itemAdded}
            />
            {
                windowWidth > 1025
                ?
                <TabsSection productDetail={productDetail} />
                :
                <AccordionSection productDetail={productDetail} />
            }
            <Packaging windowWidth={windowWidth} />
            {/* <Reviews /> */}
            <HandsSec windowWidth={windowWidth} productDetail={productDetail} />
        </Main>
    );
}
