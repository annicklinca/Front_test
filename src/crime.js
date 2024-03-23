import React from "react";
import Header from "./header";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Crime = () => {
  const username = localStorage.getItem("username");
  let iframeUrl;

  const provinceUsers = [
    { username: "Operation01_Eastern", province: "East" },
    { username: "Operation01_Western", province: "West" },
    { username: "Operation01_Northern", province: "North" },
    { username: "Operation01_Southern", province: "South" },
    { username: "Operation01_Central", province: "Kigali" },
    { username: "Operation02_Central", province: "Kigali" },
    { username: "Operation02_Southern", province: "South" },
    { username: "Operation02_Northern", province: "North" },
    { username: "Operation02_Western", province: "West" },
    { username: "Operation02_Eastern", province: "East" },
    { username: "PA_Central", province: "Kigali" },
    { username: "PA_Eastern", province: "East" },
    { username: "PA_Central", province: "Kigali" },
    { username: "PA_Northern", province: "North" },
    { username: "PA_Southern", province: "South" },
    { username: "PA_Western", province: "West" },
    { username: "RPC_Central", province: "Kigali" },
    { username: "RPC_Eastern", province: "East" },
    { username: "RPC_Northern", province: "North" },
    { username: "RPC_Southern", province: "South" },
    { username: "RPC_Western", province: "West" },
  ];
  const districtUsers = [
    { username: "DPC_Bugesera", district: "Bugesera" },
    { username: "DPC_Burera", district: "Burera" },
    { username: "DPC_Gakenke", district: "Gakenke" },
    { username: "DPC_Gasabo", district: "Gasabo" },
    { username: "DPC_Gatsibo", district: "Gatsibo" },
    { username: "DPC_Gicumbi", district: "Gicumbi" },
    { username: "DPC_Gisagara", district: "Gisagara" },
    { username: "DPC_Huye", district: "Huye" },
    { username: "DPC_Kamonyi", district: "Kamonyi" },
    { username: "DPC_Karongi", district: "Karongi" },
    { username: "DPC_Kayonza", district: "Kayonza" },
    { username: "DPC_Kicukiro", district: "Kicukiro" },
    { username: "DPC_Kirehe", district: "Kirehe" },
    { username: "DPC_Muhanga", district: "Muhanga" },
    { username: "DPC_Musanze", district: "Musanze" },
    { username: "DPC_Nyagatare", district: "Nyagatare" },
    { username: "DPC_Ngoma", district: "Ngoma" },
    { username: "DPC_Ngororero", district: "Ngororero" },
    { username: "DPC_Nyabihu", district: "Nyabihu" },
    { username: "DPC_Nyamagabe", district: "Nyamagabe" },
    { username: "DPC_Nyamasheke", district: "Nyamasheke" },
    { username: "DPC_Nyanza", district: "Nyanza" },
    { username: "DPC_Nyarugenge", district: "Nyarugenge" },
    { username: "DPC_Nyaruguru", district: "Nyaruguru" },
    { username: "DPC_Rubavu", district: "Rubavu" },
    { username: "DPC_Ruhango", district: "Ruhango" },
    { username: "DPC_Rulindo", district: "Rulindo" },
    { username: "DPC_Rusizi", district: "Rusizi" },
    { username: "DPC_Rutsiro", district: "Rutsiro" },
    { username: "DPC_Rwamagana", district: "Rwamagana" },
    { username: "Operation_Bugesera", district: "Bugesera" },
    { username: "Operation_Burera", district: "Burera" },
    { username: "Operation_Gakenke", district: "Gakenke" },
    { username: "Operation_Gasabo", district: "Gasabo" },
    { username: "Operation_Gatsibo", district: "Gatsibo" },
    { username: "Operation_Gicumbi", district: "Gicumbi" },
    { username: "Operation_Gisagara", district: "Gisagara" },
    { username: "Operation_Huye", district: "Huye" },
    { username: "Operation_Kamonyi", district: "Kamonyi" },
    { username: "Operation_Karongi", district: "Karongi" },
    { username: "Operation_Kayonza", district: "Kayonza" },
    { username: "Operation_Kicukiro", district: "Kicukiro" },
    { username: "Operation_Kirehe", district: "Kirehe" },
    { username: "Operation_Muhanga", district: "Muhanga" },
    { username: "Operation_Musanze", district: "Musanze" },
    { username: "Operation_Ngoma", district: "Ngoma" },
    { username: "Operation_Ngororero", district: "Ngororero" },
    { username: "Operation_Nyabihu", district: "Nyabihu" },
    { username: "Operation_Nyagatare", district: "Nyagatare" },
    { username: "Operation_Nyamagabe", district: "Nyamagabe" },
    { username: "Operation_Nyamasheke", district: "Nyamasheke" },
    { username: "Operation_Nyanza", district: "Nyanza" },
    { username: "Operation_Nyarugenge", district: "Nyarugenge" },
    { username: "Operation_Nyaruguru", district: "Nyaruguru" },
    { username: "Operation_Rubavu", district: "Rubavu" },
    { username: "Operation_Ruhango", district: "Ruhango" },
    { username: "Operation_Rulindo", district: "Rulindo" },
    { username: "Operation_Rusizi", district: "Rusizi" },
    { username: "Operation_Rutsiro", district: "Rutsiro" },
    { username: "Operation_Rwamagana", district: "Rwamagana" },
  ];
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
  return (
    <div>
      <Header currentPage="Crime" />
      <Tabs>
        <div className="">
          <TabList className="bg-blue-900 border-none font-semibold p-2 text-white">
            <Tab>Dashboard</Tab>
            <Tab>Maps</Tab>
            <Tab>Forms</Tab>
          </TabList>
        </div>
        <TabPanel>
          {/* Dashboard */}
          <iframe
            src={iframeUrl}
            title="Tab 1 Content"
            style={{ width: "100%", height: "1150px" }}
          ></iframe>
        </TabPanel>

        <TabPanel>
          <iframe
            src="https://gis.police.gov.rw/portal/apps/dashboards/cdab4aa198e94c039f910a6e8293ae15?portalUrl=https://gis.police.gov.rw/portal"
            title="Tab 1 Content"
            style={{ width: "100%", height: "1150px" }}
          ></iframe>
          {/* Maps*/}
        </TabPanel>

        <TabPanel>
          <iframe
            src="https://survey123.arcgis.com/share/7aaafe2d2c7b480982cd997ba5858d43?portalUrl=https://gis.police.gov.rw/portal"
            title="Tab 1 Content"
            style={{ width: "100%", height: "1150px" }}
          ></iframe>
          {/* Forms */}
        </TabPanel>
      </Tabs>
      {/* Your Crime page content goes here */}
    </div>
  );
};

export default Crime;
