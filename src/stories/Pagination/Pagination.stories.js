import { fn } from "@storybook/test";
import { backgrounds, viewport } from "stories/parameters";
import { Pagination } from "./Pagination";
import { DotComponent } from "components/Pagination";

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
