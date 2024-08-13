import React from "react";
import Header from "../header";
import "react-tabs/style/react-tabs.css";

const Map = () => {
  return (
    <div className="bg-gray-200">
      <Header currentPage="Map" />

      <div className="iframe-container">
        <iframe
          src="https://gis.police.gov.rw/portal/apps/dashboards/204938b2a6f64996b9bc81905d97c60a"
          title="Tab 1 Content"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
