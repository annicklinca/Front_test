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
          <h2>Content for Tab 1</h2>
          lllll
          {/* Add content for Tab 1 */}
        </TabPanel>
        <TabPanel>
          <h2>Content for Tab 2</h2>
          {/* Add content for Tab 2 */}
        </TabPanel>
        <TabPanel>
          <h2>Content for Tab 3</h2>
          {/* Add content for Tab 3 */}
        </TabPanel>
      </Tabs>
      {/* Your Crime page content goes here */}
    </div>
  );
};

export default Analytics;
