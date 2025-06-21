import { useLocation } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./_content.scss";

const Content = ({ children, title, currentKey, currentTopic, courseIndexes }) => {

    const location = useLocation();

    return (
        <main className="content-container">
            <div className="row">
                <div className="col-md-2 col-sm-1 col-xs-1">
                    {
                        location.pathname !== '/' && (
                            <Sidebar title={title} courseIndexes={courseIndexes} currentKey={currentKey}></Sidebar>
                        )
                    }

                </div>
                <div className="col-md-8 col-sm-10 col-xs-10">

                    <div className="wmd-content">
                        {children}
                    </div>

                    {
                        location.pathname !== '/' && (
                            <div className="wmd-btn-group">
                                {
                                    currentTopic?.previousTopic && (
                                        <>
                                            <span className="wmd-topic-text">{currentTopic?.previousTopic}</span>&nbsp;&nbsp;
                                            <a className="btn wmd-btn-previous" href={`${location.pathname}?topic=${currentTopic?.previousKey}`}>❮ Previous</a>
                                        </>
                                    )
                                }
                                {
                                    currentTopic?.nextTopic && (
                                        <>
                                            <a href={`${location.pathname}?topic=${currentTopic?.nextKey}`} className="btn wmd-btn-next">Next ❯</a>
                                            &nbsp;&nbsp;<span className="wmd-topic-text">{currentTopic?.nextTopic}</span>
                                        </>
                                    )
                                }





                            </div>
                        )
                    }

                </div>
                <div className="col-md-2 col-sm-1 col-xs-1"></div>
            </div>
        </main>
    );
}

export default Content;