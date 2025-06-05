import Content from "../Content/Content";

export default function ContentGenerator({contents}) {

    return (
        contents?.length > 0 && (
            <Content>
                {
                    contents.map((content, index) => (
                        <div key={index}>
                            <h2>{content.heading}</h2>
                            <p>{content.description}</p>
                            <ul className="points">
                                {
                                    content.points && content.points.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))
                                }
                            </ul>
                            {
                                content.subheading && content.subheading.map((c, i) => (
                                    <div key={i}>
                                        <h3>{c.heading}</h3>
                                        <p>{c.description}</p>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }

            </Content>
        )
    );

}