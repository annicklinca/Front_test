import React, { useState } from "react";
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
import {
  Bars3Icon,
  XMarkIcon,
  ClipboardDocumentListIcon,
  ShieldExclamationIcon,
  ExclamationTriangleIcon,
  TruckIcon,
  ChartBarIcon,
  CogIcon,
  BoltIcon,
  MapIcon,
  GlobeAltIcon,
  ArrowRightOnRectangleIcon,
  UserCircleIcon,
  Squares2X2Icon,
  PencilSquareIcon,
  DocumentTextIcon,
  MapPinIcon,
  ChevronDownIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

/* ── Icon map for sub-tabs ─────────────────────────────── */
const SUB_ICONS = {
  dashboard: Squares2X2Icon,
  apforedit: PencilSquareIcon,
  form: DocumentTextIcon,
  routeplanner: MapPinIcon,
  maps: MapIcon,
  timeprofilemaps: ClockIcon,
};

const Header = ({
  currentPage,
  subTabs = [],
  activeSubTab = "",
  onSubTabChange = () => {},
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const username = localStorage.getItem("username");

  const matchedProvinceUser = provinceUsers.find(
    (user) => user.username === username,
  );
  const matchedDistrictUser = districtUsers.find(
    (user) => user.username === username,
  );
  const matchtraffic = trafficUser.find((user) => user.username === username);
  const matchAsoc = asocUser.find((user) => user.username === username);
  const matchFlash = flashUser.find((user) => user.username === username);
  const matchTopo = topoUser.find((user) => user.username === username);

  const isAnalyticsVisible =
    !matchtraffic && !(matchedProvinceUser || matchedDistrictUser);
  const trafficVisible = !matchtraffic;
  const asocVisible = !matchAsoc;

  const handleSignout = () => {
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
    loadModules(["esri/identity/IdentityManager"])
      .then(([IdentityManager]) => {
        IdentityManager.destroyCredentials();
        toast.success("Successfully logged out!", { position: "top-center" });
        setTimeout(() => {
          window.location.href = "/app";
        }, 2000);
      })
      .catch((err) => {
        console.error("ArcGIS signout error: ", err);
        toast.error("Error during logout. Please try again.");
      });
  };

  const navItems = [
    {
      show: !!matchFlash,
      href: "/app/allincidents",
      label: "All Incidents",
      page: "allincidents",
      Icon: ClipboardDocumentListIcon,
    },
    {
      show: trafficVisible,
      href: "/app/crime",
      label: "Crimes",
      page: "Crime",
      Icon: ShieldExclamationIcon,
    },
    {
      show: asocVisible,
      href: "/app/accident",
      label: "Accidents",
      page: "Accident",
      Icon: TruckIcon,
    },
    {
      show: trafficVisible,
      href: "/app/incident",
      label: "Other Incidents",
      page: "Incident",
      Icon: ExclamationTriangleIcon,
    },
    {
      show: isAnalyticsVisible,
      href: "/app/analytics",
      label: "Analytics",
      page: "Analytics",
      Icon: ChartBarIcon,
    },
    {
      show: trafficVisible,
      href: "/app/operations",
      label: "Operations",
      page: "Operations",
      Icon: CogIcon,
    },
    {
      show: !!matchFlash,
      href: "/app/flash",
      label: "Flash Report",
      page: "Flash",
      Icon: BoltIcon,
    },
    {
      show: !!matchFlash,
      href: "/app/map",
      label: "Deployment Map",
      page: "Map",
      Icon: MapIcon,
    },
    {
      show: !!matchTopo,
      href: "/app/experience",
      label: "Topographic Map",
      page: "Experience",
      Icon: GlobeAltIcon,
    },
  ].filter((item) => item.show);

  const hasSubTabs = subTabs.length > 0;

  return (
    <>
      {/* ── Top Header Bar ── */}
      <header className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 shadow-lg sticky top-0 z-40 border-b border-blue-700">
        <div className="relative flex items-center justify-between px-4 py-2.5">

          {/* Left — Logo + RNP badge */}
          <a href="#@" className="flex items-center gap-2.5 z-10">
            <img className="w-12 h-12 object-contain drop-shadow-md" src={logo} alt="RNP Logo" />
            <div className="flex flex-col leading-none">
              <span className="text-xs font-bold text-blue-300 tracking-widest uppercase">
                RNP
              </span>
              <span className="text-xs text-blue-400 font-medium tracking-wide">
                Rwanda National Police
              </span>
            </div>
          </a>

          {/* Center — Title */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center">
              <h1 className="text-xl font-extrabold text-white tracking-wide drop-shadow-sm">
                Incidents Management System
              </h1>
              <div className="mx-auto mt-0.5 h-0.5 w-2/3 rounded-full bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
            </div>
          </div>

          {/* Right — Menu toggle */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="z-10 p-2 rounded-lg text-white hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Open navigation"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>

        </div>
      </header>

      {/* ── Backdrop ── */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ── Right Sidebar ── */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 flex flex-col transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="bg-blue-900 px-5 py-4 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <img className="w-9 h-9 object-contain" src={logo} alt="RNP Logo" />
            <span className="text-white font-bold text-sm tracking-wide">
              Navigation
            </span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-blue-200 hover:text-white p-1 rounded transition-colors"
            aria-label="Close navigation"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>

        {/* User Info */}
        <div className="bg-blue-50 border-b border-blue-100 px-5 py-3 flex items-center gap-3 flex-shrink-0">
          <div className="bg-blue-900 rounded-full p-1.5">
            <UserCircleIcon className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="text-xs text-blue-400 font-medium uppercase tracking-wide">
              Logged in as
            </p>
            <p className="text-sm font-semibold text-blue-900 capitalize">
              {username || "User"}
            </p>
          </div>
        </div>

        {/* Nav Items */}
        <nav className="flex-1 overflow-y-auto py-3 px-3">
          <p className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-widest">
            Main Menu
          </p>
          <ul className="space-y-0.5">
            {navItems.map(({ href, label, page, Icon }) => {
              const isActive = currentPage === page;
              const isParentWithSubs = isActive && hasSubTabs;

              return (
                <li key={href}>
                  {/* Parent nav item */}
                  <a
                    href={href}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 ${
                      isActive
                        ? "bg-blue-900 text-white shadow-sm"
                        : "text-gray-700 hover:bg-blue-50 hover:text-blue-900"
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 flex-shrink-0 ${
                        isActive ? "text-white" : "text-blue-600"
                      }`}
                    />
                    <span className="flex-1">{label}</span>
                    {isParentWithSubs && (
                      <ChevronDownIcon className="h-4 w-4 text-blue-300" />
                    )}
                    {isActive && !isParentWithSubs && (
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-300" />
                    )}
                  </a>

                  {/* Sub-tabs — shown only for the active parent */}
                  {isParentWithSubs && (
                    <ul className="mt-0.5 ml-3 pl-4 border-l-2 border-blue-200 space-y-0.5 pb-1">
                      {subTabs.map((sub) => {
                        const SubIcon = SUB_ICONS[sub.key] || DocumentTextIcon;
                        const isSubActive = activeSubTab === sub.key;
                        return (
                          <li key={sub.key}>
                            <button
                              onClick={() => {
                                onSubTabChange(sub.key);
                                setSidebarOpen(false);
                              }}
                              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-all duration-150 ${
                                isSubActive
                                  ? "bg-blue-100 text-blue-900 font-semibold"
                                  : "text-gray-600 hover:bg-gray-100 hover:text-blue-800 font-medium"
                              }`}
                            >
                              <SubIcon
                                className={`h-4 w-4 flex-shrink-0 ${
                                  isSubActive
                                    ? "text-blue-700"
                                    : "text-gray-400"
                                }`}
                              />
                              <span>{sub.label}</span>
                              {isSubActive && (
                                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-600" />
                              )}
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Version */}
        <div className="px-5 py-2.5 flex items-center justify-between flex-shrink-0">
          <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-200 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block"></span>
            Version 2.0
          </span>
          <span className="text-gray-400 text-xs">IMS</span>
        </div>

        {/* Logout */}
        <div className="border-t border-gray-100 p-3 flex-shrink-0">
          <button
            onClick={() => {
              setSidebarOpen(false);
              handleSignout();
            }}
            className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-all duration-150"
          >
            <ArrowRightOnRectangleIcon className="h-5 w-5 flex-shrink-0" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      <ToastContainer />
    </>
  );
};

export default Header;
