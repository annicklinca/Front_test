import React, { useEffect } from "react";
import Header from "../header";
import "react-tabs/style/react-tabs.css";

const Analytics = () => {
  useEffect(() => { document.title = "Analytics"; }, []);
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-gray-200">
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
