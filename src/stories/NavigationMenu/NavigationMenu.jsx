import React from "react";
import "./navigationmenu.scss";
import { Button } from "stories/Button/Button";

export const NavigationMenu = () => {
    const [showFlyout, setShowFlyout] = React.useState();
    return (
        <>
            <nav className={showFlyout ? "show-flyout" : ""}>
                <div className="btn-close">
                    <Button className="btn-wrapper" onClick={() => setShowFlyout(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
                            <g fill="#D0D6F9" fill-rule="evenodd">
                                <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
                                <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
                            </g>
                        </svg>
                    </Button>
                </div>
                <ul className="nav-menu mb-0">
                    <li className="active">
                        <span className="nav-num heading-navigation-bold">00</span> <span className="heading-navigation">Home</span>
                    </li>
                    <li>
                        <span className="nav-num heading-navigation-bold">01</span> <span className="heading-navigation">Destination</span>
                    </li>
                    <li>
                        <span className="nav-num heading-navigation-bold">02</span> <span className="heading-navigation">Crew</span>
                    </li>
                    <li>
                        <span className="nav-num heading-navigation-bold">03</span> <span className="heading-navigation">Technology</span>
                    </li>
                </ul>
            </nav>
            <div className="nav-mobile-hamburger">
                <Button className="btn-wrapper" onClick={() => setShowFlyout(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
                        <g fill="#D0D6F9" fill-rule="evenodd">
                            <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
                        </g>
                    </svg>
                </Button>
            </div>
        </>
    );
};

NavigationMenu.propTypes = {};
