import { backgrounds, viewport } from "stories/parameters";
import { NavigationLogo } from "./NavigationLogo";

export default {
    title: "Space Tourism/NavigationLogo",
    component: NavigationLogo,
    tags: ["autodocs"],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: "fullscreen",
        backgrounds,
        viewport,
    },
};

export const Desktop = {};
