import React, {useEffect} from 'react';
import {Document, Page, pdfjs} from 'react-pdf';
import { useWindowWidth } from '@wojtekmaj/react-hooks';

import Resume from '../images/Resume-McCoyDoherty.pdf'

// This is a requirement for the renderer to work
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

//// PDF Embedded Render ++ Scaling
// https://react-pdf.org/styling
// https://github.com/wojtekmaj/react-pdf/issues/129
// https://www.npmjs.com/package/@wojtekmaj/react-hooks


const ResumeSkills = () => {
    useEffect(() => {document.title = "Resume/Skills"}) 
    const width = useWindowWidth();

    return(
        <div>
            <h1 className="page-title">Skills Summary</h1>
            <table style={{width:"100%", textAlign:"center"}}>
                <tbody>
                <tr>
                    <th>Proficient</th>
                    <td>CSS</td>
                    <td>Data Mining</td>
                    <td>HTML</td>
                    <td>Machine Learning</td>
                    <td>NLP</td>
                    <td>Python</td>
                    <td>RegEx</td>
                </tr>
                <tr>
                    <th>Competent</th>
                    <td>Bash</td>
                    <td>Excel</td>
                    <td>Express</td>
                    <td>Git</td>
                    <td>Javascript</td>
                    <td>React</td>
                    <td>SQL</td>
                </tr>
                <tr>
                    <th>Familiar</th>
                    <td>AWS</td>
                    <td>C++</td>
                    <td>Docker</td>
                    <td>MongoDB</td>
                    <td>Node</td>
                    <td>WebPack</td>
                    <td></td>
                </tr>
                </tbody>
            </table>

            <h1>Resume</h1>
            <p>Downloadable version <a href="Resume-McCoyDoherty.pdf">here</a></p>
            <div style={{border: '2px solid black'}}>
                <Document file={Resume} style={{display: 'none'}}>
                    <Page pageNumber={1} width={Math.min(width * 0.9, 1800)}/>
                </Document>
            </div>

            
        </div>
    )
}

export default ResumeSkills