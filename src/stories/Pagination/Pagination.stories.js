import { fn } from "@storybook/test";
import { backgrounds, viewport } from "stories/parameters";
import { Pagination } from "./Pagination";
import { DotComponent, PagerComponent } from "components/Pagination";

export default {
    title: "Space Tourism/Pagination",
    component: Pagination,
    tags: ["autodocs"],
    parameters: {
        backgrounds,
        viewport,
    },

    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { onClick: fn() },
};

export const Dot = {
    args: { items: [{ id: "Douglas Hurley" }, { id: "Mark Shuttleworth" }, { id: "Victor Glover" }, { id: "Anousheh Ansari" }], itemComponent: DotComponent },
};

export const Pager = {
    args: {
        items: [
            { id: "Launch vehicle", label: "1" },
            { id: "Spaceport", label: "2" },
            { id: "Space capsule", label: "3" },
        ],
        itemComponent: PagerComponent,
    },
};
