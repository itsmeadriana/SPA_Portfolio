import React from 'react';
import certificate from '../../assets/documents/certificate.pdf'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

const elementStyleSheet = document.styleSheets;
const elementStyleSheetArray = Array.from(elementStyleSheet);

console.log(elementStyleSheetArray);
console.log("Ho!")


function Certificate() {

    return (
        <div className="certificateBody">
                <Document className="certificateDoc"
                    file={certificate}
                >
                <Page pageNumber={1} />
                </Document>
        </div>
    )
}


export default Certificate;