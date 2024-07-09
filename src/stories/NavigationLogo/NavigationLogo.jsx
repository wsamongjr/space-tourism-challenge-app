import PropTypes from "prop-types";
import { LineBoundary } from "stories/LineBoundary/LineBoundary";
import "./navigationlogo.scss";

export const NavigationLogo = ({ activeMenu, onClick }) => (
    <div className="nav-logo">
        <div className={"logo" + (activeMenu === "00" ? " home" : "")} onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                <g fill="none" fill-rule="evenodd">
                    <circle cx="24" cy="24" r="24" fill="#FFF" />
                    <path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" />
                </g>
            </svg>
        </div>
        <LineBoundary />
    </div>
);
NavigationLogo.propTypes = {
    activeMenu: PropTypes.string,
    onClick: PropTypes.func,
};
