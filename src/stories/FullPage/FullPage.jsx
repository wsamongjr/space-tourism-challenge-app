import { HomeSpace } from "stories/HomeSpace/HomeSpace";
import { Navigation } from "stories/Navigation/Navigation";
import "./fullpage.scss";

export const FullPage = () => (
    <div className="wrapper bg-very-dark-navy bg-space">
        <Navigation />
        <HomeSpace />
    </div>
);

FullPage.propTypes = {};
