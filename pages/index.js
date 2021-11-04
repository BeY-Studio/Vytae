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

    useEffect(() => {
        window.location.href = "https://www.vytae.com/";
    },[]);

    return (
        <></>
    );
}
