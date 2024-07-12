import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './navigationmenu.scss';
import { Button } from 'stories/Button/Button';
import { getKeyDex } from 'util/common';
import { Fade } from 'react-bootstrap';

const VARIANT = {
    header: 'header-menu',
    tab: 'tab-menu',
};

export const NavigationMenu = ({ variant, items, itemComponent: ItemComponent, activeMenu, onSelect }) => {
    const [showFlyout, setShowFlyout] = React.useState();
    const [selectMenu, setSelectMenu] = React.useState();
    const defaultClass = VARIANT[variant || 'header'];
    const navClasses = [defaultClass, variant === 'header' ? 'mobile-flyout' : ''].join(' ');

    useEffect(() => {
        setSelectMenu(activeMenu);
        setShowFlyout(variant !== 'header');
    }, [activeMenu, variant]);
    return (
        <>
            <Fade in={showFlyout} timeout={10000}>
                <nav className={navClasses}>
                    {variant === 'header' && (
                        <div className="btn-close">
                            <Button className="btn-wrapper" aria-expanded={showFlyout} aria-controls="mobile-flyout" onClick={() => setShowFlyout(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
                                    <g fill="#D0D6F9" fill-rule="evenodd">
                                        <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
                                        <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
                                    </g>
                                </svg>
                            </Button>
                        </div>
                    )}
                    <ul className="nav-menu mb-0">
                        {items.map((item) => (
                            <ItemComponent
                                key={getKeyDex()}
                                active={selectMenu === item.id}
                                onClick={(selectedValue) => {
                                    setSelectMenu(selectedValue);
                                    onSelect(selectedValue);
                                }}
                                {...item}
                            />
                        ))}
                    </ul>
                </nav>
            </Fade>
            {variant === 'header' && (
                <div className="nav-mobile-hamburger">
                    <Button className="btn-wrapper" aria-expanded={showFlyout} aria-controls="mobile-flyout" onClick={() => setShowFlyout(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
                            <g fill="#D0D6F9" fill-rule="evenodd">
                                <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
                            </g>
                        </svg>
                    </Button>
                </div>
            )}
        </>
    );
};

NavigationMenu.propTypes = {
    variant: PropTypes.oneOf(['header', 'tab']),
    items: PropTypes.array,
    itemComponent: PropTypes.any,
    activeMenu: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onSelect: PropTypes.func,
};
