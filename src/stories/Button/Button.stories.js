import { fn } from "@storybook/test";
import { backgrounds, viewport } from "stories/parameters";
import { Button } from "./Button";

export default {
    title: "Space Tourism/Button",
    component: Button,
    tags: ["autodocs"],
    parameters: {
        backgrounds,
        viewport,
    },

    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { onClick: fn() },
};

export const Default = {
    args: {
        children: "EXPLORE",
    },
};

export const Wrapper = {
    args: {
        children: "EXPLORE",
        kind: "WRAPPER",
    },
};

export const Round = {
    args: {
        children: "EXPLORE",
        kind: "ROUND",
    },
};
