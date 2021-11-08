import React from "react";
import NormalButton from "../buttons/normal";

const HandsSec = ({ windowWidth }) => {
    return (
        <div
            className="dark_bg_con hands_section_bg"
            style={{ "backgroundImage": "url(./images/backgrounds/hands-sec-mob-bg.png)" }}
        >
            <div className="hand_images_con">
            {
                windowWidth > 768 
                ? 
                <div className="hands_con">
                    <img id="left_hand" className="left" src="./images/backgrounds/hands-left-1-cropped.png" alt="hand-left" />
                    <img id="right_hand" className="right" src="./images/backgrounds/hands-right-1-cropped.png" alt="hand-left" />
                </div>
                :
                <img className="hands_img_mob" src="./images/backgrounds/hands-mob-1.png" alt="hands image" />
            }
            </div>
            <div className="content text_center hands_sec_content hands_sec_top">
                <h2 className="section_h2 color_white">Canapa</h2>
                <h3 className="section_h3 color_white">per la Salute Umana</h3>
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
            <div className="content text_center hands_sec_content_two">
                <h2 className="section_h2 color_white">Canapa</h2>
                <h3 className="section_h3 color_white">per la Salute del Pianeta</h3>
                <img id="globe" src="./images/backgrounds/globe-mob.png" alt="globe image" />
                <p className="text_center color_white font_300 font_italic hands_sec_italic_text">“La canapa è una pianta circolare, della quale tutte le parti possono avere un impatto sociale, ecologico o industriale.”</p>
                <p className="note_p text_center color_white font_300">Tobias Luthe, Professor ETH Zurich</p>
                <div className="single_button_row hands_sec_b_p">
                    <NormalButton
                        data={'Sostenibilità'}
                        classes={'normal_button color_white'}
                    />
                </div>
                <div className="hand_sec_icons">
                    <img src="./images/icons/plastic-free-world.png" alt="plastic free world image" />
                    <img src="./images/icons/reduces-water-consumption.png" alt="reduces water consumption image" />
                    <img src="./images/icons/save-the-bees.png" alt="save the bees image" />
                    <img src="./images/icons/fights-deforestation.png" alt="fights deforestation image" />
                    <img src="./images/icons/purifies-soil.png" alt="purifies soil image" />
                    <img src="./images/icons/absorb-more-co2.png" alt="absorb more co2 image" />
                    <img src="./images/icons/it-is-alternative-to-fossil-fuel.png" alt="fossil fuel alternative image" />
                </div>
            </div>
        </div>
    );
};

export default HandsSec;