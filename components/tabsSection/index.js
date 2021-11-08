import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const TabsSection = () => {
    return (
        <div className="tabs_section">
            <h2 className="section_h2 color_theme_text">What are these?</h2>
            <div className="tabs_border"></div>
            <Tabs>
                <TabList>
                    <Tab>Approfondimenti</Tab>
                    <Tab>Modalità d’uso</Tab>
                    <Tab>Ingredienti</Tab>
                    <Tab>Avvertenze</Tab>
                </TabList>
                <TabPanel>
                    <h4>Approfondimenti</h4>
                    <p>Emissions from fossil fuels are the main cause of global warming, adding up to roughly 90% of all global CO2 emissions. We need fuel, that’s a fact, so we need to find sustainable alternatives.</p>
                    <p>Hemp can be used to produce different types of biofuels (liquid, solid and gas) that can substitute fossil fuels in all its uses: from powering cars and computers, to heating homes and cooking food.</p>
                    <p>It may seem science fiction, but it’s not. Already in 1941, Henry Ford developed a “Hemp Car” prototype, entirely fuelled by hemp ethanol.</p>
                    <p>“Why use up the forests, which centuries in the making, and the mines which required ages to lay down, if we can get the equivalent of forest and mineral products in annual growth of the hemp fields?” (Henry Ford).</p>
                </TabPanel>
                <TabPanel>This is second tab panel</TabPanel>
                <TabPanel>This is third tab panel</TabPanel>
                <TabPanel>This is fourth tab panel</TabPanel>
            </Tabs>
        </div>
    );
};

export default TabsSection;