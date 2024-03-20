import React from 'react';
import Header from './header';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Crime = () => {
  return (
    <div>
      <Header currentPage="Crime" />
      <Tabs>
        <div className=''>
          <TabList className="bg-blue-900 border-none font-semibold p-2 text-white">
            <Tab>Dashboard</Tab>
            <Tab>Maps</Tab>
            <Tab>Forms</Tab>
          </TabList>
        </div>
        <TabPanel>
          {/* Dashboard */}
          <iframe src="https://gis.police.gov.rw/portal/apps/dashboards/df725a81ad1340a9b5c3cdf8a5c44c36?portalUrl=https://gis.police.gov.rw/portal" title="Tab 1 Content" style={{ width: '100%', height: '650px' }}></iframe>
        </TabPanel>

        <TabPanel>
        <iframe src="https://gis.police.gov.rw/portal/apps/dashboards/cdab4aa198e94c039f910a6e8293ae15?portalUrl=https://gis.police.gov.rw/portal" title="Tab 1 Content" style={{ width: '100%', height: '600px' }}></iframe>
          {/* Maps*/}
        </TabPanel>

        <TabPanel>
        <iframe src="https://survey123.arcgis.com/share/7aaafe2d2c7b480982cd997ba5858d43?portalUrl=https://gis.police.gov.rw/portal" title="Tab 1 Content" style={{ width: '100%', height: '600px' }}></iframe>
          {/* Forms */}
        </TabPanel>
      </Tabs>
      {/* Your Crime page content goes here */}
    </div>
  );
};

export default Crime;
