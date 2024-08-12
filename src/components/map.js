import React from "react";
import Header from "../header";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Map = () => {
  return (
    <div className="bg-gray-200">
      <Header currentPage="Map" />
      <Tabs>
        <div className="">
          <TabList className="bg-blue-900 border-none font-semibold p-2 text-white">
            <Tab>Deplyoment Map</Tab>
          </TabList>
        </div>

        <TabPanel>
          <div className="iframe-container">
            <iframe
              src="https://gis.police.gov.rw/portal/apps/dashboards/204938b2a6f64996b9bc81905d97c60a"
              title="Tab 1 Content"
            ></iframe>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Map;
