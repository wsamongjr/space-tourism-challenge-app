export const HeaderComponent = ({ id, active, labels, onClick }) => (
    <li className={active ? "active" : ""} onClick={() => onClick(id)}>
        <span className="nav-num heading-navigation-bold">{labels[0]}</span> <span className="heading-navigation">{labels[1]}</span>
    </li>
);

export const TabComponent = ({ id, active, label, onClick }) => (
    <li className={active ? "active" : ""} onClick={() => onClick(id)}>
        <span className="nav-num heading-navigation-bold">{label}</span>
    </li>
);
