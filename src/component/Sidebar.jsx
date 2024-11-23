import React from 'react';
import { Nav } from 'react-bootstrap';
import {  useNavigate } from 'react-router-dom';


const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        height: '100vh',
        width: '250px',
        backgroundColor: '#343a40',
        color: 'white',
        position: 'fixed',
        top: 0,
        left: 0,
        padding: '20px',
      }}
    >
      <h3 className="mb-4">Dashboard User</h3>
      <Nav className="flex-column">
        <Nav.Link onClick={() => navigate('/dashboard-user')} style={{ color: 'white' }}>Home</Nav.Link>

        <Nav.Link  onClick={() => navigate('/profile')} style={{ color: 'white' }}>Profile</Nav.Link>
        <Nav.Link onClick={() => navigate('/setting')}  style={{ color: 'white' }}>Settings</Nav.Link>
        <Nav.Link onClick={() => navigate('/user-courses')}  style={{ color: 'white' }}>My Courses</Nav.Link>


        <Nav.Link onClick={() => navigate('/')}  style={{ color: 'white' }}>Logout</Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
