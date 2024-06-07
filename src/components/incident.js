import React, { useEffect, useState } from "react";
import Header from "../header";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { provinceUsers, districtUsers } from "../users";

const Incident = () => {
  const username = localStorage.getItem("username");
  const [dashboardUrl, setDashboardUrl] = useState("");
  const [mapUrl, setMapUrl] = useState("");
  const [appForEditUrl, setAppForEditUrl] = useState("");

  useEffect(() => {
    const matchedProvinceUser = provinceUsers.find(
      (user) => user.username === username
    );
    const matchedDistrictUser = districtUsers.find(
      (user) => user.username === username
    );
    const provinceUrls = {
      East: "https://gis.police.gov.rw/portal/apps/webappviewer/index.html?id=59d3e301e1de4f4295cf12efddecc138",
      Kigali:
        "https://gis.police.gov.rw/portal/apps/webappviewer/index.html?id=2771fa9dc5754fd7a14872d76371d7cc",
      West: "https://gis.police.gov.rw/portal/apps/webappviewer/index.html?id=9f9e28fc67b7418a83d179a61bdfb480",
      South:
        "https://gis.police.gov.rw/portal/apps/webappviewer/index.html?id=292d872b94a64ec9aec55330775be44a",
      North:
        "https://gis.police.gov.rw/portal/apps/webappviewer/index.html?id=774ba0b8fa6442ccb972398f993751ce",
    };

    if (matchedProvinceUser) {
      setDashboardUrl(
        `https://gis.police.gov.rw/portal/apps/dashboards/b8e3f4d5811f4c7c849efd24b805c310#province=${matchedProvinceUser.province}`
      );
      setMapUrl(
        `https://gis.police.gov.rw/portal/apps/dashboards/021c48cb5a17407c887df2e85056a4d9#province=${matchedProvinceUser.province}`
      );
      setAppForEditUrl(provinceUrls[matchedProvinceUser.province]);
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
      setAppForEditUrl(
        "https://gis.police.gov.rw/portal/apps/webappviewer/index.html?id=a29ce46d28e341f6897824146086c6f3"
      );
    }
  }, [username]);

  const isTabVisible = !districtUsers.find(
    (user) => user.username === username
  );
  const isTabVisibleP = !provinceUsers.find(
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
            {isTabVisible && isTabVisibleP && <Tab>Time Profile Maps</Tab>}
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
            <iframe src={appForEditUrl} title="App for Edit" />
          </div>
        </TabPanel>

        <TabPanel>
          <div className="iframe-container">
            <iframe
              src="https://gis.police.gov.rw/portal/apps/webappviewer/index.html?id=0dc78cf4353343d3816b1603e6337adc"
              title="Time Profile Maps"
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
