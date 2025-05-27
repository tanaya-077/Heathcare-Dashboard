import React from 'react';
import { ChevronRight } from 'lucide-react';

const ActivityFeed = () => (
  <div className="activity-section">
    <div className="activity-header">
      <h3>Activity</h3>
      <span className="activity-count">3 appointment on this week</span>
    </div>
    <div className="activity-chart">
      <div className="chart-bars">
        {['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'].map((day, index) => (
          <div key={day} className="chart-day">
            <div className="chart-bar-container">
              <div className="chart-bar" style={{height: `${Math.random() * 80 + 20}%`}}></div>
              <div className="chart-bar" style={{height: `${Math.random() * 60 + 10}%`}}></div>
            </div>
            <div className="chart-label">{day}</div>
          </div>
        ))}
      </div>
    </div>
    <div className="details-link">
      <span>Details</span>
      <ChevronRight size={14} />
    </div>
  </div>
);

export default ActivityFeed; 