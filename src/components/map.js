import React from "react";
import Header from "../header";
import "react-tabs/style/react-tabs.css";

const Map = () => {
  return (
    <div className="bg-gray-200">
      <Header currentPage="Map" />

      <div className="iframe-container">
        <iframe
          src="https://gis.police.gov.rw/portal/apps/experiencebuilder/experience/?id=d8cf153d25ca4824b1765b79d575c4d1"
          title="Tab 1 Content"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
