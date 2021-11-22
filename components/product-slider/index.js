import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import "swiper/css";
import 'swiper/css/pagination';

const ProductSlider = (props) => {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
    },[]);

    return (
        <div className="top_con">

            {/* Display product title at the top for mobile */}
            {
                windowWidth < 1025
                ?
                <div className="slider_product_details_left">
                    <div>
                        <h1 className="theme_text_color">{props.productDetail?.title}</h1>
                        {/* <h2 className="theme_text_color">CBD OIL | 1500mg</h2> */}
                    </div>    
                </div>
                : null
            }
            <div className="mobile_con_ps_icons">
                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    spaceBetween={20}
                    className="product_slider"
                    slidesPerView={1}
                >
                    {
                        props.productDetail && props.productDetail.images?.map((image) => (
                            <SwiperSlide key={image.src}>
                                <img className="product_img" src={image.src} alt={"product name here"} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>


            {/* show the product title and subtitle on the left side of the slider in desktop */}
            {
                windowWidth > 1025
                ?
                <div className="slider_product_details_left">
                    <div className="">
                        <h1 className="theme_text_color">{props.productDetail?.title}</h1>
                        {/* <h2 className="theme_text_color">CBD OIL | 1500mg</h2> */}
                        <div className="p_slider_icons">
                            {/* <img src="./images/icons/sleep.png" alt="sleep icon" />
                            <img src="./images/icons/mood.png" alt="mood icon" />
                            <img src="./images/icons/heart-friendly.png" alt="heard friendly icon" />
                            <img src="./images/icons/antioxydant.png" alt="antioxydant icon" />
                            <img src="./images/icons/energy.png" alt="energy icon" /> */}
                            {
                                props.productDetail?.title === "Calm Caps" || props.productDetail?.title === "Sleep Caps"
                                || props.productDetail?.title === "Capsule Calm" || props.productDetail?.title === "Capsule Sleep"
                                ?
                                    props.productDetail?.title === "Calm Caps" || props.productDetail?.title === "Capsule Calm"
                                    ? <img src={"./images/icons/CALM/Benefits/Vytae_Calm_Benefits_" + (props.lang === "it" ? "ITA" : "ENG") + "_text-ok-01.svg"} alt="benefits" />
                                    : <img src={"./images/icons/SLEEP/Benefits/Vytae_Sleep_Benefits_" + (props.lang === "it" ? "ITA" : "ENG") + "_text_ok-01.svg"} alt="benefits" />
                                : null
                            }
                        </div>
                    </div>    
                </div>
                : null
            }
            <div className="slider_product_details_right">
                {
                    windowWidth < 1025
                    ? 
                    <>
                        {/* <h2 className="theme_text_color benefici_h2 font_200">Benefici</h2> */}
                        <div className="p_slider_icons">
                            {/* <img src="./images/icons/sleep.png" alt="sleep icon" />
                            <img src="./images/icons/mood.png" alt="mood icon" />
                            <img src="./images/icons/heart-friendly.png" alt="heard friendly icon" />
                            <img src="./images/icons/antioxydant.png" alt="antioxydant icon" />
                            <img src="./images/icons/energy.png" alt="energy icon" /> */}
                            {
                                props.productDetail?.title === "Calm Caps" || props.productDetail?.title === "Sleep Caps"
                                || props.productDetail?.title === "Capsule Calm" || props.productDetail?.title === "Capsule Sleep"
                                ?
                                    props.productDetail?.title === "Calm Caps" || props.productDetail?.title === "Capsule Calm"
                                    ? <img src={"./images/icons/CALM/Benefits/Vytae_Calm_Benefits_" + (props.lang === "it" ? "ITA" : "ENG") + "_text-ok-01.svg"} alt="benefits" />
                                    : <img src={"./images/icons/SLEEP/Benefits/Vytae_Sleep_Benefits_" + (props.lang === "it" ? "ITA" : "ENG") + "_text_ok-01.svg"} alt="benefits" />
                                : null
                            }
                        </div>
                    </>
                    : null
                }
                <div className="description theme_text_color text_right">
                    <div dangerouslySetInnerHTML={{__html: props.productDetail?.descriptionHtml}}></div>
                </div>
            </div>
        </div>
    );
};

export default ProductSlider;