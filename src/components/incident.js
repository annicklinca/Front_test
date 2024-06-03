import React from "react";
import Header from "../header";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { provinceUsers, districtUsers } from "../users";

const Incident = () => {
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
    iframeUrl = `https://gis.police.gov.rw/portal/apps/dashboards/b8e3f4d5811f4c7c849efd24b805c310?portalUrl=https://gis.police.gov.rw/portal#province=${matchedProvinceUser.province}`;

    console.log("Province User:", matchedProvinceUser.province);
  } else if (matchedDistrictUser) {
    iframeUrl = `https://gis.police.gov.rw/portal/apps/dashboards/b8e3f4d5811f4c7c849efd24b805c310?portalUrl=https://gis.police.gov.rw/portal#district=${matchedDistrictUser.district}`;
    console.log("District User:", matchedDistrictUser.district);
  } else {
    iframeUrl =
      "https://gis.police.gov.rw/portal/apps/dashboards/b8e3f4d5811f4c7c849efd24b805c310?portalUrl=https://gis.police.gov.rw/portal";
  }
  const iframe = document.getElementById("dashboardIframe");
  if (iframe) {
    iframe.src = iframeUrl;
  }
  const isTabVisible = !matchedDistrictUser;

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
            <iframe src={iframeUrl} title="Tab 1 Content"></iframe>
          </div>
          {/* Add content for Tab 1 */}
        </TabPanel>

        <TabPanel>
          <div className="iframe-container">
            <iframe
              src="https://gis.police.gov.rw/portal/apps/dashboards/021c48cb5a17407c887df2e85056a4d9?portalUrl=https://gis.police.gov.rw/portal"
              title="Tab 1 Content"
            ></iframe>
          </div>
          {/* Add content for Tab 2 */}
        </TabPanel>

        <TabPanel>
          <div className="iframe-container">
            <iframe
              src="https://gis.police.gov.rw/portal/apps/webappviewer/index.html?id=c0c6f8fd88784e499714327cd04f0944"
              title="Tab 1 Content"
            ></iframe>
          </div>
          {/* Maps*/}
        </TabPanel>

        <TabPanel>
          <div className="iframe-container">
            <iframe
              src="https://survey123.arcgis.com/share/8d894a6097084809a69a7b55b90903e8?portalUrl=https://gis.police.gov.rw/portal"
              title="Tab 1 Content"
            ></iframe>
          </div>
          {/* Add content for Tab 3 */}
        </TabPanel>
      </Tabs>
      {/* Your Crime page content goes here */}
    </div>
  );
};

export default Incident;
