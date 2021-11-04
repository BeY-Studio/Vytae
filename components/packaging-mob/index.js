import React from "react";
import NormalButton from "../buttons/normal";

const PackagingMobile = () => {
    return (
        <div
            className="dark_bg_con packaging_con"
            style={{ "background-image": "url(./images/backgrounds/packaging-bg-mob.png)" }}
        >
            <div className="content text_center">
                <h2 className="section_h2 color_white">Packaging</h2>
                <p className="text_center color_white font_300">I nostri packaging, sono stati progettati e prodotti con l’unico obiettivo di rispettare l’ambiente e il pianeta.</p>
                <p className="text_center color_white font_300">Vytae utilizza solo materiali riciclati, riciclabili e carte e plastiche derivate dalla canapa.</p>
                <div className="button_pair">
                    <NormalButton
                        data={'Scopri di più'}
                        classes={'normal_button color_white'}
                    />
                </div>
            </div>
        </div>
    );
};

export default PackagingMobile;