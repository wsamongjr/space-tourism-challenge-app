import { NavigationLogo } from "stories/NavigationLogo/NavigationLogo";
import { NavigationMenu } from "stories/NavigationMenu/NavigationMenu";
import "./navigation.scss";

export const Navigation = () => {
    return (
        <div className="nav-main">
            <NavigationLogo />
            <NavigationMenu />
        </div>
    );
};

Navigation.propTypes = {};
