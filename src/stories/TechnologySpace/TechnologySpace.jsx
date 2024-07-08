import React, { useEffect } from "react";
import { PageTitle } from "stories/PageTitle/PageTitle";
import { getTechnologyByName } from "util/data";
import { Pagination } from "stories/Pagination/Pagination";
import { PagerComponent } from "components/Pagination";
import "./technologyspace.scss";

const technologies = [
    { id: "Launch vehicle", label: "1" },
    { id: "Spaceport", label: "2" },
    { id: "Space capsule", label: "3" },
];

export const TechnologySpace = () => {
    const defaultTab = technologies[0].id;
    const [activePage, setActivePage] = React.useState(defaultTab);
    const [data, setData] = React.useState();

    useEffect(() => {
        const fetchTechnologyByName = async () => {
            const result = await getTechnologyByName(activePage);
            setData(result);
        };
        fetchTechnologyByName();
    }, [activePage]);

    const { name, images, description } = data || {};

    return (
        !!data && (
            <section className="main-content technology-page">
                <div className="technology-content">
                    <PageTitle menuIndex="03" label="Space launch 101" />

                    <section className="d-flex description-section gap-xl">
                        <div className="d-flex inner-description gap-2xl">
                            <div className="d-flex pager gap-xl">
                                <Pagination items={technologies} activePage={defaultTab} itemComponent={PagerComponent} onSelect={(page) => setActivePage(page)} />
                            </div>
                            <div className="d-flex role-desc gap-large">
                                <div className="role-name d-flex flex-column gap-medium">
                                    <span className="role text-uppercase heading-small color-pure-white">The Terminology...</span>
                                    <span className="text-uppercase heading-medium color-pure-white">{name}</span>
                                </div>
                                <span className="desc color-light-blue">{description}</span>
                            </div>
                        </div>
                        <div className="tech-img d-flex">
                            <img className="img-portrait d-hide" alt={name} src={images.portrait} width={600} height={600} />
                            <img className="img-landscape d-hide" alt={name} src={images.landscape} width={600} height={600} />
                        </div>
                    </section>
                </div>
            </section>
        )
    );
};

TechnologySpace.propTypes = {};
