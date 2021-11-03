import React, { useState, useEffect } from "react";
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Main from '../layouts/main';
import ProductSlider from '../components/product-slider';
import ProductInsights from '../components/product-insights';
import HandsSecDesktop from "../components/hands-sec-desktop";
import Reviews from "../components/reviews-section";
import PackagingSecDesktop from "../components/packaging-sec-desktop";

export default function Home() {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
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
            <Reviews />
            { windowWidth > 768 ? <PackagingSecDesktop /> : null }
        </Main>
    );
}
