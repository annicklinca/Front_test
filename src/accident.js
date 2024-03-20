import React from 'react';
import Header from './header';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Accident = () => {
  return (
    <div>
      <Header currentPage="Accident" />
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
          <iframe src="https://gis.police.gov.rw/portal/apps/dashboards/77686968b49c449da3c861c25582f0ed?portalUrl=https://gis.police.gov.rw/portal" title="Tab 1 Content" style={{ width: '100%', height: '650px' }}></iframe>
        </TabPanel>

        <TabPanel>
        <iframe src="https://gis.police.gov.rw/portal/apps/dashboards/abd3d14cc9574d84bce461c1c75f6398?portalUrl=https://gis.police.gov.rw/portal" title="Tab 1 Content" style={{ width: '100%', height: '600px' }}></iframe>
          {/* Maps*/}
        </TabPanel>

        <TabPanel>
        <iframe src="https://survey123.arcgis.com/share/22c2786f70c04e8d8c788d5cd433783e?portalUrl=https://gis.police.gov.rw/portal" title="Tab 1 Content" style={{ width: '100%', height: '600px' }}></iframe>
          {/* Forms */}
        </TabPanel>
      </Tabs>
      {/* Your Crime page content goes here */}
    </div>
  );
};

export default Accident;
