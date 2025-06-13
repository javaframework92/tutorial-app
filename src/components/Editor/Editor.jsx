import { useState } from "react";
import "./_editor.scss";

const Editor = () => {

    const [html, setHtml] = useState('');
    const [css, setCss] = useState('');
    const [javascript, setJavascript] = useState('');


    const content = `
        <html>
            <head>
                <title>WMD</title>
                <style>
                    ${css}
                </style>
            </head>
            <body>
                ${html}
                <script>
                    ${javascript}
                </script>
            </body>
        </html>
    `;

    const handleKeyUp = (event) => {
        switch (event.target.id) {
            case 'html':
                setHtml(event.target.value);
                break;
            case 'css':
                setCss(event.target.value);
                break;
            case 'js':
                setJavascript(event.target.value);
                break;
            default:
                break;
        }

    }



    return (
        <>

            <div className="aj-editor-container">
                <div className="row">
                    <div className="col-5">
                        <div className="aj-editor">
                            <label for="html">HTML</label>
                            <textarea onKeyUp={handleKeyUp} id="html"></textarea>
                        </div>
                        <div className="aj-editor">
                            <label for="css">CSS</label>
                            <textarea onKeyUp={handleKeyUp} id="css"></textarea>
                        </div>
                        <div className="aj-editor">
                            <label for="js">JavaScript</label>
                            <textarea onKeyUp={handleKeyUp} id="js"></textarea>
                        </div>
                    </div>
                    <div className="col-7">
                        <div className="aj-editor-output">
                            <label>Output</label>
                            <iframe srcDoc={content} id="output"></iframe>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Editor;