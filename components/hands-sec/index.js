import React from "react";
import NormalButton from "../buttons/normal";
import Link from "next/link";

const HandsSec = ({ windowWidth, productDetail, lang }) => {
    return (
        <div
            className="dark_bg_con hands_section_bg"
            style={{ "backgroundImage": "url(./images/backgrounds/hands-sec-mob-bg.webp)" }}
        >
            <div className="hand_images_con">
            {
                windowWidth > 768 
                ? 
                <div className="hands_con">
                    <img
                        id="left_hand"
                        className="left"
                        src="./images/backgrounds/hands-left-1-cropped.webp"
                        alt="hand-left"
                        loading="lazy"
                    />
                    <img
                        id="right_hand"
                        className="right"
                        src="./images/backgrounds/hands-right-1-cropped.webp"
                        alt="hand-left"
                        loading="lazy"
                    />
                </div>
                :
                <img
                    className="hands_img_mob"
                    src="./images/backgrounds/hands-mob-1.webp"
                    alt="hands image"
                    loading="lazy"
                />
            }
            </div>
            <div className="content text_center hands_sec_content hands_sec_top">
                <h2 className="section_h2 color_white">{ lang === "it" ? "Canapa" : "Hemp"}</h2>
                <h3 className="section_h3 color_white">{ lang === "it" ? "per la Salute Umana" : "for Human Health"}</h3>
                <p className="text_center color_white font_300">
                    {
                        lang === "it"
                        ? "Ricerche recenti hanno dimostrato il ruolo cruciale della canapa e del CBD per la regolazione di stress e ansia, la qualità del sonno, il sollievo dal dolore, e la cura delle infiammazioni."
                        : "Current research has proven the crucial role of hemp and CBD in the regulation of stress & anxiety, the relief of pain and the ease of inflammation."
                    }
                </p>
                <div className="button_pair hands_sec_b_p">
                    <Link href={"https://vytae.com/" + (lang === "it" ? "cbd-e-ansia/?lang=it" : "learn/cbd-and-anxiety/?lang=en")}>
                        <a>
                            <NormalButton
                                data={lang === "it" ? 'Ansia & stress' : "Anxiety & stress"}
                                classes={'normal_button color_white'}
                            />
                        </a>
                    </Link>
                    <Link href={"https://vytae.com/" + (lang === "it" ? "cdb-e-sonno/?lang=it" : "learn/cdb-e-sonno/?lang=en")}>
                        <a>
                            <NormalButton
                                data={lang === "it" ? 'Sonno' : "Sleep"}
                                classes={'normal_button color_white'}
                            />
                        </a>
                    </Link>
                    <Link href={"https://vytae.com/" + (lang === "it" ? "cdb-e-sollievo-dal-dolore/?lang=it" : "learn/cdb-and-pain-relief/?lang=en")}>
                        <a>
                            <NormalButton
                                data={lang === "it" ? 'Sollievo dal dolore' : "Pain relief"}
                                classes={'normal_button color_white'}
                            />
                        </a>
                    </Link>
                    <Link href={"https://vytae.com/" + (lang === "it" ? "cbd-e-infiammazione/?lang=it" : "learn/cbd-and-inflammation/?lang=en")}>
                        <a>
                            <NormalButton
                                data={lang === "it" ? 'Anti-infiammazione' : "Anti-inflammatory"}
                                classes={'normal_button color_white'}
                            />
                        </a>
                    </Link>                    
                    
                </div>
            </div>
            <div className="content text_center hands_sec_content_two">
                <h2 className="section_h2 color_white">{ lang === "it" ? "Canapa" : "Hemp"}</h2>
                <h3 className="section_h3 color_white">{ lang === "it" ? "per la Salute del Pianeta" : "for Planet Health"}</h3>
                <img id="globe" src="./images/backgrounds/globe-mob.webp" alt="globe image" loading="lazy" />
                <p className="text_center color_white font_300 font_italic hands_sec_italic_text">
                    { 
                        lang === "it"
                        ? '“La canapa è una pianta circolare, della quale tutte le parti possono avere un impatto sociale, ecologico o industriale.”'
                        : '“Hemp is a circular plant with all its parts potentially having societal, ecological or industrial value.”'
                    }
                </p>
                <p className="note_p text_center color_white font_300">Tobias Luthe, Professor ETH Zurich</p>
                <div className="single_button_row hands_sec_b_p">
                    <Link href={"https://www.vytae.com/" + ( lang === "it" ? "sostenibilita/?lang=it" : "sustainability/?lang=en")}>
                        <a>
                            <NormalButton
                                data={lang ==="it" ? 'Sostenibilità' : "Sustainability"}
                                classes={'normal_button color_white'}
                            />
                        </a>
                    </Link>                    
                </div>
                <div className="hand_sec_icons">
                    {/* <img src="./images/icons/plastic-free-world.png" alt="plastic free world image" />
                    <img src="./images/icons/reduces-water-consumption.png" alt="reduces water consumption image" />
                    <img src="./images/icons/save-the-bees.png" alt="save the bees image" />
                    <img src="./images/icons/fights-deforestation.png" alt="fights deforestation image" />
                    <img src="./images/icons/purifies-soil.png" alt="purifies soil image" />
                    <img src="./images/icons/absorb-more-co2.png" alt="absorb more co2 image" />
                    <img src="./images/icons/it-is-alternative-to-fossil-fuel.png" alt="fossil fuel alternative image" /> */}
                    {
                        windowWidth > 768
                        ?
                            productDetail?.title === "Calm Caps" || productDetail?.title === "Sleep Caps"
                            ?
                                productDetail?.title === "Calm Caps"
                                ? <img src={"./images/icons/CALM/Sustainability/Desktop/Vytae_Sustainability_Desktop_" + (lang === "it" ? "ITA" : "ENG") + "_text-ok-01.svg"} alt="stainability icons" loading="lazy" />
                                : <img src={"./images/icons/SLEEP/Sustainability/Desktop/Vytae_Sustainability_Desktop_" + (lang === "it" ? "ITA" : "ENG") + ".svg"} alt="stainability icons" loading="lazy" />
                            : <img src={"./images/icons/OIL/Sustainability/Desktop/Vytae_Sustainability_Desktop_" + (lang === "it" ? "ITA" : "ENG") + ".svg"} alt="stainability icons" loading="lazy" />
                        :
                            productDetail?.title === "Calm Caps" || productDetail?.title === "Sleep Caps"
                            ?
                                productDetail?.title === "Calm Caps"
                                ? <img src={"./images/icons/CALM/Sustainability/Mobile/Vytae_Sustainability_Mobile_" + (lang === "it" ? "ITA" : "ENG") + "_text_ok-01.svg"} alt="stainability icons" loading="lazy" />
                                : <img src={"./images/icons/SLEEP/Sustainability/Mobile/Vytae_Sustainability_Mobile_" + (lang === "it" ? "ITA" : "ENG") + ".svg"} alt="stainability icons" loading="lazy" />
                            : <img src={"./images/icons/OIL/Sustainability/Mobile/Vytae_Sustainability_Mobile_" + (lang === "it" ? "ITA" : "ENG") + ".svg"} alt="stainability icons" loading="lazy" />
                    }
                </div>
            </div>
        </div>
    );
};

export default HandsSec;