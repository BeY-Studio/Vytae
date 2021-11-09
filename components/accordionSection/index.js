import React from 'react';
import { Accordion } from 'react-bootstrap';

const AccordionSection = () => {
    return (
        <div className="tabs_section">
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Approfondimenti</Accordion.Header>
                    <Accordion.Body>
                        <h4>Approfondimenti</h4>
                        <p>Emissions from fossil fuels are the main cause of global warming, adding up to roughly 90% of all global CO2 emissions. We need fuel, that’s a fact, so we need to find sustainable alternatives.</p>
                        <p>Hemp can be used to produce different types of biofuels (liquid, solid and gas) that can substitute fossil fuels in all its uses: from powering cars and computers, to heating homes and cooking food.</p>
                        <p>It may seem science fiction, but it’s not. Already in 1941, Henry Ford developed a “Hemp Car” prototype, entirely fuelled by hemp ethanol.</p>
                        <p>“Why use up the forests, which centuries in the making, and the mines which required ages to lay down, if we can get the equivalent of forest and mineral products in annual growth of the hemp fields?” (Henry Ford).</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Modalità d’uso</Accordion.Header>
                    <Accordion.Body>
                        <p>Content here for the 2nd item.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Ingredienti</Accordion.Header>
                    <Accordion.Body>
                        <p>Content here for the 3rd item.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Avvertenze</Accordion.Header>
                    <Accordion.Body>
                        <p>Content here for the 4th item.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default AccordionSection;
