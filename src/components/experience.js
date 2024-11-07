import React from "react";
import Header from "../header";
import "react-tabs/style/react-tabs.css";

const Experience = () => {
  return (
    <div className="bg-gray-200">
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
