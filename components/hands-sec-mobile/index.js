import React from "react";
import NormalButton from "../buttons/normal";

const HandsSecMobile = () => {
    return (
        <div
            className="dark_bg_con"
            style={{ "backgroundImage": "url(./images/backgrounds/hands-sec-mob-bg.png)" }}
        >
            <div className="content text_center">
                <h2 className="section_h2 color_white">Canapa</h2>
                <h3 className="section_h3 color_white">per la Salute Umana</h3>
                <img className="hands_img_mob" src="./images/backgrounds/hands-mob-1.png" alt="hands image" />
                <p className="text_center color_white font_300">Ricerche recenti hanno dimostrato il ruolo cruciale del CBD per la regolazione di stress e ansia, la qualità del sonno, il sollievo dal dolore, e la cura delle infiammazioni.</p>
                <div className="button_pair hands_sec_b_p">
                    <NormalButton
                        data={'CBD e ansia'}
                        classes={'normal_button color_white'}
                    />
                    <NormalButton
                        data={'CBD e sonno'}
                        classes={'normal_button color_white'}
                    />
                    <NormalButton
                        data={'Anti-infiammazione'}
                        classes={'normal_button color_white'}
                    />
                    <NormalButton
                        data={'Sollievo dal dolore'}
                        classes={'normal_button color_white'}
                    />
                </div>
            </div>
            <div className="content text_center">
                <h2 className="section_h2 color_white">Canapa</h2>
                <h3 className="section_h3 color_white">per la Salute del Pianeta</h3>
                <img style={{"maxWidth": "100%"}} src="./images/backgrounds/globe-mob.png" alt="globe image" />
                <p className="text_center color_white font_300 font_italic">“La canapa è una pianta circolare, della quale tutte le parti possono avere un impatto sociale, ecologico o industriale.”</p>
                <p className="note_p text_center color_white font_300">Tobias Luthe, Professor ETH Zurich</p>
                <div className="button_pair hands_sec_b_p">
                    <NormalButton
                        data={'Sostenibilità'}
                        classes={'normal_button color_white'}
                    />
                </div>
                <div className="hand_sec_icons">
                    <div>
                        <img src="./images/icons/plastic-free-world.png" alt="plastic free world image" />
                        <img src="./images/icons/reduces-water-consumption.png" alt="reduces water consumption image" />
                        <img src="./images/icons/save-the-bees.png" alt="save the bees image" />
                        <img src="./images/icons/fights-deforestation.png" alt="fights deforestation image" />
                    </div>
                    <div>
                        <img src="./images/icons/purifies-soil.png" alt="purifies soil image" />
                        <img src="./images/icons/absorb-more-co2.png" alt="absorb more co2 image" />
                        <img src="./images/icons/it-is-alternative-to-fossil-fuel.png" alt="fossil fuel alternative image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HandsSecMobile;