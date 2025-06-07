import { useLocation } from "react-router-dom";
import "./_sidebar.scss";

const Sidebar = ({ title, currentKey, courseIndexes }) => {
    const location = useLocation();
    return (
        <div className="d-flex flex-column vh-100 p-3" style={{ width: '250px', backgroundColor: "#fff" }}>
            <h4 className="aj-index-title">{title}</h4>
            <ul className="nav nav-pills flex-column">
                {
                    Object.keys(courseIndexes).map((key, index) => (
                        <li className="nav-item" key={index}>
                            <a href={ `${location.pathname}?topic=${key}`} className={`nav-link ${currentKey === key ? 'aj-active' : ''} `}>{courseIndexes[key].currentTopic}</a>
                        </li>
                    )

                    )
                }

            </ul>
        </div>
    );
}
export default Sidebar;