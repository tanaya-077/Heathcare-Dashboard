import React from 'react';
import AnatomySection from './AnatomySection';
import ActivityFeed from './ActivityFeed';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';

const Dashboard = () => (
  <main className="dashboard-main">
    <div className="dashboard-header">
      <h2>Dashboard</h2>
    </div>
    
    <div className="dashboard-content">
      <div className="left-column">
        <AnatomySection />
        <ActivityFeed />
      </div>
      
      <div className="right-column">
        <CalendarView />
        <UpcomingSchedule />
      </div>
    </div>
  </main>
);

export default Dashboard; 