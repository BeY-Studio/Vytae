import React from "react";

const InsightsIcons = (props) => {
    return (
        <div className="insights_icons_con">
            {
                props.windowWidth > 768
                ?
                <>
                    <img src="./images/icons/naturally-delivered.svg" alt="naturally delivered image" />
                    <img src="./images/icons/sesame-free.svg" alt="sesame free image" />
                    <img src="./images/icons/no-preservatives.svg" alt="no preservatives image" />
                    <img src="./images/icons/gluten-free.svg" alt="gluten free image" />
                    <img src="./images/icons/vegan.svg" alt="fegan image" />
                </>
                : <img src="./images/icons/insights_icons_mob_group.png" alt="insights mobile icons" />
            }
        </div>
    );
};

export default InsightsIcons;