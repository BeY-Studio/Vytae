import React from 'react';
import { Accordion } from 'react-bootstrap';
import { CapsuleCalmDesc, CalmCapsDesc } from './description/calm';
import { CapsuleSleepDesc, SleepCapsDesc } from './description/sleep';
import { OlioCBDTenDesc, CBDOilTenDesc } from './description/cbd-10';
import { OlioCBDFourDesc, CBDOilFourDesc } from './description/cbd-4';
import { CBDOilFourWarnings, OlioCBDFourWarnings } from './warnings/cbd-4';
import { CBDOilTenWarnings, OlioCBDTenWarnings } from './warnings/cbd-10';
import { CalmCapsWarnings, CapsuleCalmWarnings } from './warnings/calm';
import { CapsuleSleepWarnings, SleepCapsWarnings } from './warnings/sleep';

const AccordionSection = (props) => {
    return (
        <div className="tabs_section">
            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        { props.lang === "it" ? "Descrizione" : "Description" }
                    </Accordion.Header>
                    <Accordion.Body>
                        { props.productDetail?.title === "Capsule Calm" ? <CapsuleCalmDesc /> : null }
                        { props.productDetail?.title === "Calm Caps" ? <CalmCapsDesc /> : null }
                        
                        { props.productDetail?.title === "Capsule Sleep" ? <CapsuleSleepDesc /> : null }                   
                        { props.productDetail?.title === "Sleep Caps" ? <SleepCapsDesc /> : null }    

                        { props.productDetail?.title === "Olio CBD 10%" ? <OlioCBDTenDesc /> : null }
                        { props.productDetail?.title === "CBD Oil 10%" ? <CBDOilTenDesc /> : null }

                        { props.productDetail?.title === "Olio CBD 4%" ? <OlioCBDFourDesc /> : null }
                        { props.productDetail?.title === "CBD Oil 4%" ? <CBDOilFourDesc /> : null }
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        {
                            props.productDetail?.title === "Capsule Calm" || props.productDetail?.title === "Calm Caps" ||
                            props.productDetail?.title === "Capsule Sleep" || props.productDetail?.title === "Sleep Caps"
                            ?
                                props.lang === "it"
                                ? "Informazioni Nutrizionali" : "Nutritional information"
                            :
                                props.lang === "it"
                                ? "Ingredienti" : "Ingredients"
                        }
                    </Accordion.Header>
                    <Accordion.Body>
                        {
                            props.productDetail?.title === "Capsule Calm" || props.productDetail?.title === "Calm Caps" ||
                            props.productDetail?.title === "Capsule Sleep" || props.productDetail?.title === "Sleep Caps"
                            ?
                                props.lang === "it"
                                ?
                                <>
                                    <table className="tabs_table">
                                        <thead>
                                            <tr>
                                                <th>Informazioni nutrizionali</th>
                                                <th>Apporto per due softgel (DIE)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Olio di semi di Canapa</td>
                                                <td>700mg</td>
                                            </tr>
                                            <tr>
                                                {
                                                    props.productDetail?.title === "Capsule Calm"
                                                    ? <td>Iperico e.s. <br />Di cui Ipericina</td>
                                                    : <td>Griffonia e.s. <br />Di cui 5-HTP (5-idrossitriptofano)</td>
                                                }
                                                {
                                                    props.productDetail?.title === "Capsule Calm"
                                                    ? <td>230 mg <br />0,69 mg</td>
                                                    : <td>140 mg <br />35 mg</td>
                                                }
                                            </tr>
                                            {
                                                props.productDetail?.title === "Capsule Calm"
                                                ?
                                                <tr>
                                                    <td>Rodiola e.s. <br />tit. 3% in rosavin</td>
                                                    <td>100 mg <br />3 mg</td>
                                                </tr>
                                                : null
                                            }
                                            {
                                                props.productDetail?.title === "Capsule Calm"
                                                ?
                                                <tr>
                                                    <td>Rosmarino e.s. <br />tit. 20% in fenoli diterpenici - 10% in acido carnosico</td>
                                                    <td>100 mg</td>
                                                </tr>
                                                : null
                                            }
                                            {
                                                props.productDetail?.title === "Capsule Sleep"
                                                ?
                                                <tr>
                                                    <td>Valeriana e.s. tit. 0,8% acidi valerenici</td>
                                                    <td>140 mg</td>
                                                </tr>
                                                : null
                                            }
                                            {
                                                props.productDetail?.title === "Capsule Sleep"
                                                ?
                                                <tr>
                                                    <td>Melissa e.s. tit. 4% acido rosmarinico</td>
                                                    <td>140 mg</td>
                                                </tr>
                                                : null
                                            }
                                            {
                                                props.productDetail?.title === "Capsule Sleep"
                                                ?
                                                <tr>
                                                    <td>Passiflora e.s. tit.2,5% in vitexina</td>
                                                    <td>110 mg</td>
                                                </tr>
                                                : null
                                            }
                                        </tbody>
                                    </table>
                                    <br />
                                    {
                                        props.productDetail?.title === "Capsule Calm"
                                        ?
                                        <p className="ingredients"><strong>Ingredienti:</strong> Olio di semi Canapa (Cannabis sativa L., semi); Involucro: Gelatina bovina; Agente di resistenza: Glicerolo (E422); Colorante: E172 (ossido di ferro giallo); Iperico e.s. tit. 0,3% in ipericina (Hypericum perforatum L., erba con fiori); Rodiola e.s. tit. 3% in rosavin (Rhodiola rosea L., radice); Rosmarino e.s. tit. 20% in fenoli diterpenici - 10% in acido carnosico (Rosmarinus officinalis L., foglia); Olio di girasole; Emulsionante: Lecitina di girasole (E322); Addensante: Mono e digliceridi degli acidi grassi (E471).</p>
                                        :
                                        <p className="ingredients"><strong>Ingredienti:</strong> Olio di semi Canapa (Cannabis sativa L., semi); Involucro: Gelatina bovina; Agente di resistenza: Glicerolo (E422); Coloranti: E172 (ossido di ferro giallo); E141ii (complessi rameici delle clorofilline); Griffonia e.s. tit. 25% 5-idrossitriptofano (Griffonia simplicifolia (DC.) Baill., semi); Valeriana e.s. tit. 0,8% acidi valerenici (Valeriana officinalis L., radici); Melissa e.s. tit. 4% acido rosmarinico (Melissa officinalis L., foglia); Passiflora e.s. tit.2,5% in vitexina (Passiflora incarnata L., erba con fiori); Olio di girasole; Emulsionante: Lecitina di girasole (E322); Addensante: Mono e digliceridi degli acidi grassi (E471).
                                        </p>
                                    }
                                </>
                                : 
                                <>
                                    <table className="tabs_table">
                                        <thead>
                                            <tr>
                                                <th>Nutritional information</th>
                                                <th>For two softgels (DIE)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Hemp seed oil</td>
                                                <td>700mg</td>
                                            </tr>
                                            <tr>
                                                {
                                                    props.productDetail?.title === "Calm Caps"
                                                    ? <td>Hypericum d.e. <br />Of which hypericin</td>
                                                    : <td>Griffonia e.s. <br />Of which 5-HTP (5-idrossitriptofano)</td>
                                                }
                                                {
                                                    props.productDetail?.title === "Calm Caps"
                                                    ? <td>230 mg <br />0,69 mg</td>
                                                    : <td>140 mg <br />35 mg</td>
                                                }
                                            </tr>
                                            {
                                                props.productDetail?.title === "Calm Caps"
                                                ?
                                                <tr>
                                                    <td>Rhodiola d.e. <br />Rosavin - HPLC</td>
                                                    <td>100 mg <br />3 mg</td>
                                                </tr>
                                                : null
                                            }
                                            {
                                                props.productDetail?.title === "Calm Caps"
                                                ?
                                                <tr>
                                                    <td>Rosemary d.e <br />tit. 20% in diterpene phenols - 10% in carnosic acid</td>
                                                    <td>100 mg</td>
                                                </tr>
                                                : null
                                            }
                                            {
                                                props.productDetail?.title === "Sleep Caps"
                                                ?
                                                <tr>
                                                    <td>Valerian d.e. tit. 0.8% valerenic acids</td>
                                                    <td>140 mg</td>
                                                </tr>
                                                : null
                                            }
                                            {
                                                props.productDetail?.title === "Sleep Caps"
                                                ?
                                                <tr>
                                                    <td>Lemon Balm d.e. tit. 4% rosmarinic acid</td>
                                                    <td>140 mg</td>
                                                </tr>
                                                : null
                                            }
                                            {
                                                props.productDetail?.title === "Sleep Caps"
                                                ?
                                                <tr>
                                                    <td>Passionflower d.e. tit. 2.5% in vitexin</td>
                                                    <td>110 mg</td>
                                                </tr>
                                                : null
                                            }
                                        </tbody>
                                    </table>
                                    <br />
                                    {
                                        props.productDetail?.title === "Calm Caps"
                                        ?
                                        <p className="ingredients"><strong>Ingredients:</strong> Hemp seed oil (Cannabis sativa L., seed); Casing: Bovine gelatin; Resistance agent: Glycerol (E422); Colouring agent: E172 (yellow iron oxide); Hypericum d.e. tit. 0.3% hypericin (Hypericum perforatum L., herb with flowers); Rhodiola d.e. tit. 3% rosavin (Rhodiola rosea L., root); Rosemary dry extract tit. 20% diterpene phenols - 10% carnosic acid (Rosmarinus officinalis L., leaf); Sunflower oil; Emulsifier: Sunflower lecithin (E322); Thickener: Mono-and diglycerides of fatty acids (E471).</p>
                                        :
                                        <p className="ingredients"><strong>Ingredients:</strong> Hemp seed oil (Cannabis sativa L., seeds); Casing: bovine gelatin; Resistance agent: Glycerol (E422); Colours: E172 (yellow iron oxide); E141ii (chlorophyll copper complex); Griffonia d.e. tit. 25% 5-hydroxytryptophan (Griffonia simplicifolia (DC.) Baill, seeds); Valerian d.e. tit. 0.8% valerenic acids (Valeriana officinalis L., roots); Lemon balm d.e. tit. 4% rosmarinic acid (Melissa officinalis L., leaf); Passion flower d.e. tit. 2.5% vitexin (Passiflora incarnata L., herb with flowers); Sunflower oil; Emulsifier: Sunflower lecithin (E322); Thickener: Mono and diglycerides of fatty acids (E471).</p>
                                    }
                                </>
                            :
                            props.lang === "it"
                            ? <p>Olio di semi di Canapa, Cannabidiolo (CBD) </p>
                            : <p>Hemp seed oil, Cannabidiol (CBD)</p>
                        }
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        {
                            props.productDetail?.title === "Capsule Calm" || props.productDetail?.title === "Calm Caps" ||
                            props.productDetail?.title === "Capsule Sleep" || props.productDetail?.title === "Sleep Caps"
                            ?
                                props.lang === "it"
                                ? "Modalità d’uso" : "Dosage"
                            :
                                props.lang === "it"
                                ? "Modo d’uso" : "How to use"
                        }
                    </Accordion.Header>
                    <Accordion.Body>
                        {
                            props.productDetail?.title === "Capsule Calm" || props.productDetail?.title === "Calm Caps" ||
                            props.productDetail?.title === "Capsule Sleep" || props.productDetail?.title === "Sleep Caps"
                            ?
                                <>
                                    {
                                        props.lang === "it"
                                        ?
                                            props.productDetail?.title === "Capsule Calm"
                                            ? <p>1 capsula, 2 volte al giorno prima dei pasti.</p>
                                            : <p>2 capsule, mezz&apos;ora prima di dormire</p>
                                        :
                                            props.productDetail?.title === "Calm Caps"
                                            ? <p>1 capsule, 2 times daily before meals</p>
                                            : <p>2 capsules half an hour before sleeping.</p>
                                    }
                                    {
                                        props.lang === "it"
                                        ?
                                            props.productDetail?.title === "Capsule Calm"
                                            ? <p>Dose giornaliera consigliata: 2 capsule; 700mg  Olio di semi di Canapa, 230mg Iperico, 100mg Rodiola, 100mg Rosmarino.</p>
                                            : <p>Dose giornaliera consigliata: 2 capsule, 700mg Olio di semi di Canapa, 140mg Griffonia, 140mg Valeriana, 140mg Melissa, 55mg Passiflora.</p>
                                        :
                                            props.productDetail?.title === "Calm Caps"
                                            ? <p>Daily dose: 2 capsules; 700 mg Hemp seed Oil, 230mg Hypericum, 100mg Rhodiola, 100mg Rosemary.</p>
                                            : <p>Daily dose: 2 capsules; 700 mg Hemp seed Oil. 140mg Griffonia, 140mg Valerian, 140mg Lemon balm, 55mg Passion flower.</p>
                                    }
                                </>
                            :
                            null
                        }
                        {
                            props.productDetail?.title === "Olio CBD 4%" || props.productDetail?.title === "CBD Oil 4%" ||
                            props.productDetail?.title === "Olio CBD 10%" || props.productDetail?.title === "CBD Oil 10%"
                            ?
                                props.lang === "it"
                                ?
                                    <>
                                        <p>Per uso topico. 3-5 gocce 2 volte al giorno. Evitare il contatto con gli occhi. Agitare prima dell&apos;uso.</p>
                                        <p>Conservare in luogo fresco e asciutto, lontano da fonti dirette di luce. Uso esterno.</p>
                                    </>
                                :
                                    <>
                                        <p>For topical use. 3-5 drops 2 times a day. Avoid contact with eyes. Shake before use. Store in a cool, dry place, away from direct sources of light. External use only.</p>
                                    </>
                            : null
                        }
                    </Accordion.Body>
                </Accordion.Item>
                {
                    props.productDetail?.title === "Capsule Calm" || props.productDetail?.title === "Calm Caps" ||
                    props.productDetail?.title === "Capsule Sleep" || props.productDetail?.title === "Sleep Caps" ||
                    props.productDetail?.title === "Olio CBD 4%" || props.productDetail?.title === "CBD Oil 4%" ||
                    props.productDetail?.title === "Olio CBD 10%" || props.productDetail?.title === "CBD Oil 10%"
                    ?
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>
                            {
                                props.lang === "it"
                                ? "Avvertenze" : "Warnings"
                            }
                        </Accordion.Header>
                        <Accordion.Body>
                            {
                                props.productDetail?.title === "Calm Caps" || props.productDetail?.title === "Capsule Calm"
                                ?
                                <>{props.lang === 'it' ? <CapsuleCalmWarnings /> : <CalmCapsWarnings />}</>
                                : null
                            }
                            {
                                props.productDetail?.title === "Sleep Caps" || props.productDetail?.title === "Capsule Sleep"
                                ?
                                <>{props.lang === 'it' ? <CapsuleSleepWarnings /> : <SleepCapsWarnings />}</>
                                : null
                            }
                            {
                                props.productDetail?.title === "Olio CBD 4%" || props.productDetail?.title === "CBD Oil 4%"
                                ?
                                <>{props.lang === 'it' ? <OlioCBDFourWarnings /> : <CBDOilFourWarnings />}</>
                                : null
                            }
                            {
                                props.productDetail?.title === "Olio CBD 10%" || props.productDetail?.title === "CBD Oil 10%"
                                ?
                                <>{props.lang === 'it' ? <OlioCBDTenWarnings /> : <CBDOilTenWarnings />}</>
                                : null
                            }
                        </Accordion.Body>
                    </Accordion.Item>
                    : null
                }
            </Accordion>
        </div>
    );
};

export default AccordionSection;
