import React, { useEffect, useState } from "react";
import Header from "../header";
import { provinceUsers, districtUsers, presUser } from "../users";

const Crime = () => {
  const username = localStorage.getItem("username");
  const token = sessionStorage.getItem("token");

  const [dashboardUrl, setDashboardUrl] = useState("");
  const [mapUrl, setMapUrl] = useState("");
  const [appForEditUrl, setAppForEditUrl] = useState("");
  const [activeSubTab, setActiveSubTab] = useState("dashboard");

  const isTabVisible = !districtUsers.find((u) => u.username === username);
  const isTabVisibleP = !provinceUsers.find((u) => u.username === username);

  useEffect(() => {
    const matchedProvinceUser = provinceUsers.find(
      (user) => user.username === username,
    );
    const matchedDistrictUser = districtUsers.find(
      (user) => user.username === username,
    );
    const provinceUrls = {
      East: `https://gis.police.gov.rw/portal/apps/webappviewer/index.html?id=bd54a3cc30874d5a9cc252194f1b3913`,
      Kigali: `https://gis.police.gov.rw/portal/apps/webappviewer/index.html?id=8bdf90e9ac264b0db316ffd61536f5ae`,
      West: `https://gis.police.gov.rw/portal/apps/webappviewer/index.html?id=714909f91a0047d595bc22b8a9aa5809`,
      South: `https://gis.police.gov.rw/portal/apps/webappviewer/index.html?id=561c0f7c63a34c259f52a595b14d8e52`,
      North: `https://gis.police.gov.rw/portal/apps/webappviewer/index.html?id=4a06a24790aa4eedaf2a1ef7d011dfe1`,
    };

    const getDynamicDateRange = () => {
      const today = new Date();
      const firstDayOfThreeMonthsAgo = new Date(
        today.getFullYear(),
        today.getMonth() - 2,
        1,
      );
      const lastDayOfCurrentMonth = new Date(
        today.getFullYear(),
        today.getMonth() + 1,
        0,
      );
      const fmt = (d) =>
        `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
      return {
        startDate: fmt(firstDayOfThreeMonthsAgo),
        endDate: fmt(lastDayOfCurrentMonth),
      };
    };
    const { startDate, endDate } = getDynamicDateRange();
    const presentUser = presUser.find((user) => user.username === username);

    if (username) {
      if (matchedProvinceUser) {
        setDashboardUrl(
          `https://gis.police.gov.rw/portal/apps/dashboards/b6d9b921ba3145f78096e591f45ceb16#province=${matchedProvinceUser.province}`,
        );
        setMapUrl(
          `https://gis.police.gov.rw/portal/apps/dashboards/cdab4aa198e94c039f910a6e8293ae15#province=${matchedProvinceUser.province}`,
        );
        setAppForEditUrl(provinceUrls[matchedProvinceUser.province]);
      } else if (matchedDistrictUser) {
        setDashboardUrl(
          `https://gis.police.gov.rw/portal/apps/dashboards/b6d9b921ba3145f78096e591f45ceb16#district=${matchedDistrictUser.district}`,
        );
        setMapUrl(
          `https://gis.police.gov.rw/portal/apps/dashboards/cdab4aa198e94c039f910a6e8293ae15#district=${matchedDistrictUser.district}`,
        );
      } else if (presentUser) {
        setDashboardUrl(
          `https://gis.police.gov.rw/portal/apps/dashboards/4440fd780fe54ace8cd018290b5867aa#date=${startDate},${endDate}`,
        );
        setMapUrl(
          `https://gis.police.gov.rw/portal/apps/dashboards/cdab4aa198e94c039f910a6e8293ae15`,
        );
        setAppForEditUrl(
          `https://gis.police.gov.rw/portal/apps/webappviewer/index.html?id=eff58e3f9d0742148574b12d5d8fd24b`,
        );
      } else {
        setDashboardUrl(
          `https://gis.police.gov.rw/portal/apps/dashboards/b6d9b921ba3145f78096e591f45ceb16`,
        );
        setMapUrl(
          `https://gis.police.gov.rw/portal/apps/dashboards/cdab4aa198e94c039f910a6e8293ae15`,
        );
        setAppForEditUrl(
          `https://gis.police.gov.rw/portal/apps/webappviewer/index.html?id=eff58e3f9d0742148574b12d5d8fd24b`,
        );
      }
    }
  }, [username, token]);

  const subTabs = [
    { key: "dashboard", label: "Dashboard" },
    ...(isTabVisible ? [{ key: "maps", label: "Maps" }] : []),
    ...(isTabVisible && isTabVisibleP
      ? [{ key: "timeprofilemaps", label: "Time Profile Maps" }]
      : []),
    ...(isTabVisible ? [{ key: "apforedit", label: "App for Edit" }] : []),
    { key: "form", label: "Form" },
  ];

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-gray-200">
      <Header
        currentPage="Crime"
        subTabs={subTabs}
        activeSubTab={activeSubTab}
        onSubTabChange={setActiveSubTab}
      />

      <div className="iframe-container">
        {activeSubTab === "dashboard" && (
          <iframe src={dashboardUrl} title="Dashboard" />
        )}
        {activeSubTab === "maps" && isTabVisible && (
          <iframe src={mapUrl} title="Maps" />
        )}
        {activeSubTab === "timeprofilemaps" &&
          isTabVisible &&
          isTabVisibleP && (
            <iframe
              src="https://gis.police.gov.rw/portal/apps/webappviewer/index.html?id=da9b404fa8ee4505b1c5acca51177f74"
              title="Time Profile Maps"
            />
          )}
        {activeSubTab === "apforedit" && isTabVisible && (
          <iframe src={appForEditUrl} title="App for Edit" />
        )}
        {activeSubTab === "form" && (
          <iframe
            src="https://survey123.arcgis.com/share/7aaafe2d2c7b480982cd997ba5858d43?portalUrl=https://gis.police.gov.rw/portal"
            title="Form"
          />
        )}
      </div>
    </div>
  );
};

export default Crime;
