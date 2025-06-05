import { useState } from "react";

const TutorialsCard = ({ tutorials }) => {
    const [rows] = useState([]);

    return (
        <div>
            {
                tutorials?.map((tutorial, index) => {
                    let rowTutorials = tutorials.splice(index, index + 6);

                    rows.push(
                        <div className="row mt-4" key={`row-` + index}>
                            {
                                rowTutorials?.map((rowTutorial, i) => (
                                    <div key={i} className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-12 mb-4">
                                        <a href={rowTutorial.path}>
                                            <div className="card">
                                                <div className="card-body">
                                                    <img src={rowTutorial.imagePath} className="card-img"></img>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                ))
                            }
                        </div>
                    );
                })
            }
            <div>
                {rows}
            </div>
        </div>
    );
}

export default TutorialsCard;