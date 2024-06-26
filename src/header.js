import React from "react";
import "react-tabs/style/react-tabs.css";
import logo from "./RNP_LOGO.png";
import "./iframe.css";
import { provinceUsers, districtUsers, trafficUser } from "./users";
import { loadModules } from "esri-loader";
import { toast, ToastContainer } from "react-toastify";

const Header = ({ currentPage }) => {
  const username = localStorage.getItem("username");
  const matchedProvinceUser = provinceUsers.find(
    (user) => user.username === username
  );
  const matchedDistrictUser = districtUsers.find(
    (user) => user.username === username
  );
  const matchtraffic = trafficUser.find((user) => user.username === username);
  const isAnalyticsVisible =
    !matchtraffic && !(matchedProvinceUser || matchedDistrictUser);
  const trafficVisible = !matchtraffic;
  const handleSignout = () => {
    // Clear local storage
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("esriJSAPIOAuth");
    localStorage.clear();
    sessionStorage.clear();
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    }

    // Sign out from ArcGIS Enterprise and redirect to login page
    loadModules(["esri/identity/IdentityManager"])
      .then(([IdentityManager]) => {
        IdentityManager.destroyCredentials();
        toast.success("Successfully logged out!", { position: "top-center" });
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      })
      .catch((err) => {
        console.error("ArcGIS signout error: ", err);
        toast.error("Error during logout. Please try again.");
      });
  };

  return (
    <>
      {/* First header */}
      <header className="bg-gray-200">
        <nav
          className="mx-2 flex max-w-16xl items-center justify-between p-2.5 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#@" className="">
              <img className=" w-12 inline-block" src={logo} alt="" />
              <span className="font-bold text-blue-900 px-2 inline-block">
                Crimes and Incidents Management
              </span>
            </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-10 pl-8">
            {trafficVisible && (
              <a
                href="/Crime"
                className={`text-sm font-bold leading-6 text-blue-800 hover:border-b-2 pt-2 ${
                  currentPage === "Crime" ? "border-b-2 border-blue-800" : ""
                }`}
              >
                Crimes
              </a>
            )}
            {trafficVisible && (
              <a
                href="/Incident"
                className={`text-sm font-bold leading-6 text-blue-800 hover:border-b-2 pt-2 ${
                  currentPage === "Incident" ? "border-b-2 border-blue-800" : ""
                }`}
              >
                Incidents
              </a>
            )}
            <a
              href="/Accident"
              className={`text-sm font-bold leading-6 text-blue-800 hover:border-b-2 pt-2 ${
                currentPage === "Accident" ? "border-b-2 border-blue-800" : ""
              }`}
            >
              Accidents
            </a>
            {isAnalyticsVisible && (
              <a
                href="/Analytics"
                className={`text-sm font-bold leading-6 text-blue-800 hover:border-b-2 pt-2 ${
                  currentPage === "Analytics"
                    ? "border-b-2 border-blue-800"
                    : ""
                }`}
              >
                Analytics
              </a>
            )}
            <a
              href="/"
              onClick={handleSignout}
              className="text-sm font-bold leading-6 text-gray-100 bg-blue-800 p-2 px-8 rounded-md hover:bg-blue-500"
            >
              Logout
            </a>
            <ToastContainer />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
