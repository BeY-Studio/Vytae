import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import StarRatings from 'react-star-ratings';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Reviews = (props) => {
    const [rating, setRating] = useState(3.5);

    const changeRating = (newRating, name) => {
        setRating(newRating);
    }

    return (
        <section className="reviews_section">
            <div className="content text_center">
                <h2 className="section_h2 color_theme_text">Rewiews</h2>
                <h3 className="section_h3 color_theme_text">What people say about us</h3>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{"clickable": true}}
                    className="reviews_slider"
                    loop={true}
                    centeredSlides={true}
                    slidesPerGroup={1}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={(a) => console.log(a)}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        600: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {
                        [1,2,3].map((index) => (
                            <SwiperSlide key={index}>
                                <div className="review_slide_content text_left">
                                    <p>Lorem ipsum is a dummy text. Which is used in the media industry. This is a standard practice to be used as a dummy text where ever needed.</p>
                                    <span className="name">Mario Rossi</span>
                                    {/* {
                                        swiper.activeIndex ? <p>This slide is active {index}</p> : null
                                    } */}
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <div className="product_uploader">
                    <div className="inner">
                        <span className="name">Mario Rossi</span>
                        <span className="position">Direttore Generale - Ospedale Medico Napoli</span>
                        <div className="rating">
                            <span>Rated: &nbsp;</span>
                            <StarRatings
                                rating={rating}
                                // changeRating={changeRating}
                                numberOfStars={5}
                                name='rating'
                                starRatedColor="#D3C09F"
                                starHoverColor="#dfd1b9"
                                starDimension="15px"
                                starSpacing="3px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;