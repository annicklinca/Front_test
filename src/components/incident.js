import React, { useEffect, useState } from "react";
import Header from "../header";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { provinceUsers, districtUsers, asocUser, presUser } from "../users";

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

    const presentUser = presUser.find((user) => user.username === username);
    // Helper function to get dynamic dates
    const getDynamicDateRange = () => {
      const today = new Date();
      // First day of the month three months ago
      const firstDayOfThreeMonthsAgo = new Date(
        today.getFullYear(),
        today.getMonth() - 2,
        1
      );
      // Last day of the current month
      const lastDayOfCurrentMonth = new Date(
        today.getFullYear(),
        today.getMonth() + 1,
        0
      );

      const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
      };

      return {
        startDate: formatDate(firstDayOfThreeMonthsAgo),
        endDate: formatDate(lastDayOfCurrentMonth),
      };
    };
    const { startDate, endDate } = getDynamicDateRange();

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
        `https://gis.police.gov.rw/portal/apps/dashboards/9f89e54289934751b2f630179bd7045e#province=${matchedProvinceUser.province}`
      );
      setMapUrl(
        `https://gis.police.gov.rw/portal/apps/dashboards/021c48cb5a17407c887df2e85056a4d9#province=${matchedProvinceUser.province}`
      );
      setAppForEditUrl(provinceUrls[matchedProvinceUser.province]);
    } else if (matchedDistrictUser) {
      setDashboardUrl(
        `https://gis.police.gov.rw/portal/apps/dashboards/9f89e54289934751b2f630179bd7045e#district=${matchedDistrictUser.district}`
      );
      setMapUrl(
        `https://gis.police.gov.rw/portal/apps/dashboards/021c48cb5a17407c887df2e85056a4d9#district=${matchedDistrictUser.district}`
      );
    } else if (presentUser) {
      setDashboardUrl(
        `https://gis.police.gov.rw/portal/apps/dashboards/5785126456a04c4eb748fdc6ee9d5b3c#date=${startDate},${endDate}`
      );
      setMapUrl(
        `https://gis.police.gov.rw/portal/apps/dashboards/021c48cb5a17407c887df2e85056a4d9`
      );
      setAppForEditUrl(
        "https://gis.police.gov.rw/portal/apps/webappviewer/index.html?id=a29ce46d28e341f6897824146086c6f3"
      );
    } else {
      setDashboardUrl(
        "https://gis.police.gov.rw/portal/apps/dashboards/9f89e54289934751b2f630179bd7045e"
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
  const isTabvisibleA = !asocUser.find((user) => user.username === username);

  return (
    <div className="bg-gray-200">
      <Header currentPage="Incident" />
      <Tabs>
        <div className="">
          <TabList className="bg-blue-900 border-none font-normal p-2 text-sm text-white">
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
          <div className="iframe-container">
            <iframe src={dashboardUrl} title="Dashboard" />
          </div>
        </TabPanel>

        {isTabVisible && (
          <TabPanel>
            <div className="iframe-container">
              <iframe src={mapUrl} title="Maps" />
            </div>
          </TabPanel>
        )}

        {isTabVisible && isTabVisibleP && (
          <TabPanel>
            <div className="iframe-container">
              <iframe
                src="https://gis.police.gov.rw/portal/apps/webappviewer/index.html?id=0dc78cf4353343d3816b1603e6337adc"
                title="Time Profile Maps"
              />
            </div>
          </TabPanel>
        )}

        {isTabVisible && (
          <TabPanel>
            <div className="iframe-container">
              <iframe src={appForEditUrl} title="App for Edit" />
            </div>
          </TabPanel>
        )}

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
