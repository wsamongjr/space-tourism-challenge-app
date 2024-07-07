import { backgrounds, viewport } from "stories/parameters";
import { PageTitle } from "./PageTitle";

export default {
    title: "Space Tourism/PageTitle",
    component: PageTitle,
    tags: ["autodocs"],
    parameters: {
        backgrounds,
        viewport,
    },
};

export const Destination = {
    args: {
        menuIndex: "01",
        label: "Pick your destination",
    },
};

export const Crew = {
    args: {
        menuIndex: "02",
        label: "Meet your crew",
    },
};

export const Technology = {
    args: {
        menuIndex: "03",
        label: "Space Launch 101",
    },
};
