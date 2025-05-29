import overview from "../assets/tutorials/html/overview.json";
import Content from "../components/Content/Content";

const HTML = () => {

    return (

        overview.length > 0 && (
            <Content>

                {
                    overview.map((o, i) => (
                        <div key={i}>
                            <h2>{o.heading}</h2>
                            <p>{o.content}</p>
                            <ul className="points">
                                {
                                    o.points && o.points.map((point, i1) => (
                                        <li key={i1}>{point}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }

            </Content>
        )

        /* overview.length > 0 && (
            <main className="content-container">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                        {
                            overview.map((o, i) => (
                                <div key={i}>
                                    <h2>{o.heading}</h2>
                                    <p>{o.content}</p>
                                    <ul className="points">
                                        {
                                            o.points && o.points.map((point, i1) => (
                                                <li key={i1}>{point}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                    <div className="col-2"></div>
                </div>
            </main>
        ) */

    );
}

export default HTML;