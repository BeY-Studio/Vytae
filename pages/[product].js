import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Client from 'shopify-buy';
// import styles from '../styles/Home.module.css';
import Main from '../layouts/main';
import ProductSlider from '../components/product-slider';
import ProductInsights from '../components/product-insights';
import HandsSecDesktop from "../components/hands-sec-desktop";
import Reviews from "../components/reviews-section";
import PackagingSecDesktop from "../components/packaging-sec-desktop";
import PackagingMobile from "../components/packaging-mob";
import HandsSecMobile from "../components/hands-sec-mobile";

export default function Home() {
    const [windowWidth, setWindowWidth] = useState(0);
    const [products, setProducts] = useState([]);
    const [productDetail, setProductDetail] = useState({});
    const [checkoutData, setCheckoutData] = useState({});

    const router = useRouter();

    // Initializing a client to return content in the store's primary language
    const client = Client.buildClient({
        domain: 'vytaescience.myshopify.com',
        storefrontAccessToken: 'cd9938f5f518fd5362be333e604a4c87'
    });

    const fetchAllProducts = async () => {
        // Fetch all products in your shop
        const products = await client.product.fetchAll();
        setProducts(products);
    };

    const fetchProductWithId = async (id) => {
        const productDetails = await client.product.fetch(id);
        setProductDetail(productDetails);
    };

    // const addItemToCheckout = async (variantId, quantity) => {
    const addItemToCheckout = async () => {
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
    };

    const createCheckout = async () => {
        const checkoutData = await client.checkout.create();
        setCheckoutData(checkoutData);
        localStorage.setItem("checkoutId",JSON.stringify(checkoutData.id));
    };

    const getProductDetails = () => {
        let productId = window.location.pathname.replace("/","");
        fetchProductWithId(productId);
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

        getProductDetails();
        fetchAllProducts();   

    },[]);

    const onRouteChangeDone = () => {
        // reload the product data
        getProductDetails();
    }

    useEffect(() => {
        router.events.on('routeChangeComplete', onRouteChangeDone);
        return () => {
            router.events.off('routeChangeComplete', onRouteChangeDone);
          };
    }, [router.events]);

    return (
        <Main
            title={"this will be product title for seo"}
            description={"this will be product description for seo"}
            imageUrl={"this will be product image url"}
            keyword={"These will be product keywords"}
            products={products}
            checkout={checkoutData}
        >
            <ProductSlider productDetail={productDetail} />
            <ProductInsights productDetail={productDetail} addItemToCheckout={addItemToCheckout} />
            { windowWidth > 768 ? <HandsSecDesktop /> : null }
            { windowWidth < 769 ? <PackagingMobile /> : null }
            <Reviews />
            { windowWidth > 768 ? <PackagingSecDesktop /> : null }
            { windowWidth < 769 ? <HandsSecMobile /> : null }
        </Main>
    );
}
