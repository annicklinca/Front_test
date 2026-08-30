import React, { useEffect } from "react";
import Header from "../header";
import "react-tabs/style/react-tabs.css";

const Allincidents = () => {
  useEffect(() => { document.title = "All Incidents"; }, []);
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-gray-200">
      <Header currentPage="allincidents" />

      <div className="iframe-container">
        <iframe
          src="https://gis.police.gov.rw/portal/apps/dashboards/a57ad55b56624af0a651e75b3c1ca5a8"
          title="Tab 1 Content"
        ></iframe>
      </div>
    </div>
  );
};

export default Allincidents;
