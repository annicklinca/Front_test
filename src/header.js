import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import logo from './RNP_LOGO.png';

const Header = ({ currentPage }) => {
  return (
    <>
      {/* First header */}
      <header class="bg-gray-200">
        <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div class="flex lg:flex-1">
            <a href="#" class="-m-1.5 p-1.5">
              <img src={logo} className="w-10"/>
            </a>
          </div>
          <div class="flex lg:hidden">
            <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
              <span class="sr-only">Open main menu</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div class="hidden lg:flex lg:gap-x-10 pl-8">
            <a href="/Crime" class={`text-sm font-bold leading-6 text-blue-800 hover:border-b-2 pt-2 ${currentPage === 'Crime' ? 'border-b-2 border-blue-800' : ''}`}>Crime</a>
            <a href="/Incident" class={`text-sm font-bold leading-6 text-blue-800 hover:border-b-2 pt-2 ${currentPage === 'Incident' ? 'border-b-2 border-blue-800' : ''}`}>Incident</a>
            <a href="#" class={`text-sm font-bold leading-6 text-blue-800 hover:border-b-2 pt-2 ${currentPage === 'Road' ? 'border-b-2 border-blue-800' : ''}`}>Road</a>
            <a href="/Analytics" class={`text-sm font-bold leading-6 text-blue-800 hover:border-b-2 pt-2 ${currentPage === 'Analytics' ? 'border-b-2 border-blue-800' : ''}`}>Analytics</a>
            <a href="#" class={`text-sm font-bold leading-6 text-blue-800 hover:border-b-2 pt-2 ${currentPage === 'Report' ? 'border-b-2 border-blue-800' : ''}`}>Report</a>
            <a href="/" class="text-sm font-bold leading-6 text-gray-100 bg-blue-800 p-2 px-8 rounded-md hover:bg-blue-500">Logout</a>
          </div>
        </nav>
        <div class="lg:hidden" role="dialog" aria-modal="true">
          <div class="fixed inset-0 z-10"></div>
          <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-200 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div class="flex items-center justify-between">
              <a href="#" class="-m-1.5 p-1.5">
              <img src={logo} className="w-10"/>
              </a>
              <button type="button" class="-m-2.5 rounded-md p-2.5 text-blue-700">
                <span class="sr-only">Close menu</span>
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class="mt-6 flow-root">
              <div class="-my-6 divide-y divide-gray-500/10">
                <div class="space-y-2 py-6">
                  <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-blue-900 hover:border-b-2 border-blue-800">Crime</a>
                  <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-blue-900 hover:border-b-2 border-blue-800">Incident</a>
                  <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-blue-900 hover:border-b-2 border-blue-800">Road</a>
                </div>
                <div class="py-6">
                  <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-blue-800">Logout</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* End of header */}

      {/* Tabs section */}
      
      
    </>
  );
};

export default Header;
