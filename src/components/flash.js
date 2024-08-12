import React from "react";
import Header from "../header";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Flash = () => {
  return (
    <div className="bg-gray-200">
      <Header currentPage="Flash" />
      <Tabs>
        <div className="">
          <TabList className="bg-blue-900 border-none font-semibold p-2 text-white">
            <Tab>Flash Report</Tab>
          </TabList>
        </div>

        <TabPanel>
          <div className="iframe-container">
            <iframe
              src="https://gis.police.gov.rw/portal/apps/dashboards/1fbf07b71edf4fdc83c07316f947684b"
              title="Tab 1 Content"
            ></iframe>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Flash;
