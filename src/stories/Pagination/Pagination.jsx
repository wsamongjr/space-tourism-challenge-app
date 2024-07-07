import React from "react";
import PropTypes from "prop-types";
import "./dot.scss";
import { getKeyDex } from "util/common";

export const Pagination = ({ items, itemComponent: ItemComponent, activePage, onSelect }) => {
    const [selectPage, setSelectPage] = React.useState(activePage);
    return (
        items &&
        items.map((item) => (
            <ItemComponent
                key={getKeyDex()}
                active={selectPage === item.id}
                onClick={(selectedValue) => {
                    setSelectPage(selectedValue);
                    onSelect(selectedValue);
                }}
                {...item}
            />
        ))
    );
};

Pagination.propTypes = {
    items: PropTypes.array,
    itemComponent: PropTypes.any,
    activePage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onSelect: PropTypes.func,
};
