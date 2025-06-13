import { useEffect, useState } from "react";
import tutorials from "../../assets/tutorials/tutorials.json";
import TutorialsCard from "../TutorialsCard/TutorialsCard";
import "./_courses.scss";

const Courses = ({ search }) => {

    const [rows, setRows] = useState([]);
    const [frontends, setFrontends] = useState([]);
    const [backends, setBackends] = useState([]);
    const [databases, setDatabases] = useState([]);
    //  const [isLoading, setIsLoading] = useState(false);
    const [courseNotFound, setCourseNotFOund] = useState(false);

    useEffect(() => {
        //setIsLoading(true);

        let filteredTutorials = tutorials?.filter(tutorial => tutorial.name.toLowerCase().includes(search?.toLowerCase()));

        // filteredTutorials = filteredTutorials?.length !== 0 ? filteredTutorials : tutorials;
        if (filteredTutorials?.length > 0) {
            setCourseNotFOund(false);
            setFrontends(filteredTutorials?.filter(tutorial => tutorial.type === 'frontend'));
            setBackends(filteredTutorials?.filter(tutorial => tutorial.type === 'backend'));
            setDatabases(filteredTutorials?.filter(tutorial => tutorial.type === 'database'));
        } else {
            setCourseNotFOund(true);
        }

        //setIsLoading(false)


    }, [search]);



    return (
        <>
            {/* {
                isLoading && (
                    <Loader></Loader>
                )
            } */}
            <div className="row">
                <div className="col-12">
                    <div className="aj-editor-group">
                        <button className="aj-editor-btn" onClick={() => openEditor()} >Try Online Editor</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="aj-popular-text">
                        <h2 className="aj-popular-courses">Most Popular Courses</h2>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: '5rem' }}>
                {
                    courseNotFound && (
                        <div className="row">
                            <div className="col-12">
                                <p className="not-found">
                                    There is no search result found for <strong>{search}</strong>.
                                    Either refresh your browser window or try to search other course.
                                </p>
                            </div>
                        </div>
                    )
                }
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