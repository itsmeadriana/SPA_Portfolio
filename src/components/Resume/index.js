import React, { useState } from "react";
import '../../index.css';
import resume from '../../assets/spa_resume.pdf';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

function Resume(){
    const [numPages, setNumPages] = useState(null);
    const[pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1,2);
    }

    function changePage(offset) {
        setPageNumber(prevPageNUmber => prevPageNUmber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(+1);
    }
    return (

        <div className="resumeWrapper" id="c">
            <Document className="resumeDoc" id="c"
                file={resume}
                onDocumentLoadSuccess={onDocumentLoadSuccess}
            >
            <Page pageNumber={pageNumber} />
            </Document>
            <div>
                <p>
                    Page {pageNumber || (numPages ? 1: '--')} of 2
                </p>
                <button className="pdfBtn"
                    type="button"
                    disabled={pageNumber <=1}
                    onClick={previousPage}
                >
                        Previous
                </button>
                <button className="pdfBtn"
                    type="button"
                    disabled={pageNumber >= 2}
                    onClick={nextPage}
                >
                    Next
                </button>
            </div>
            <br />
            <h5 className="pdfDownload">[Download a PDF copy of my resume <a href={resume}>here</a>.]</h5>
        </div>
    )
}

export default Resume;