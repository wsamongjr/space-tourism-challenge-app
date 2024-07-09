import { NavigationLogo } from "stories/NavigationLogo/NavigationLogo";
import { NavigationMenu } from "stories/NavigationMenu/NavigationMenu";
import { HeaderComponent } from "components/Navigation";
import PropTypes from "prop-types";
import "./navigation.scss";

const menus = [
    { id: "00", labels: ["00", "Home"] },
    { id: "01", labels: ["01", "Destination"] },
    { id: "02", labels: ["02", "Crew"] },
    { id: "03", labels: ["03", "Technology"] },
];

export const Navigation = ({ activeMenu, onSelect }) => {
    return (
        <header className="nav-main">
            <NavigationLogo activeMenu={activeMenu} onClick={() => onSelect("00")} />
            <NavigationMenu variant="header" items={menus} activeMenu={activeMenu} itemComponent={HeaderComponent} onSelect={onSelect} />
        </header>
    );
};

Navigation.propTypes = {
    activeMenu: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onSelect: PropTypes.func,
};
