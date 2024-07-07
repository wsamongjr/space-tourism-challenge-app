// import { Button } from "stories/Button/Button";
// import MoonSrc from "assets/destination/image-moon.png";
import "./pagetitle.scss";

import PropTypes from "prop-types";

export const PageTitle = ({ menuIndex, label }) => (
    <div className="page-title d-flex text-uppercase heading-xs gap-large color-pure-white">
        <span className="heading-menu-index bold">{menuIndex}</span>
        {label}
    </div>
);

PageTitle.propTypes = {
    menuIndex: PropTypes.string,
    label: PropTypes.string,
};
