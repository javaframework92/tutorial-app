import { useLocation } from "react-router-dom";
import "./_sidebar.scss";

const Sidebar = ({ title, currentKey, courseIndexes }) => {
    const location = useLocation();
    return (
        <div className="wmd-sidebar vh-100">
            <h4 className="wmd-sidebar-title">{title}</h4>
            <ul className="nav nav-pills flex-column">
                {
                    courseIndexes && (Object.keys(courseIndexes).map((key, index) => (
                        <li className="nav-item" key={index}>
                            <a href={`${location.pathname}?topic=${key}`} className={`nav-link ${currentKey === key ? 'wmd-active' : ''} `}>{courseIndexes[key].currentTopic}</a>
                        </li>
                    )

                    )
                    )
                }

            </ul>
        </div>
    );
}
export default Sidebar;