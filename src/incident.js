import React from 'react';
import Header from './header';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Incident = () => {
  return (
    <div>
      <Header currentPage="Incident" />
      
      <Tabs >
        <div className=''>
        <TabList className="bg-blue-900 border-none font-semibold p-2 text-white">
          <Tab>Dashboard</Tab>
          <Tab>Maps</Tab>
          <Tab>Forms</Tab>
        </TabList>
        </div>
        <TabPanel>
        <iframe src="https://gis.police.gov.rw/portal/apps/dashboards/b8e3f4d5811f4c7c849efd24b805c310?portalUrl=https://gis.police.gov.rw/portal" title="Tab 1 Content" style={{ width: '100%', height: '650px' }}></iframe>
          {/* Add content for Tab 1 */}
        </TabPanel>

        <TabPanel>
        <iframe src="https://gis.police.gov.rw/portal/apps/dashboards/021c48cb5a17407c887df2e85056a4d9?portalUrl=https://gis.police.gov.rw/portal" title="Tab 1 Content" style={{ width: '100%', height: '650px' }}></iframe>
          {/* Add content for Tab 2 */}
        </TabPanel>

        <TabPanel>
          <iframe src="https://survey123.arcgis.com/share/8d894a6097084809a69a7b55b90903e8?portalUrl=https://gis.police.gov.rw/portal" title="Tab 1 Content" style={{ width: '100%', height: '650px' }}></iframe>
          {/* Add content for Tab 3 */}
        </TabPanel>
      </Tabs>
      {/* Your Crime page content goes here */}
    </div>
  );
};

export default Incident;
