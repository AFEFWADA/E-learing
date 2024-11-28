import React from 'react';
import FeaturedTest from './FeaturedTest';
import LineChart from './LineDatas';
import Sidebarr from './Sidebar';

const Dashboard = ({ user }) => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      {/* Sidebar */}
      <div style={{ flex: '0 0 250px', height: '100vh' }}>
        <Sidebarr />
      </div>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          padding: '20px',
          overflowY: 'auto',
        }}
      >
        {/* Featured Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <FeaturedTest />
        </div>

        {/* LineChart Section */}
        <div style={{ marginTop: '20px', height: '45vh', width: '100%' }}>
          <LineChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
