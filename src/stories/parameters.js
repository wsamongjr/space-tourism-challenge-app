// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
export const layout = "fullscreen";

export const backgrounds = {
    default: "very dark navy",
    values: [{ name: "very dark navy", value: "#0b0d17" }],
};

export const viewport = {
    viewports: {
        Desktop: {
            name: "Desktop",
            styles: {
                width: "1440px",
                height: "1024px",
            },
        },
        Tablet: {
            name: "Tablet",
            styles: {
                width: "768px",
                height: "1024px",
            },
        },
        Mobile: {
            name: "Mobile",
            styles: {
                width: "375px",
                height: "812px",
            },
        },
    },
};
