import { backgrounds, viewport } from "stories/parameters";
import { NavigationMenu } from "./NavigationMenu";
import { HeaderComponent, TabComponent } from "components/Navigation";

export default {
    title: "Space Tourism/NavigationMenu",
    component: NavigationMenu,
    tags: ["autodocs"],
    parameters: {
        backgrounds,
        viewport,
    },
};

export const Header = {
    args: {
        variant: "header",
        items: [{ active: true, labels: ["00", "Home"] }, { labels: ["01", "Destination"] }, { labels: ["02", "Crew"] }, { labels: ["03", "Technology"] }],
        itemComponent: HeaderComponent,
    },
};

export const DestinationTab = {
    args: {
        variant: "tab",
        items: [{ active: true, label: "Moon" }, { label: "Mars" }, { label: "Europa" }, { label: "Titan" }],
        itemComponent: TabComponent,
    },
};
