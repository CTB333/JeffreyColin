import React from "react";

import { Document, Page, pdfjs } from "react-pdf";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Icon from "@mui/material/Icon";
import DownloadIcon from "@mui/icons-material/Download";

import pdf from "../../assets/resume.pdf";

import "../../App.css";
import "./Resume.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  const docLoad = ({ numPages }) => {
    console.log(numPages);
  };

  const MyDoc = () => {
    return (
      <Document
        file={pdf}
        onLoadError={(e) => console.log(e)}
        onLoadSuccess={docLoad}
      >
        <Page width={1000} pageNumber={1} />
      </Document>
    );
  };

  return (
    <div className="resume">
      <div className="pdfButton">
        <PDFDownloadLink
          document={<Document file={pdf} />}
          fileName={"resume.pdf"}
        >
          {({ blob, url, loading, error }) =>
            loading ? (
              <p style={{ fontSize: 18 }} className="proxima-normal">
                Loading Document now...
              </p>
            ) : (
              <Icon
                style={{ fontSize: 35 }}
                className="download"
                component={DownloadIcon}
              />
            )
          }
        </PDFDownloadLink>
      </div>
      <div className="pdfContainer">
        <MyDoc></MyDoc>
      </div>
    </div>
  );
};

export default Resume;
