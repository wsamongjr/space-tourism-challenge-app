import { Button } from "stories/Button/Button";

export const DotComponent = ({ id, active, onClick, props }) => (
    <Button className={["btn-wrapper dot-pagination", active ? "active" : ""].join(" ")} onClick={() => onClick(id)} {...props}>
        <span class="circle"></span>
    </Button>
);
