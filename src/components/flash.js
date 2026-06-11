import React from "react";
import Header from "../header";
import "react-tabs/style/react-tabs.css";

const Flash = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-gray-200">
      <Header currentPage="Flash" />

      <div className="iframe-container">
        <iframe
          src="https://gis.police.gov.rw/portal/apps/dashboards/1fbf07b71edf4fdc83c07316f947684b"
          title="Tab 1 Content"
        ></iframe>
      </div>
    </div>
  );
};

export default Flash;
