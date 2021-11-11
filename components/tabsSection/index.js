import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const TabsSection = (props) => {
    return (
        props.productDetail?.title === "Calm Caps" || props.productDetail?.title === "Sleep Caps"
            ?
            <div className="tabs_section">
            {/* <h2 className="section_h2 color_theme_text">What are these?</h2> */}
            <div className="tabs_border"></div>
            <Tabs>
                <TabList>
                    <Tab>{props.productDetail?.title === "Calm Caps" ? "Informazioni Nutrizionali" : "Informazioni Nutrizionali"}</Tab>
                    <Tab>Modalità d’uso</Tab>
                    <Tab>Avvertenze</Tab>
                </TabList>
                <TabPanel>
                    <h4>{props.productDetail?.title === "Calm Caps" ? "Informazioni nutrizionali | Apporto per due softgel (DIE)" : "Informazioni nutrizionali | Apporto per due softgel (DIE)"}</h4>
                    <p>{props.productDetail?.title === "Calm Caps" ? "Olio di semi di Canapa | 700 mg" : "Olio di semi di Canapa | 700 mg"}</p>
                    <p>{props.productDetail?.title === "Calm Caps" ? "Iperico e.s. | 230 mg" : "Giffonia e.s. | 140 mg"}</p>
                    <p>{props.productDetail?.title === "Calm Caps" ? "Di cui Ipericina | 0,69mg" : "Di cui 5-HTP (5-idrossitriptofano) | 35mg"}</p>
                    <p>{props.productDetail?.title === "Calm Caps" ? "Rodiola e.s. | 100 mg" : "Valeriana e.s. tit. 0,8% acidi valerenici | 140 mg"}</p>
                    {props.productDetail?.title === "Calm Caps" ? <p>"Rosavi - HLPC | 3mg"</p> : null}
                    <p>{props.productDetail?.title === "Calm Caps" ? "Rosmarino e.s. | 100mg" : "Melissa e.s. tit. 4% acidi rosmarinico| 140 mg"}</p>
                    <p>{props.productDetail?.title === "Calm Caps" ? "tit. 20% in fenoli diterpenici - 10% in acido carnosico" : "Passiflora e.s. tit. 2,5% in vitexina | 110 mg"}</p>
                </TabPanel>
                <TabPanel>
                    <p>{props.productDetail?.title === "Calm Caps" ? "1 capsula, 2 volte al giorno prima dei pasti" : "1 capsula, 2 volte al giorno prima dei pasti"}</p>
                </TabPanel>
                <TabPanel>
                    <p>{props.productDetail?.title === "Calm Caps" ? "Tenere fuori dalla portata dei bambini al di sotto dei tre anni. Non superare la dose giornaliera consigliata. " : "Tenere fuori dalla portata dei bambini al di sotto dei tre anni. Non superare la dose giornaliera consigliata."}</p>
                    <p>{props.productDetail?.title === "Calm Caps" ? "Gli integratori non vanno intesi come sostituto di una dieta variata ed equilibrata e di uno stile di vita sano. Se si assumono dei farmaci, prima di utilizzare il prodotto chiedere il parere del medico perché l’estratto di iperico può interferire sul loro metabolismo inibendone anche l’attività. L’estratto di iperico è controindicato in età pediatrica e nell’adolescenza." : "Gli integratori non vanno intesi come sostituto di una dieta variata ed equilibrata e di uno stile di vita sano. Se si assumono dei farmaci, prima di utilizzare il prodotto chiedere il parere del medico perché l’estratto di iperico può interferire sul loro metabolismo inibendone anche l’attività. L’estratto di iperico è controindicato in età pediatrica e nell’adolescenza."}</p>
                </TabPanel>
            </Tabs>
        </div>
        : <></>
    );
};

export default TabsSection;