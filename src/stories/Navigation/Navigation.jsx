import { NavigationLogo } from "stories/NavigationLogo/NavigationLogo";
import { NavigationMenu } from "stories/NavigationMenu/NavigationMenu";
import "./navigation.scss";

export const Navigation = () => {
    return (
        <header className="nav-main">
            <NavigationLogo />
            <NavigationMenu />
        </header>
    );
};

Navigation.propTypes = {};
