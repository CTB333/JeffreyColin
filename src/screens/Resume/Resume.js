import React, { useState } from "react";

import { Document, Page, pdfjs } from "react-pdf";

import pdf from "../../assets/resume.pdf";

import "../../App.css";
import "./Resume.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  const [pageNum, setPageNum] = useState(1);
  const [pages, setPages] = useState(null);

  const docLoad = ({ numPages }) => {
    setPages(numPages);
  };

  return (
    <div className="resume">
      <div className="pdfContainer">
        <Document
          file={pdf}
          onLoadError={(e) => console.log(e)}
          onLoadSuccess={docLoad}
        >
          <Page width={1000} pageNumber={pageNum} />
        </Document>
      </div>
    </div>
  );
};

export default Resume;
