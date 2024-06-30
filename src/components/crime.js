import React, { useEffect, useState } from "react";
import Header from "../header";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { provinceUsers, districtUsers, asocUser } from "../users";

const Crime = () => {
  const username = localStorage.getItem("username");
  const token = sessionStorage.getItem("token");
  console.log(token);

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
      East: `https://gis.police.gov.rw/portal/apps/webappviewer/index.html?id=bd54a3cc30874d5a9cc252194f1b3913`,
      Kigali: `https://gis.police.gov.rw/portal/apps/webappviewer/index.html?id=8bdf90e9ac264b0db316ffd61536f5ae`,
      West: `https://gis.police.gov.rw/portal/apps/webappviewer/index.html?id=714909f91a0047d595bc22b8a9aa5809`,
      South: `https://gis.police.gov.rw/portal/apps/webappviewer/index.html?id=561c0f7c63a34c259f52a595b14d8e52`,
      North: `https://gis.police.gov.rw/portal/apps/webappviewer/index.html?id=4a06a24790aa4eedaf2a1ef7d011dfe1`,
    };

    if (username) {
      if (matchedProvinceUser) {
        setDashboardUrl(
          `https://gis.police.gov.rw/portal/apps/dashboards/a78ce57cc353476f9285c3ea1ba302dd#province=${matchedProvinceUser.province}`
        );
        setMapUrl(
          `https://gis.police.gov.rw/portal/apps/dashboards/cdab4aa198e94c039f910a6e8293ae15#province=${matchedProvinceUser.province}`
        );
        setAppForEditUrl(provinceUrls[matchedProvinceUser.province]);
      } else if (matchedDistrictUser) {
        setDashboardUrl(
          `https://gis.police.gov.rw/portal/apps/dashboards/a78ce57cc353476f9285c3ea1ba302dd#district=${matchedDistrictUser.district}`
        );
        setMapUrl(
          `https://gis.police.gov.rw/portal/apps/dashboards/cdab4aa198e94c039f910a6e8293ae15#district=${matchedDistrictUser.district}`
        );
      } else {
        setDashboardUrl(
          `https://gis.police.gov.rw/portal/apps/dashboards/a78ce57cc353476f9285c3ea1ba302dd`
        );
        setMapUrl(
          `https://gis.police.gov.rw/portal/apps/dashboards/cdab4aa198e94c039f910a6e8293ae15`
        );
        setAppForEditUrl(
          `https://gis.police.gov.rw/portal/apps/webappviewer/index.html?id=eff58e3f9d0742148574b12d5d8fd24b`
        );
      }
    }
  }, [username]);
  const isTabVisible = !districtUsers.find(
    (user) => user.username === username
  );
  const isTabVisibleP = !provinceUsers.find(
    (user) => user.username === username
  );
  const isTabvisibleA = !asocUser.find((user) => user.username === username);

  return (
    <div className="bg-gray-200">
      <Header currentPage="Crime" />
      <Tabs>
        <div className="">
          <TabList className="bg-blue-900 border-none font-semibold p-2 text-white">
            <Tab>Dashboard</Tab>
            {isTabVisible && <Tab>Compare Maps</Tab>}
            {isTabVisible && isTabVisibleP && isTabvisibleA && (
              <Tab>Time Profile Maps</Tab>
            )}
            {isTabVisible && isTabvisibleA && <Tab>App for Edit</Tab>}
            {isTabvisibleA && <Tab>Form</Tab>}
          </TabList>
        </div>
        <TabPanel>
          {/* Dashboard */}
          <div className="iframe-container">
            <iframe src={dashboardUrl} title="Dashboard"></iframe>
          </div>
        </TabPanel>

        {isTabVisible && (
          <TabPanel>
            <div className="iframe-container">
              <iframe src={mapUrl} title="Maps"></iframe>
            </div>
            {/* Maps*/}
          </TabPanel>
        )}

        {isTabVisible && isTabVisibleP && (
          <TabPanel>
            <div className="iframe-container">
              <iframe
                src={`https://gis.police.gov.rw/portal/apps/webappviewer/index.html?id=da9b404fa8ee4505b1c5acca51177f74`}
                title="Time profile map"
              ></iframe>
            </div>
            {/* Time profile map */}
          </TabPanel>
        )}

        {isTabVisible && (
          <TabPanel>
            <div className="iframe-container">
              <iframe src={appForEditUrl} title="App for Edit"></iframe>
            </div>
            {/* Apps for Edit*/}
          </TabPanel>
        )}

        <TabPanel>
          <div className="iframe-container">
            <iframe
              src={`https://survey123.arcgis.com/share/7aaafe2d2c7b480982cd997ba5858d43?portalUrl=https://gis.police.gov.rw/portal`}
              title="Form"
            ></iframe>
          </div>
          {/* Forms */}
        </TabPanel>
      </Tabs>
      {/* Your Crime page content goes here */}
    </div>
  );
};

export default Crime;
