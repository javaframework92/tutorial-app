import { useLocation } from "react-router-dom";
import "./_content.scss";

const Content = ({ children, updateKey, currentTopic }) => {

    const location = useLocation();
    return (
        <main className="content-container">
            <div className="row">
                <div className="col-md-2 col-sm-1 col-xs-1"></div>
                <div className="col-md-8 col-sm-10 col-xs-10">

                    <div className="aj-content">
                        {children}
                    </div>

                    {
                        location.pathname !== '/' && (
                            <div className="aj-btn-group">
                                {/* {currentTopic.previousTopic}&nbsp;&nbsp;
                                <button className="btn btn-dark aj-btn-previous" onClick={() => updateKey(currentTopic.previousKey)}>Previous</button> */}
                                <button className="btn btn-dark aj-btn-next" onClick={() => updateKey(currentTopic?.nextKey)}>Next ❯</button>
                                &nbsp;&nbsp;<span>{currentTopic?.nextTopic}</span>
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