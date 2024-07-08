import { Button } from "stories/Button/Button";

export const DotComponent = ({ id, active, onClick, props }) => (
    <Button className={["btn-wrapper dot-pagination", active ? "active" : ""].join(" ")} onClick={() => onClick(id)} {...props}>
        <span class="circle"></span>
    </Button>
);

export const PagerComponent = ({ id, label, active, onClick, props }) => (
    <Button className={["btn-wrapper btn-pager", active ? "active" : ""].join(" ")} onClick={() => onClick(id)} {...props}>
        <div className={["circle", active ? "active" : ""].join(" ")}>
            <span className="heading-small">{label}</span>
        </div>
    </Button>
);
