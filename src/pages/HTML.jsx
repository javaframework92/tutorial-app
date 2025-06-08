import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';
import html from "../assets/tutorials/html.json";
import Content from "../components/Content/Content";
import { useSearchParams } from "react-router-dom";

const HTML = () => {

    const [content, setContent] = useState('');
    const [key, setKey] = useState('introduction');
    const [currentTopic, setCurrentTopic] = useState(null);
    const [searchParams] = useSearchParams();

    useEffect(() => {
        
        const fetchHtml = async () => {
            try {
                let k = searchParams.get("topic");
                
                let topic;
                if(k){
                    topic = html[k];
                    setKey(k)
                } else {
                    topic = html[key];
                }
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
        <Content currentTopic={currentTopic} courseIndexes={html} currentKey = {key}>
            <ReactMarkdown>{content}</ReactMarkdown>
        </Content>
    );
}

export default HTML;