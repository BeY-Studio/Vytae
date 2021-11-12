import React from "react";

const InsightsIcons = (props) => {
    return (
        <div className="insights_icons_con">
            <div className="images_second_set">
                {/* <img src="./images/icons/animal-testing-free-white.png" alt="animal testing free image" />
                <img src="./images/icons/artificial-dyes-free-white.png" alt="artificial dyes free image" />
                <img src="./images/icons/dairy-free-white.png" alt="dairy free image" />
                <img src="./images/icons/gluten-free-white.png" alt="gluten free image" />
                <img src="./images/icons/good-manufacturing-practice-certification-white.png" alt="good manufacturing practice certification image" />
                <img src="./images/icons/made-in-italy-white.png" alt="made in italy image" />
                <img src="./images/icons/naturally-delivered-white.png" alt="naturally delivered image" />
                <img src="./images/icons/no-preservatives-white.png" alt="no preservatives image" />
                <img src="./images/icons/thc-free-white.png" alt="thc free image" />
                <img src="./images/icons/vegan-white.png" alt="vegan image" /> */}
                {
                    props.productDetail?.title === "Calm Caps" || props.productDetail?.title === "Sleep Caps"
                    ?
                        props.productDetail?.title === "Calm Caps"
                        ? <img src="./images/icons/CALM/Ingredients/Vytae_Calm_Ingredients_ITA_text ok-01.svg" alt="Ingredients" />
                        : <img src="./images/icons/SLEEP/Ingredients/Vytae_Sleep_Ingredients_ITA_text ok-01.svg" alt="Ingredients" />
                    :
                    props.windowWidth > 768
                    ?
                    <img src="./images/icons/OIL/Ingredients/Desktop/Vytae_Oil_Ingredients_Desktop_ITA_text ok-01.svg" alt="Ingredients" />
                    : <img src="./images/icons/OIL/Ingredients/Mobile/Vytae_Oil_Ingredients_Mobile_ITA_text ok-01.svg" alt="Ingredients" />
                }
            </div>
        </div>
    );
};

export default InsightsIcons;