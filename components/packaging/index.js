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
                    <h2 className="section_h2 color_white">Packaging</h2>
                    <p className="text_center color_white font_300 packaging_text">Ricerche recenti hanno dimostrato il ruolo cruciale del CBD per la regolazione di stress e ansia, la qualità del sonno, il sollievo dal dolore, e la cura delle infiammazioni.</p>
                    <div className="button_pair">
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