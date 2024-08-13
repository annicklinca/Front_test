import React from "react";
import Header from "../header";
import "react-tabs/style/react-tabs.css";

const Analytics = () => {
  return (
    <div className="bg-gray-200">
      <Header currentPage="Analytics" />
      <div className="iframe-container">
        <iframe
          src="https://gis.police.gov.rw/portal/apps/webappviewer/index.html?id=17ee70c25231406382ba75d6510553e2"
          title="Tab 1 Content"
        ></iframe>
      </div>
    </div>
  );
};

export default Analytics;
