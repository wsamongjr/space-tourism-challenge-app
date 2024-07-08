import PropTypes from "prop-types";
import { HomeSpace } from "stories/HomeSpace/HomeSpace";
import { Navigation } from "stories/Navigation/Navigation";
import { DestinationSpace } from "stories/DestinationSpace/DestinationSpace";
import { useState } from "react";
import { CrewSpace } from "stories/CrewSpace/CrewSpace";
import { TechnologySpace } from "stories/TechnologySpace/TechnologySpace";
import "./fullpage.scss";

const backgroundWrapper = {
    "00": "bg-space-home",
    "01": "bg-space-destination",
    "02": "bg-space-crew",
    "03": "bg-space-technology",
};

export const FullPage = ({ activeHeaderMenu = "00" }) => {
    const [activeMenu, setActiveMenu] = useState(activeHeaderMenu);
    const bgWrapper = backgroundWrapper[activeMenu];
    return (
        <div className={`wrapper bg-very-dark-navy ${bgWrapper}`}>
            <Navigation activeMenu={activeMenu} onSelect={(value) => setActiveMenu(value)} />
            {activeMenu === "00" ? <HomeSpace onClick={setActiveMenu} /> : null}
            {activeMenu === "01" ? <DestinationSpace /> : null}
            {activeMenu === "02" ? <CrewSpace /> : null}
            {activeMenu === "03" ? <TechnologySpace /> : null}
        </div>
    );
};

FullPage.propTypes = {
    activeHeaderMenu: PropTypes.string,
};
