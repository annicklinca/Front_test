import React, { useEffect } from "react";
import Header from "../header";
import "react-tabs/style/react-tabs.css";

const Operations = () => {
  useEffect(() => { document.title = "Target Operations"; }, []);
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-gray-200">
      <Header currentPage="Operations" />

      <div className="iframe-container">
        <iframe
          src="https://survey123.arcgis.com/share/74c7c1f370d94580948841969eecdf09?portalUrl=https://gis.police.gov.rw/portal"
          title="Tab 1 Content"
        ></iframe>
      </div>
    </div>
  );
};

export default Operations;
