import React, { useEffect } from 'react';
import { gsap } from "gsap";

const BgComponent = (props) => {

    useEffect(() => {
        const waves = gsap.timeline({
            repeat: -1,
            defaults: {
                duration: 4.0,
                ease: 'none'
            }
        });
        waves
            .to('.c1', { scale: 2, opacity: 1 }, 0)
            .to('.c2', { scale: 1.5, opacity: 0.5 }, 0)
            .to('.c3', { scale: 1.33, opacity: 0.1 }, 0);
    }, []);


    return (
        <div className="inner">
            <div className="box">

                <svg className="circle c1" width="458" height="458" viewBox="0 0 458 458" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_ddii)">
                        <circle cx="229" cy="229" r="192" stroke="#EDEBEA" strokeWidth="26" />
                    </g>
                    <defs>
                        <filter id="filter0_ddii" x="0" y="0" width="458" height="458" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dx="-6" dy="-6" />
                            <feGaussianBlur stdDeviation="9" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dx="6" dy="6" />
                            <feGaussianBlur stdDeviation="9" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.788235 0 0 0 0 0.784314 0 0 0 0 0.780392 0 0 0 0.2 0" />
                            <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dx="-6" dy="-6" />
                            <feGaussianBlur stdDeviation="6.5" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.788235 0 0 0 0 0.784314 0 0 0 0 0.780392 0 0 0 0.15 0" />
                            <feBlend mode="normal" in2="shape" result="effect3_innerShadow" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dx="6" dy="6" />
                            <feGaussianBlur stdDeviation="6.5" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                            <feBlend mode="normal" in2="effect3_innerShadow" result="effect4_innerShadow" />
                        </filter>
                    </defs>
                </svg>

                <svg className="circle c2" width="458" height="458" viewBox="0 0 458 458" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_ddii)">
                        <circle cx="229" cy="229" r="192" stroke="#EDEBEA" strokeWidth="26" />
                    </g>
                    <defs>
                        <filter id="filter0_ddii" x="0" y="0" width="458" height="458" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dx="-6" dy="-6" />
                            <feGaussianBlur stdDeviation="9" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dx="6" dy="6" />
                            <feGaussianBlur stdDeviation="9" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.788235 0 0 0 0 0.784314 0 0 0 0 0.780392 0 0 0 0.2 0" />
                            <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dx="-6" dy="-6" />
                            <feGaussianBlur stdDeviation="6.5" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.788235 0 0 0 0 0.784314 0 0 0 0 0.780392 0 0 0 0.15 0" />
                            <feBlend mode="normal" in2="shape" result="effect3_innerShadow" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dx="6" dy="6" />
                            <feGaussianBlur stdDeviation="6.5" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                            <feBlend mode="normal" in2="effect3_innerShadow" result="effect4_innerShadow" />
                        </filter>
                    </defs>
                </svg>


                <svg className="circle c3" width="458" height="458" viewBox="0 0 458 458" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_ddii)">
                        <circle cx="229" cy="229" r="192" stroke="#EDEBEA" strokeWidth="26" />
                    </g>
                    <defs>
                        <filter id="filter0_ddii" x="0" y="0" width="458" height="458" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dx="-6" dy="-6" />
                            <feGaussianBlur stdDeviation="9" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dx="6" dy="6" />
                            <feGaussianBlur stdDeviation="9" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.788235 0 0 0 0 0.784314 0 0 0 0 0.780392 0 0 0 0.2 0" />
                            <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dx="-6" dy="-6" />
                            <feGaussianBlur stdDeviation="6.5" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.788235 0 0 0 0 0.784314 0 0 0 0 0.780392 0 0 0 0.15 0" />
                            <feBlend mode="normal" in2="shape" result="effect3_innerShadow" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dx="6" dy="6" />
                            <feGaussianBlur stdDeviation="6.5" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                            <feBlend mode="normal" in2="effect3_innerShadow" result="effect4_innerShadow" />
                        </filter>
                    </defs>
                </svg>

            </div>
        </div>
    )
}

export default BgComponent;
