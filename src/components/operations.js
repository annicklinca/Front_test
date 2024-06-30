import React from "react";
import Header from "../header";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Operations = () => {
  return (
    <div className="bg-gray-200">
      <Header currentPage="Operations" />
      <Tabs>
        <div className="">
          <TabList className="bg-blue-900 border-none font-semibold p-2 text-white">
            {/* <Tab>Time Maps</Tab> */}
            <Tab>Target Operations Form</Tab>
          </TabList>
        </div>

        <TabPanel>
          <div className="iframe-container">
            <iframe
              src="https://survey123.arcgis.com/share/74c7c1f370d94580948841969eecdf09?portalUrl=https://gis.police.gov.rw/portal"
              title="Tab 1 Content"
            ></iframe>
          </div>
          {/* Add content for Tab 1 */}
        </TabPanel>
      </Tabs>
      {/* Your Crime page content goes here */}
    </div>
  );
};

export default Operations;
