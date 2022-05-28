import React, { useState } from "react";

import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

import pdf from "../../assets/resume.pdf";

import "../../App.css";
import "./Resume.css";

const Resume = () => {
  const [pageNum, setPageNum] = useState(1);
  const [pages, setPages] = useState(null);

  const docLoad = ({ numPages }) => {
    setPages(numPages);
  };

  return <div className="resume"></div>;
};

export default Resume;
