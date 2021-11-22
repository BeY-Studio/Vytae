import React from "react";
import NormalButton from "../buttons/normal";

const Packaging = (props) => {
    return (
        <div
            className="dark_bg_con packaging_con"
            style={{ "backgroundImage": "url(./images/backgrounds/packaging-bg-desktop.png)" }}
        >
            <div className="content text_center packaging_content">
                <div className="images_con">
                    <img className="left" src="./images/backgrounds/packaging-whole.png" alt="whole packaging image" />
                    { props.windowWidth > 999 ? <img className="right" src="./images/backgrounds/packaging-product.png" alt="packaging product image" /> : null }
                </div>
                <div className="inner">
                    <h2 className="section_h2 color_white">{ props.lang === "it" ? "Sostenibilità" : "Sustainability"}</h2>
                    <p className="text_center color_white font_300 packaging_text">
                        {
                            props.lang === "it"
                            ? "Ricerchiamo, testiamo e realizziamo continuamente prodotti con biomateriali derivati dalla canapa. I tappi dei nostri vasi e i portacapsule sono in bio-plastica di canapa. Le nostre scatole, le brochure e il materiale informativo in carta derivata dalla canapa."
                            : "We continuously research, test, and design products made from hemp biomaterials. The caps of our jars and capsule holders are made from hemp bioplastic, while our boxes, brochures and information material are made out of hemp-derived paper."
                        }
                    </p>
                    <p className="text_center color_white font_300 packaging_text">
                        {
                            props.lang === "it"
                            ?
                            "Promuoviamo il paradigma delle 3R per costruire un’economia circolare materiale attraverso l&apos;uso efficace di risorse e materiali."
                            :
                            "We embrace the 3R paradigma to build a circular economy through the effective and conscious use of resources and materials."
                        }
                    </p>
                    <p className="text_center color_white font_300 packaging_text">REDUSE, REUSE, RECYCLE</p>
                    <div className="single_button_row">
                        <NormalButton
                            data={'Scopri di più'}
                            classes={'normal_button color_white'}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Packaging;