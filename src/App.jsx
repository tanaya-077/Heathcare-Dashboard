import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import './styles/App.css';

const HealthcareDashboard = () => (
  <div className="app">
    <Header />
    <div className="app-body">
      <Sidebar />
      <Dashboard />
    </div>
  </div>
);

export default HealthcareDashboard; 