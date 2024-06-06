import React, { useEffect, useState } from "react";
import Header from "../header";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { provinceUsers, districtUsers } from "../users";

const Incident = () => {
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
        `https://gis.police.gov.rw/portal/apps/dashboards/b8e3f4d5811f4c7c849efd24b805c310#province=${matchedProvinceUser.province}`
      );
      setMapUrl(
        `https://gis.police.gov.rw/portal/apps/dashboards/021c48cb5a17407c887df2e85056a4d9#province=${matchedProvinceUser.province}`
      );
    } else if (matchedDistrictUser) {
      setDashboardUrl(
        `https://gis.police.gov.rw/portal/apps/dashboards/b8e3f4d5811f4c7c849efd24b805c310#district=${matchedDistrictUser.district}`
      );
      setMapUrl(
        `https://gis.police.gov.rw/portal/apps/dashboards/021c48cb5a17407c887df2e85056a4d9#district=${matchedDistrictUser.district}`
      );
    } else {
      setDashboardUrl(
        "https://gis.police.gov.rw/portal/apps/dashboards/b8e3f4d5811f4c7c849efd24b805c310"
      );
      setMapUrl(
        `https://gis.police.gov.rw/portal/apps/dashboards/021c48cb5a17407c887df2e85056a4d9`
      );
    }
  }, [username]);

  const isTabVisible = !districtUsers.find(
    (user) => user.username === username
  );

  return (
    <div className="bg-gray-200">
      <Header currentPage="Incident" />
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
          <div className="iframe-container">
            <iframe src={dashboardUrl} title="Dashboard" />
          </div>
        </TabPanel>

        <TabPanel>
          <div className="iframe-container">
            <iframe src={mapUrl} title="Maps" />
          </div>
        </TabPanel>

        <TabPanel>
          <div className="iframe-container">
            <iframe
              src="https://gis.police.gov.rw/portal/apps/webappviewer/index.html?id=c0c6f8fd88784e499714327cd04f0944"
              title="App for Edit"
            />
          </div>
        </TabPanel>

        <TabPanel>
          <div className="iframe-container">
            <iframe
              src="https://survey123.arcgis.com/share/8d894a6097084809a69a7b55b90903e8?portalUrl=https://gis.police.gov.rw/portal"
              title="Form"
            />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Incident;
