import React from 'react';
import FeaturedTest from './FeaturedTest';
import LineChart from './LineDatas';

const Dashboard = ({ user }) => {
  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#141b2d' }}>
      {/* Sidebar */}

      {/* Main Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '20px' }}>

        <div style={{ display: 'flex', justifyContent: 'space-between' ,  marginLeft: '300px' }}>
            <FeaturedTest />
        </div>


        {/* LineChart Section */}
        <div style={{ marginTop: '10px', height: '45vh' , width: '90vh' ,  marginLeft: '300px'  }}>
          <LineChart />
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
