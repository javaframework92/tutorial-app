import { useEffect, useState } from "react";
import tutorials from "../../assets/tutorials/tutorials.json";
import "./_courses.scss";
import TutorialsCard from "../TutorialsCard/TutorialsCard";
import Loader from "../Loader/Loader";

const Courses = ({ search }) => {

    const [rows, setRows] = useState([]);
    const [frontends, setFrontends] = useState([]);
    const [backends, setBackends] = useState([]);
    const [databases, setDatabases] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        let filteredTutorials = tutorials?.filter(tutorial => tutorial.name.toLowerCase().includes(search?.toLowerCase()));

        filteredTutorials = filteredTutorials?.length !== 0 ? filteredTutorials : tutorials;
        setFrontends(filteredTutorials?.filter(tutorial => tutorial.type === 'frontend'));
        setBackends(filteredTutorials?.filter(tutorial => tutorial.type === 'backend'));
        setDatabases(filteredTutorials?.filter(tutorial => tutorial.type === 'database'));

        setIsLoading(false)


    }, [search]);



    return (
        <>
            {
                isLoading && (
                    <Loader></Loader>
                )
            }
            <div className="row">
                <div className="col-12">
                    <div className="">
                        <h2 className="aj-popular-courses">Popular Courses</h2>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: '5rem' }}>
                {
                    frontends?.length > 0 && (
                        <>
                            <div className="row tech-row">
                                <div className="col-12">
                                    <div className="">
                                        <h3 className="aj-tech-type">Web Development</h3>
                                    </div>
                                </div>
                            </div>
                            <TutorialsCard tutorials={frontends} />
                        </>
                    )
                }
                {
                    backends?.length > 0 && (
                        <>
                            <div className="row tech-row ">
                                <div className="col-12">
                                    <div className="">
                                        <h3 className="aj-tech-type">Programming Languages</h3>
                                    </div>
                                </div>
                            </div>
                            <TutorialsCard tutorials={backends} />
                        </>
                    )
                }
                {
                    databases?.length > 0 && (
                        <>
                            <div className="row tech-row ">
                                <div className="col-12">
                                    <div className="">
                                        <h3 className="aj-tech-type">Databases</h3>
                                    </div>
                                </div>
                            </div>
                            <TutorialsCard tutorials={databases} />
                        </>
                    )
                }
            </div>
        </>

    );
}

export default Courses;