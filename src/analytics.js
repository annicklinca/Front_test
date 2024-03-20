import React from 'react';
import Header from './header';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Analytics = () => {
  return (
    <div>
      <Header currentPage="Analytics" />
      <Tabs >
        <div className=''>
        <TabList className="bg-blue-900 border-none font-semibold p-2 text-white">
          <Tab>Time Maps</Tab>
          <Tab>Analytic App</Tab>
        </TabList>
        </div>
        <TabPanel>
        <iframe src="https://gis.police.gov.rw/portal/apps/dashboards/f1390722cdf84dd88ed4f388548d0da5?portalUrl=https://gis.police.gov.rw/portal" title="Tab 1 Content" style={{ width: '100%', height: '650px' }}></iframe>
          {/* Add content for Tab 1 */}
        </TabPanel>

       <TabPanel>
        <iframe src="https://gis.police.gov.rw/portal/apps/webappviewer/index.html?id=17ee70c25231406382ba75d6510553e2" title="Tab 1 Content" style={{ width: '100%', height: '650px' }}></iframe>
          {/* Add content for Tab 1 */}
        </TabPanel>
      </Tabs>
      {/* Your Crime page content goes here */}
    </div>
  );
};

export default Analytics;
