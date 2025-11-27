import React, { useState } from "react";
import "react-tabs/style/react-tabs.css";
import logo from "./RNP_LOGO.png";
import "./iframe.css";
import { loadModules } from "esri-loader";
import { toast, ToastContainer } from "react-toastify";
import {
  provinceUsers,
  districtUsers,
  trafficUser,
  asocUser,
  flashUser,
  topoUser,
} from "./users";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

const Header = ({ currentPage }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const username = localStorage.getItem("username");
  const matchedProvinceUser = provinceUsers.find(
    (user) => user.username === username
  );
  const matchedDistrictUser = districtUsers.find(
    (user) => user.username === username
  );
  const matchtraffic = trafficUser.find((user) => user.username === username);
  const matchAsoc = asocUser.find((user) => user.username === username);

  const isAnalyticsVisible =
    !matchtraffic && !(matchedProvinceUser || matchedDistrictUser);
  const trafficVisible = !matchtraffic;
  const asocVisible = !matchAsoc;

  const matchFlash = flashUser.find((user) => user.username === username);
  const matchTopo = topoUser.find((user) => user.username === username);

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
      <header className="bg-gray-200">
        <nav
          className="mx-2 flex max-w-16xl items-center justify-between p-2.5 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#@" className="flex items-center">
              <img className="w-12" src={logo} alt="RNP Logo" />
              <span className="font-bold text-blue-900 px-2">IMS</span>
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
            {asocVisible && (
              <a
                href="/Accident"
                className={`text-sm font-bold leading-6 text-blue-800 hover:border-b-2 pt-2 ${
                  currentPage === "Accident" ? "border-b-2 border-blue-800" : ""
                }`}
              >
                Accidents
              </a>
            )}
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
            {trafficVisible && (
              <a
                href="/Operations"
                className={`text-sm font-bold leading-6 text-blue-800 hover:border-b-2 pt-2 ${
                  currentPage === "Operations"
                    ? "border-b-2 border-blue-800"
                    : ""
                }`}
              >
                Operations
              </a>
            )}
            {matchFlash && (
              <a
                href="/Flash"
                className={`text-sm font-bold leading-6 text-blue-800 hover:border-b-2 pt-2 ${
                  currentPage === "Flash" ? "border-b-2 border-blue-800" : ""
                }`}
              >
                Flash Report
              </a>
            )}
            {matchFlash && (
              <a
                href="/Map"
                className={`text-sm font-bold leading-6 text-blue-800 hover:border-b-2 pt-2 ${
                  currentPage === "Map" ? "border-b-2 border-blue-800" : ""
                }`}
              >
                Deployment Map
              </a>
            )}
            {matchTopo && (
              <a
                href="/Experience"
                className={`text-sm font-bold leading-6 text-blue-800 hover:border-b-2 pt-2 ${
                  currentPage === "Experience"
                    ? "border-b-2 border-blue-800"
                    : ""
                }`}
              >
                Topographic Map
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
          <div className="lg:hidden flex items-center">
            <Menu as="div" className="relative inline-block text-left">
              <Menu.Button
                onClick={() => setMenuOpen(!menuOpen)}
                className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-blue-800"
              >
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Menu.Button>
              <Transition
                show={menuOpen}
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {trafficVisible && (
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/Crime"
                            className={`${
                              active ? "bg-gray-100" : ""
                            } text-gray-700 block px-4 py-2 text-sm`}
                          >
                            Crimes
                          </a>
                        )}
                      </Menu.Item>
                    )}
                    {trafficVisible && (
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/Incident"
                            className={`${
                              active ? "bg-gray-100" : ""
                            } text-gray-700 block px-4 py-2 text-sm`}
                          >
                            Incidents
                          </a>
                        )}
                      </Menu.Item>
                    )}
                    {asocVisible && (
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/Accident"
                            className={`${
                              active ? "bg-gray-100" : ""
                            } text-gray-700 block px-4 py-2 text-sm`}
                          >
                            Accidents
                          </a>
                        )}
                      </Menu.Item>
                    )}
                    {isAnalyticsVisible && (
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/Analytics"
                            className={`${
                              active ? "bg-gray-100" : ""
                            } text-gray-700 block px-4 py-2 text-sm`}
                          >
                            Analytics
                          </a>
                        )}
                      </Menu.Item>
                    )}
                    {trafficVisible && asocVisible && (
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/Operations"
                            className={`${
                              active ? "bg-gray-100" : ""
                            } text-gray-700 block px-4 py-2 text-sm`}
                          >
                            Operations
                          </a>
                        )}
                      </Menu.Item>
                    )}
                    {matchFlash && (
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/Flash"
                            className={`${
                              active ? "bg-gray-100" : ""
                            } text-gray-700 block px-4 py-2 text-sm`}
                          >
                            Flash
                          </a>
                        )}
                      </Menu.Item>
                    )}
                    {matchFlash && (
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/Map"
                            className={`${
                              active ? "bg-gray-100" : ""
                            } text-gray-700 block px-4 py-2 text-sm`}
                          >
                            Deployment Map
                          </a>
                        )}
                      </Menu.Item>
                    )}
                    {matchFlash && (
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/MExperienceap"
                            className={`${
                              active ? "bg-gray-100" : ""
                            } text-gray-700 block px-4 py-2 text-sm`}
                          >
                            Experience Map
                          </a>
                        )}
                      </Menu.Item>
                    )}
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/"
                          onClick={handleSignout}
                          className={`${
                            active ? "bg-gray-100" : ""
                          } text-gray-700 block px-4 py-2 text-sm`}
                        >
                          Logout
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
