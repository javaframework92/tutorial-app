import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';
import html from "../assets/tutorials/html.json";
import Content from "../components/Content/Content";

const HTML = () => {

    const [content, setContent] = useState('');
    const [key, setKey] = useState('overview');
    const [currentTopic, setCurrentTopic] = useState(null);

    const updateKey = (key) => {
        setKey(key);
    }

    useEffect(() => {
        const fetchHtml = async () => {
            try {
                let topic = html[key];
                if (topic) {
                    setCurrentTopic(topic);
                    let response = await fetch(topic.path);
                    let data = await response.text();
                    setContent(data);
                }
            } catch (error) {
                console.error("Error while fetching content due to error:" + error);

            }
        };

        fetchHtml();

    }, [key]);


    return (
        <Content updateKey={ updateKey } currentTopic={currentTopic}>
            <ReactMarkdown>{content}</ReactMarkdown>
        </Content>

        // <ContentGenerator
        //     contents={overview}
        // />

    );
}

export default HTML;