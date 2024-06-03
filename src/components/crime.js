import React from "react";
import Header from "../header";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { provinceUsers, districtUsers } from "../users";

const Crime = () => {
  const username = localStorage.getItem("username");
  let iframeUrl;

  const matchedProvinceUser = provinceUsers.find(
    (user) => user.username === username
  );
  const matchedDistrictUser = districtUsers.find(
    (user) => user.username === username
  );
  console.log(username);

  if (matchedProvinceUser) {
    iframeUrl = `https://gis.police.gov.rw/portal/apps/dashboards/df725a81ad1340a9b5c3cdf8a5c44c36#province=${matchedProvinceUser.province}`;

    console.log("Province User:", matchedProvinceUser.province);
  } else if (matchedDistrictUser) {
    iframeUrl = `https://gis.police.gov.rw/portal/apps/dashboards/df725a81ad1340a9b5c3cdf8a5c44c36#district=${matchedDistrictUser.district}`;
    console.log("District User:", matchedDistrictUser.district);
  } else {
    iframeUrl =
      "https://gis.police.gov.rw/portal/apps/dashboards/df725a81ad1340a9b5c3cdf8a5c44c36";
  }
  const iframe = document.getElementById("dashboardIframe");
  if (iframe) {
    iframe.src = iframeUrl;
  }
  const isTabVisible = !matchedDistrictUser;
  return (
    <div className="bg-gray-200">
      <Header currentPage="Crime" />
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
            <iframe src={iframeUrl} title="Tab 1 Content"></iframe>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="iframe-container">
            <iframe
              src="https://gis.police.gov.rw/portal/apps/dashboards/cdab4aa198e94c039f910a6e8293ae15"
              title="Tab 1 Content"
            ></iframe>
          </div>
          {/* Maps*/}
        </TabPanel>

        <TabPanel>
          <div className="iframe-container">
            <iframe
              src="https://gis.police.gov.rw/portal/apps/webappviewer/index.html?id=3a255429cb9a4b8685cd1d9b28a67a37"
              title="Tab 1 Content"
            ></iframe>
          </div>
          {/* Maps*/}
        </TabPanel>

        <TabPanel>
          <div className="iframe-container">
            <iframe
              src="https://survey123.arcgis.com/share/7aaafe2d2c7b480982cd997ba5858d43?portalUrl=https://gis.police.gov.rw/portal"
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

export default Crime;
