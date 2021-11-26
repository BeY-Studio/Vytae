import React from 'react';
import { Accordion } from 'react-bootstrap';

const AccordionSection = (props) => {
    return (
        props.productDetail?.title === "Calm Caps" || props.productDetail?.title === "Sleep Caps"
        || props.productDetail?.title === "Capsule Calm" || props.productDetail?.title === "Capsule Sleep"
        ?
        <div className="tabs_section">
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        {
                            props.lang === "it"
                            ? "Informazioni Nutrizionali" : "Nutritional information" 
                        }
                    </Accordion.Header>
                    <Accordion.Body>
                        {
                            props.lang === "it"
                            ?
                            <>
                                <h4>{props.productDetail?.title === "Capsule Calm" ? "Informazioni nutrizionali | Apporto per due softgel (DIE)" : "Informazioni nutrizionali | Apporto per due softgel (DIE)"}</h4>
                                <p>{props.productDetail?.title === "Capsule Calm" ? "Olio di semi di Canapa | 700 mg" : "Olio di semi di Canapa | 700 mg"}</p>
                                <p>{props.productDetail?.title === "Capsule Calm" ? "Iperico e.s. | 230 mg" : "Griffonia e.s. | 140 mg"}</p>
                                <p>{props.productDetail?.title === "Capsule Calm" ? "Di cui Ipericina | 0,69mg" : "Di cui 5-HTP (5-idrossitriptofano) | 35mg"}</p>
                                <p>{props.productDetail?.title === "Capsule Calm" ? "Rodiola e.s. | 100 mg" : "Valeriana e.s. tit. 0,8% acidi valerenici | 140 mg"}</p>
                                {props.productDetail?.title === "Capsule Calm" ? <p>Rosavi - HLPC | 3mg</p> : null}
                                <p>{props.productDetail?.title === "Capsule Calm" ? "Rosmarino e.s. | 100mg" : "Melissa e.s. tit. 4% acidi rosmarinico| 140 mg"}</p>
                                <p>{props.productDetail?.title === "Capsule Calm" ? "tit. 20% in fenoli diterpenici - 10% in acido carnosico" : "Passiflora e.s. tit. 2,5% in vitexina | 110 mg"}</p>
                            </>
                            : 
                            <>
                                <h4>{props.productDetail?.title === "Calm Caps" ? "Nutritional Information | Ammount per 2 caps (DIE)" : "Nutritional Information | Ammount per 2 caps (DIE)"}</h4>
                                <p>{props.productDetail?.title === "Calm Caps" ? "Hemp seed oil | 700 mg" : "Hemp seed oil | 700 mg"}</p>
                                <p>{props.productDetail?.title === "Calm Caps" ? "St. John's wort d.e. (Hypericum perforatum L) | 230 mg" : "St. John's wort d.e. (Hypericum perforatum L) | 230 mg"}</p>
                                <p>{props.productDetail?.title === "Calm Caps" ? "Of which Hypericin | 0,69mg" : " Of which Hypericin | 0,69mg"}</p>
                                <p>{props.productDetail?.title === "Calm Caps" ? "Rhodiola d.e. (Rhodiola Rosea L.) | 100 mg" : "Rhodiola d.e. (Rhodiola Rosea L.) | 100 mg"}</p>
                                <p>{props.productDetail?.title === "Calm Caps" ? "Rosavin - HPLC | 3mg" : "Rosavin - HPLC | 3mg"}</p>
                                <p>{props.productDetail?.title === "Calm Caps" ? "Rosemary d.e. tit. 20% in diterpene phenols - 10% in carnosic acid | 100mg" : "Rosemary d.e. tit. 20% in diterpene phenols - 10% in carnosic acid | 100mg"}</p>
                                <p>{props.productDetail?.title === "Calm Caps" ? "(Rosmarinus officinalis L.)" : "(Rosmarinus officinalis L.)"}</p>
                            </>
                        }
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        {
                            props.lang === "it"
                            ? "Modalità d’uso"
                            : "Dosage"
                        }
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            {
                                props.lang === "it"
                                ?
                                    props.productDetail?.title === "Capsule Calm" ? "1 capsula, 2 volte al giorno prima dei pasti" : "1 capsula, 2 volte al giorno prima dei pasti"
                                : props.productDetail?.title === "Calm Caps" ? "1 capsule, 2 times daily before meals." : "1 capsule, 2 times daily before meals."
                            }
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        {
                            props.lang === "it"
                            ? "Avvertenze" : "Warnings"
                        }
                    </Accordion.Header>
                    <Accordion.Body>
                        {
                            props.lang === "it"
                            ?
                            <>
                                <p>{props.productDetail?.title === "Capsule Calm" ? "Tenere fuori dalla portata dei bambini al di sotto dei tre anni. Non superare la dose giornaliera consigliata. " : "Tenere fuori dalla portata dei bambini al di sotto dei tre anni. Non superare la dose giornaliera consigliata."}</p>
                                <p>{props.productDetail?.title === "Capsule Calm" ? "Gli integratori non vanno intesi come sostituto di una dieta variata ed equilibrata e di uno stile di vita sano. Se si assumono dei farmaci, prima di utilizzare il prodotto chiedere il parere del medico perché l’estratto di iperico può interferire sul loro metabolismo inibendone anche l’attività. L’estratto di iperico è controindicato in età pediatrica e nell’adolescenza." : "Gli integratori non vanno intesi come sostituto di una dieta variata ed equilibrata e di uno stile di vita sano. Se si assumono dei farmaci, prima di utilizzare il prodotto chiedere il parere del medico perché l’estratto di iperico può interferire sul loro metabolismo inibendone anche l’attività. L’estratto di iperico è controindicato in età pediatrica e nell’adolescenza."}</p>
                            </>
                            : 
                            <>
                                <p>Keep out of reach of children.</p>
                                <p>Do not exceed the recommended daily dose.</p>
                                <p>Supplements should not be used as a substitute for a varied and balanced diet and a healthy lifestyle</p>
                                <p>{"If drugs are taken, before using the product, ask for the advice of the doctor because St. John's Wort extract can interfere with their metabolism and inhibit their activity. St. John’s Wort extract is contraindicated in pediatric age and in adolescence."}</p>
                            </>
                        }
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
        : null
    );
};

export default AccordionSection;
