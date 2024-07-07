import React, { useEffect } from "react";
import { PageTitle } from "stories/PageTitle/PageTitle";
import { NavigationMenu } from "stories/NavigationMenu/NavigationMenu";
import { TabComponent } from "components/Navigation";
import { LineBoundary } from "stories/LineBoundary/LineBoundary";
import "./destinationspace.scss";
import { getDestinationByName } from "util/data";

const tabs = [
    { id: "Moon", label: "Moon" },
    { id: "Mars", label: "Mars" },
    { id: "Europa", label: "Europa" },
    { id: "Titan", label: "Titan" },
];

export const DestinationSpace = () => {
    const defaultTab = "Moon";
    const [activeTab, setActiveTab] = React.useState(defaultTab);
    const [data, setData] = React.useState();

    useEffect(() => {
        const fetchDestinationByName = async () => {
            const result = await getDestinationByName(activeTab);
            setData(result);
        };
        fetchDestinationByName();
    }, [activeTab]);

    const { name, images, description, distance, travel } = data || {};

    return (
        !!data && (
            <section className="main-content destination-page">
                <div className="destination-content">
                    <PageTitle menuIndex="01" label="Pick your destination" />

                    <section className="d-flex explanation-section gap-xl">
                        <div className="d-flex">
                            <img alt="Moon" src={images.webp} width={480} height={480} />
                        </div>

                        <div className="d-flex explanation">
                            <div className="d-flex flex-column inner-explanation gap-2xl">
                                <NavigationMenu variant="tab" activeMenu={defaultTab} items={tabs} itemComponent={TabComponent} onSelect={(selectedValue) => setActiveTab(selectedValue)} />
                                <div className="details d-flex flex-column gap-medium">
                                    <span className="text-uppercase heading-large color-pure-white">{name}</span>
                                    <span className="desc color-light-blue">{description}</span>
                                </div>
                                <LineBoundary />
                                <div className="statistics d-flex gap-large">
                                    <div className="distaince d-flex flex-column">
                                        <span className="sub-heading-small color-light-blue text-uppercase">AVG. DISTANCE</span>
                                        <span className="sub-heading-large color-pure-white text-uppercase">{distance}</span>
                                    </div>
                                    <div className="travel-time d-flex flex-column">
                                        <span className="sub-heading-small color-light-blue text-uppercase">Est. travel time</span>
                                        <span className="sub-heading-large color-pure-white text-uppercase">{travel}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        )
    );
};

DestinationSpace.propTypes = {};
