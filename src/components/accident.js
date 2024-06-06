import React, { useState, useEffect } from "react";
import Header from "../header";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { provinceUsers, districtUsers, trafficUser } from "../users";

const Accident = () => {
  const username = localStorage.getItem("username");
  const [dashboardUrl, setDashboardUrl] = useState("");
  const [mapUrl, setMapUrl] = useState("");

  useEffect(() => {
    const matchedProvinceUser = provinceUsers.find(
      (user) => user.username === username
    );
    const matchedDistrictUser = districtUsers.find(
      (user) => user.username === username
    );

    if (matchedProvinceUser) {
      setDashboardUrl(
        `https://gis.police.gov.rw/portal/apps/dashboards/77686968b49c449da3c861c25582f0ed#province=${matchedProvinceUser.province}`
      );
      setMapUrl(
        `https://gis.police.gov.rw/portal/apps/dashboards/abd3d14cc9574d84bce461c1c75f6398#province=${matchedProvinceUser.province}`
      );
    } else if (matchedDistrictUser) {
      setDashboardUrl(
        `https://gis.police.gov.rw/portal/apps/dashboards/77686968b49c449da3c861c25582f0ed#district=${matchedDistrictUser.district}`
      );
      setMapUrl(
        `https://gis.police.gov.rw/portal/apps/dashboards/abd3d14cc9574d84bce461c1c75f6398#district=${matchedDistrictUser.district}`
      );
    } else {
      setDashboardUrl(
        "https://gis.police.gov.rw/portal/apps/dashboards/77686968b49c449da3c861c25582f0ed"
      );
      setMapUrl(
        `https://gis.police.gov.rw/portal/apps/dashboards/77686968b49c449da3c861c25582f0ed`
      );
    }
  }, [username]);

  const isTabVisible = !districtUsers.find(
    (user) => user.username === username
  );

  return (
    <div className="bg-gray-200">
      <Header currentPage="Accident" />
      <Tabs>
        <div className="">
          <TabList className="bg-blue-900 border-none font-semibold p-2 text-white">
            <Tab>Dashboard</Tab>
            {isTabVisible && <Tab>Maps</Tab>}
            {isTabVisible && <Tab>App for Edit</Tab>}
            <Tab>Form</Tab>
          </TabList>
        </div>
        <TabPanel>
          {/* Dashboard */}
          <div className="iframe-container">
            <iframe src={dashboardUrl} title="Tab 1 Content"></iframe>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="iframe-container">
            <iframe src={mapUrl} title="Tab 1 Content"></iframe>
          </div>
          {/* Maps*/}
        </TabPanel>

        <TabPanel>
          <div className="iframe-container">
            <iframe
              src="https://gis.police.gov.rw/portal/apps/webappviewer/index.html?id=200f4de1a580457488ecdd46c81796ca"
              title="Tab 1 Content"
            ></iframe>
          </div>
          {/* Maps*/}
        </TabPanel>

        <TabPanel>
          <div className="iframe-container">
            <iframe
              src="https://survey123.arcgis.com/share/22c2786f70c04e8d8c788d5cd433783e?portalUrl=https://gis.police.gov.rw/portal"
              title="Tab 1 Content"
            ></iframe>
          </div>
          {/* Forms */}
        </TabPanel>
      </Tabs>
      {/* Your Crime page content goes here */}
    </div>
  );
};

export default Accident;
