import React from "react";
import NormalButton from "../buttons/normal";

const PackagingSecDesktop = () => {
    return (
        <div className="dark_bg_con" style={{ "backgroundImage": "url(./images/backgrounds/vitae-prodotti-fondale-desktop2.png)" }}>
            <div className="content ps_div_top">
                <h2 className="section_h2 color_white">Canapa</h2>
                <h3 className="section_h3 color_white">per la Salute del Pianeta</h3>
                <p className="text_left color_white font_400">Vytae TM si impegna ogni giorno a rispettare l’ambiente pianificando l’intero ciclo di vita del proprio prodotto per ridurne al minimo l’impatto ambientale.</p>
                <ul className="packaging_ul color_white font_600">
                    <li>Produzione delle capsule</li>
                    <li>Packaging in canapa</li>
                    <li>Utilizzo di carta in mescola riciclabile di canapa</li>
                    <li>Sensibilizzazione sull’invio del prodotto</li>
                </ul>
                {/* <div className="button_pair">
                    <NormalButton
                        data={'CBD e sonno'}
                        classes={'normal_button color_white'}
                    />
                </div> */}
            </div>            
            <div className="ps_div_top_last">
                <div className="left">
                    <span className="color_white font_200">Le nostre certificazioni: </span>
                    <img src="./images/icons/forest-icon.svg" alt="forest council image" />
                </div>
                <NormalButton
                    data={'Sostenibilità'}
                    classes={'normal_button color_white'}
                />
            </div>
            <div className="content ps_div_bottom">
                <div className="inner">
                    <h2 className="section_h2 color_white">Packaging</h2>
                    <p className="text_right color_white font_400">I nostri packaging, sono stati progettati e prodotti con l’unico obiettivo di rispettare l’ambiente e il pianeta.</p>
                    <p className="text_right color_white font_400">Vytae utilizza solo materiali riciclati, riciclabili e carte e plastiche derivate dalla canapa.</p>
                </div>
            </div>
            <div className="ps_div_top_last">
                <div className="left"></div>
                <NormalButton
                    data={'Scopri di più'}
                    classes={'normal_button color_white'}
                />
            </div>
        </div>
    );
};

export default PackagingSecDesktop;