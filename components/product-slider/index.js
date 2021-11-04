import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProductSlider = () => {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
    },[]);

    return (
        <div className="top_con">

            {/* Display product title at the top for mobile */}
            {
                windowWidth < 769
                ?
                <div className="slider_product_details_left">
                    <div>
                        <h1 className="theme_text_color">calm</h1>
                        <h2 className="theme_text_color">CBD OIL | 1500mg</h2>
                    </div>    
                </div>
                : null
            }
            <div className="mobile_con_ps_icons">
                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    className="product_slider"
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        600: {
                            slidesPerView: 1,
                        },
                        1024: {
                            slidesPerView: 1,
                        },
                    }}
                >
                    {
                        [1,2,3].map((index) => (
                            <SwiperSlide key={index}>
                                <img className="product_img" src={"https://www.vytae.com/wp-content/uploads/2021/09/pianta_vytae_2.2.png"} alt={"product name here"} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>


            {/* show the product title and subtitle on the left side of the slider in desktop */}
            {
                windowWidth > 768
                ?
                <div className="slider_product_details_left">
                    <div className="">
                        <h1 className="theme_text_color">calm</h1>
                        <h2 className="theme_text_color">CBD OIL | 1500mg</h2>
                        <div className="p_slider_icons">
                            <img src="./images/icons/sleep.png" alt="sleep icon" />
                            <img src="./images/icons/mood.png" alt="mood icon" />
                            <img src="./images/icons/heart-friendly.png" alt="heard friendly icon" />
                            <img src="./images/icons/antioxydant.png" alt="antioxydant icon" />
                            <img src="./images/icons/energy.png" alt="energy icon" />
                        </div>
                    </div>    
                </div>
                : null
            }
            <div className="slider_product_details_right">
                {
                    windowWidth < 769
                    ? 
                    <>
                        <h2 className="theme_text_color benefici_h2 font_200">Benefici</h2>
                        <div className="p_slider_icons">
                            <img src="./images/icons/sleep.png" alt="sleep icon" />
                            <img src="./images/icons/mood.png" alt="mood icon" />
                            <img src="./images/icons/heart-friendly.png" alt="heard friendly icon" />
                            <img src="./images/icons/antioxydant.png" alt="antioxydant icon" />
                            <img src="./images/icons/energy.png" alt="energy icon" />
                        </div>
                    </>
                    : null
                }
                <div className="description theme_text_color text_justify">
                    <p>Calm è un integratore alimentare a base di Olio di semi di Canapa ricco di omega 3 e omega 6.</p>
                    <p>Utile per favorire un fisiologico effetto rilassante e il benessere mentale.</p>
                </div>
            </div>
        </div>
    );
};

export default ProductSlider;