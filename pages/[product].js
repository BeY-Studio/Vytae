import React, { useState, useEffect } from "react";
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

    // Initializing a client to return content in the store's primary language
    const client = Client.buildClient({
        domain: 'vytaescience.myshopify.com',
        storefrontAccessToken: 'cd9938f5f518fd5362be333e604a4c87'
    });

    useEffect(() => {
        setWindowWidth(window.innerWidth);

        // Fetch all products in your shop
        // client.product.fetchAll().then((products) => {
        //     // Do something with the products
        //     console.log("Products: --- ", products);
        // })
        // .catch((error) => { console.log("Error: ", error)});


        // // Fetch a single product by ID
        // const productId = 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc4NTc5ODkzODQ=';

        // client.product.fetch(productId).then((product) => {
        // // Do something with the product
        //     console.log("Single product: ", product);
        // });

    },[]);

    return (
        <Main
            title={"this will be product title for seo"}
            description={"this will be product description for seo"}
            imageUrl={"this will be product image url"}
            keyword={"These will be product keywords"}
        >
            <ProductSlider />
            <ProductInsights />
            { windowWidth > 768 ? <HandsSecDesktop /> : null }
            { windowWidth < 769 ? <PackagingMobile /> : null }
            <Reviews />
            { windowWidth > 768 ? <PackagingSecDesktop /> : null }
            { windowWidth < 769 ? <HandsSecMobile /> : null }
        </Main>
    );
}
