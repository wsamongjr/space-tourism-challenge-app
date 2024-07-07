import { backgrounds, layout, viewport } from "stories/parameters";
import { FullPage } from "./FullPage";

export default {
    title: "Space Tourism/FullPage",
    component: FullPage,
    tags: ["autodocs"],
    parameters: {
        layout,
        backgrounds,
        viewport,
    },
};

export const Home = {};

export const Destination = {
    args: {
        activeHeaderMenu: "01",
    },
};

export const Crew = {
    args: {
        activeHeaderMenu: "02",
    },
};
