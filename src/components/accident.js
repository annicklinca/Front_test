import React, { useState, useEffect } from "react";
import Header from "../header";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { provinceUsers, districtUsers } from "../users";

const Accident = () => {
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
      East: "https://gis.police.gov.rw/portal/apps/webappviewer/index.html?id=3364258ab5744dcc88b62e119fd1e7d0",
      Kigali:
        "https://gis.police.gov.rw/portal/apps/webappviewer/index.html?id=a0957eb53100409d88bf0f36ebc2ebb5",
      West: "https://gis.police.gov.rw/portal/apps/webappviewer/index.html?id=5e9269da53b840e695d135fa5f75120f",
      South:
        "https://gis.police.gov.rw/portal/apps/webappviewer/index.html?id=730ead7642304d9eacd8b1b7627900dc",
      North:
        "https://gis.police.gov.rw/portal/apps/webappviewer/index.html?id=120022e24c4646f49cde12f75bb53bdd",
    };

    if (matchedProvinceUser) {
      setDashboardUrl(
        `https://gis.police.gov.rw/portal/apps/dashboards/77686968b49c449da3c861c25582f0ed#province=${matchedProvinceUser.province}`
      );
      setMapUrl(
        `https://gis.police.gov.rw/portal/apps/dashboards/abd3d14cc9574d84bce461c1c75f6398#province=${matchedProvinceUser.province}`
      );
      setAppForEditUrl(provinceUrls[matchedProvinceUser.province]);
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
        `https://gis.police.gov.rw/portal/apps/dashboards/abd3d14cc9574d84bce461c1c75f6398`
      );
      setAppForEditUrl(
        "https://gis.police.gov.rw/portal/apps/webappviewer/index.html?id=8b1ad037d88f4d08b047204e5d4ab86d"
      );
    }
  }, [username]);

  const isTabVisible = !districtUsers.find(
    (user) => user.username === username
  );
  const istTabVisibleP = !provinceUsers.find(
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
            {isTabVisible && istTabVisibleP && <Tab>App for Edit</Tab>}
            {isTabVisible && istTabVisibleP && <Tab>Time Profile Maps</Tab>}
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
            <iframe src={appForEditUrl} title="Tab 1 Content"></iframe>
          </div>
          {/*App for Edit*/}
        </TabPanel>

        <TabPanel>
          <div className="iframe-container">
            <iframe
              src="https://gis.police.gov.rw/portal/apps/webappviewer/index.html?id=bad79599c4064e219db792d16e20dc08"
              title="Time Profile Maps"
            ></iframe>
          </div>
          {/* Time Profile Maps */}
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
