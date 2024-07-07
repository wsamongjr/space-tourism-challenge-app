import React, { useEffect } from "react";
import { PageTitle } from "stories/PageTitle/PageTitle";
import { getCrewByName } from "util/data";
import { Pagination } from "stories/Pagination/Pagination";
import { DotComponent } from "components/Pagination";
import "./crewspace.scss";

const crews = [{ id: "Douglas Hurley" }, { id: "Mark Shuttleworth" }, { id: "Victor Glover" }, { id: "Anousheh Ansari" }];

export const CrewSpace = () => {
    const defaultTab = crews[0].id;
    const [activePage, setActivePage] = React.useState(defaultTab);
    const [data, setData] = React.useState();

    useEffect(() => {
        const fetchCrewByName = async () => {
            const result = await getCrewByName(activePage);
            setData(result);
        };
        fetchCrewByName();
    }, [activePage]);

    const { name, images, role, bio } = data || {};

    return (
        !!data && (
            <section className="main-content crew-page">
                <div className="crew-content">
                    <PageTitle menuIndex="02" label="Meet your creaw" />

                    <section className="d-flex bio-section gap-xl">
                        <div className="d-flex bio gap-2xl">
                            <div className="d-flex flex-column inner-bio gap-2xl">
                                <div className="role-bio d-flex flex-column gap-medium">
                                    <div className="role-name d-flex flex-column gap-medium">
                                        <span className="role text-uppercase heading-small color-pure-white">{role}</span>
                                        <span className="text-uppercase heading-medium color-pure-white">{name}</span>
                                    </div>
                                    <span className="desc color-light-blue">{bio}</span>
                                </div>
                                <div className="d-flex pager gap-2xl">
                                    <Pagination items={crews} activePage={defaultTab} itemComponent={DotComponent} onSelect={(page) => setActivePage(page)} />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex">
                            <img alt={name} src={images.webp} width={540} height={676} />
                        </div>
                    </section>
                </div>
            </section>
        )
    );
};

CrewSpace.propTypes = {};
