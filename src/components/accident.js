import React, { useState, useEffect } from "react";
import Header from "../header";
import { provinceUsers, districtUsers, presUser } from "../users";

const Accident = () => {
  const username = localStorage.getItem("username");

  const [dashboardUrl, setDashboardUrl] = useState("");
  const [routeUrl, setRouteUrl] = useState("");
  const [mapUrl, setMapUrl] = useState("");
  const [appForEditUrl, setAppForEditUrl] = useState("");
  const [activeSubTab, setActiveSubTab] = useState("dashboard");

  const isTabVisible = !districtUsers.find((u) => u.username === username);
  const istTabVisibleP = !provinceUsers.find((u) => u.username === username);

  useEffect(() => { document.title = "Road Safety Incidents"; }, []);

  useEffect(() => {
    const matchedProvinceUser = provinceUsers.find(
      (user) => user.username === username
    );
    const matchedDistrictUser = districtUsers.find(
      (user) => user.username === username
    );
    const presentUser = presUser.find((user) => user.username === username);

    const getDynamicDateRange = () => {
      const today = new Date();
      const firstDayOfThreeMonthsAgo = new Date(
        today.getFullYear(),
        today.getMonth() - 2,
        1
      );
      const lastDayOfCurrentMonth = new Date(
        today.getFullYear(),
        today.getMonth() + 1,
        0
      );
      const fmt = (d) =>
        `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
      return {
        startDate: fmt(firstDayOfThreeMonthsAgo),
        endDate: fmt(lastDayOfCurrentMonth),
      };
    };
    const { startDate, endDate } = getDynamicDateRange();

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
        `https://gis.police.gov.rw/portal/apps/dashboards/5e1d98f47ea6470d991cc75d61cc4f0b#province=${matchedProvinceUser.province}`
      );
      setMapUrl(
        `https://gis.police.gov.rw/portal/apps/dashboards/abd3d14cc9574d84bce461c1c75f6398#province=${matchedProvinceUser.province}`
      );
      setAppForEditUrl(provinceUrls[matchedProvinceUser.province]);
    } else if (matchedDistrictUser) {
      setDashboardUrl(
        `https://gis.police.gov.rw/portal/apps/dashboards/5e1d98f47ea6470d991cc75d61cc4f0b#district=${matchedDistrictUser.district}`
      );
      setMapUrl(
        `https://gis.police.gov.rw/portal/apps/dashboards/abd3d14cc9574d84bce461c1c75f6398#district=${matchedDistrictUser.district}`
      );
    } else if (presentUser) {
      setDashboardUrl(
        `https://gis.police.gov.rw/portal/apps/dashboards/000332f99b6440aa8e844fb889e278d3#date=${startDate},${endDate}`
      );
      setMapUrl(
        `https://gis.police.gov.rw/portal/apps/dashboards/abd3d14cc9574d84bce461c1c75f6398`
      );
      setAppForEditUrl(
        "https://gis.police.gov.rw/portal/apps/webappviewer/index.html?id=8b1ad037d88f4d08b047204e5d4ab86d"
      );
      setRouteUrl(
        "https://gis.police.gov.rw/portal/apps/experiencebuilder/experience/?id=862e6103530c405da3c5b50c74d13e7a&page=2D-View"
      );
    } else {
      setDashboardUrl(
        "https://gis.police.gov.rw/portal/apps/dashboards/5e1d98f47ea6470d991cc75d61cc4f0b"
      );
      setMapUrl(
        `https://gis.police.gov.rw/portal/apps/dashboards/abd3d14cc9574d84bce461c1c75f6398`
      );
      setRouteUrl(
        "https://gis.police.gov.rw/portal/apps/experiencebuilder/experience/?id=862e6103530c405da3c5b50c74d13e7a&page=2D-View"
      );
      setAppForEditUrl(
        "https://gis.police.gov.rw/portal/apps/webappviewer/index.html?id=8b1ad037d88f4d08b047204e5d4ab86d"
      );
    }
  }, [username]);

  const subTabs = [
    { key: "dashboard", label: "Dashboard" },
    ...(isTabVisible ? [{ key: "maps", label: "Maps" }] : []),
    ...(isTabVisible && istTabVisibleP
      ? [{ key: "timeprofilemaps", label: "Time Profile Maps" }]
      : []),
    ...(isTabVisible && istTabVisibleP
      ? [{ key: "routeplanner", label: "Route Safe Planner" }]
      : []),
    ...(isTabVisible && istTabVisibleP
      ? [{ key: "apforedit", label: "App for Edit" }]
      : []),
    { key: "form", label: "Form" },
  ];

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-gray-200">
      <Header
        currentPage="Accident"
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
        {activeSubTab === "timeprofilemaps" && isTabVisible && istTabVisibleP && (
          <iframe
            src="https://gis.police.gov.rw/portal/apps/webappviewer/index.html?id=bad79599c4064e219db792d16e20dc08"
            title="Time Profile Maps"
          />
        )}
        {activeSubTab === "routeplanner" && isTabVisible && istTabVisibleP && (
          <iframe src={routeUrl} title="Route Safe Planner" />
        )}
        {activeSubTab === "apforedit" && isTabVisible && istTabVisibleP && (
          <iframe src={appForEditUrl} title="App for Edit" />
        )}
        {activeSubTab === "form" && (
          <iframe
            src="https://survey123.arcgis.com/share/0e9020ab71114bdb98a8a9f2ae83e186?portalUrl=https://gis.police.gov.rw/portal"
            title="Form"
          />
        )}
      </div>
    </div>
  );
};

export default Accident;
