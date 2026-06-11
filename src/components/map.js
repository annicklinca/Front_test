import React from "react";
import Header from "../header";
import "react-tabs/style/react-tabs.css";

const Map = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-gray-200">
      <Header currentPage="Map" />

      <div className="iframe-container">
        <iframe
          src="https://gis.police.gov.rw/portal/apps/experiencebuilder/experience/?id=d3c78076338f45c9b9021adc656e3d75"
          title="Tab 1 Content"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
