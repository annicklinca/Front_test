import React, { useEffect } from "react";
import Header from "../header";
import "react-tabs/style/react-tabs.css";

const Experience = () => {
  useEffect(() => { document.title = "Topographic Map"; }, []);
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-gray-200">
      <Header currentPage="Experience" />

      <div className="iframe-container">
        <iframe
          src="https://gis.police.gov.rw/portal/apps/experiencebuilder/experience/?id=acdb38d30e474f35a78cd4e6d4e0b8da"
          title="Tab 1 Content"
        ></iframe>
      </div>
    </div>
  );
};

export default Experience;
