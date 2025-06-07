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
                                    <div key={i} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-4">
                                        <a href={rowTutorial.path}>
                                            <div className="card">
                                                <div className="card-body">
                                                    <img src={rowTutorial.imagePath} alt={rowTutorial.name} className="card-img"></img>
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