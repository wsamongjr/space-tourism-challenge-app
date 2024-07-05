import { Button } from "stories/Button/Button";
import "./homespace.scss";

export const HomeSpace = () => (
    <section className="main-content home-page">
        <div className="space-content">
            <div className="d-flex flex-column gap-large text-section">
                <span className="color-light-blue heading-xs">SO, YOU WANT TO TRAVEL TO</span>
                <span className="color-pure-white heading-xl">SPACE</span>
                <span className="color-light-blue">
                    Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a
                    truly out of this world experience!
                </span>
            </div>

            <div className="d-flex flex-column m-auto round-button">
                <Button kind="ROUND">EXPLORE</Button>
            </div>
        </div>
    </section>
);

HomeSpace.propTypes = {};
