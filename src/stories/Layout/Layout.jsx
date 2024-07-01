import { Background } from "stories/Background/Background";
import "./layout.scss";

export const Layout = ({ children }) => (
    <Background>
        <div className="layout">{children}</div>
    </Background>
);

Layout.propTypes = {};
