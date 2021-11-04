import React from "react";
import NormalButton from "../buttons/normal";

const HandsSecDesktop = () => {
    return (
        <div className="dark_bg_con" style={{ "backgroundImage": "url(./images/backgrounds/hands-background-lvl1.png)" }}>
            <div className="hands_con">
                <img id="left_hand" className="left" src="./images/backgrounds/hands-left-1-cropped.png" alt="hand-left" />
                <img id="right_hand" className="right" src="./images/backgrounds/hands-right-1-cropped.png" alt="hand-left" />
            </div>
            <div className="content text_center">
                <h2 className="section_h2 color_white">Canapa</h2>
                <h3 className="section_h3 color_white">per la Salute Umana</h3>
                <p className="text_center color_white hands_p font_300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="button_pair">
                    <NormalButton
                        data={'CBD e ansia'}
                        classes={'normal_button color_white'}
                    />
                    <NormalButton
                        data={'CBD e sonno'}
                        classes={'normal_button color_white'}
                    />
                </div>
            </div>
        </div>
    );
};

export default HandsSecDesktop;