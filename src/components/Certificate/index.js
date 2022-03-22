import React from 'react';
import certificate from '../../assets/documents/certificate.pdf'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

function Certificate() {

    return (
        <div className="certificateBody">
            <div className='certificate-wrapper'>
                <Document className="certificateDoc"
                    file={certificate}
                >
                <Page pageNumber={1} />
                </Document>
            </div>
        </div>
    )
}


export default Certificate;