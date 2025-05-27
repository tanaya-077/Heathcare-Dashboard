import React from 'react';
import { Eye, Heart, Brain } from 'lucide-react';

const upcomingAppointments = {
  thursday: [
    { title: 'Health checkup complete', time: '11:00 AM', type: 'checkup' },
    { title: 'Ophthalmologist', time: '14:00 PM', type: 'specialist' }
  ],
  saturday: [
    { title: 'Cardiologist', time: '12:00 AM', type: 'heart' },
    { title: 'Neurologist', time: '16:00 PM', type: 'brain' }
  ]
};

const UpcomingSchedule = () => (
  <div className="upcoming-schedule">
    <h3 className="schedule-title">The Upcoming Schedule</h3>
    
    <div className="schedule-day">
      <h4>On Thursday</h4>
      <div className="schedule-appointments">
        {upcomingAppointments.thursday.map((apt, index) => (
          <div key={index} className="schedule-card">
            <div className="schedule-info">
              <div className="schedule-appointment-title">{apt.title}</div>
              <div className="schedule-time">{apt.time}</div>
            </div>
            <div className="schedule-icon">
              {apt.type === 'checkup' && '🏥'}
              {apt.type === 'specialist' && <Eye size={16} />}
            </div>
          </div>
        ))}
      </div>
    </div>
    
    <div className="schedule-day">
      <h4>On Saturday</h4>
      <div className="schedule-appointments">
        {upcomingAppointments.saturday.map((apt, index) => (
          <div key={index} className="schedule-card">
            <div className="schedule-info">
              <div className="schedule-appointment-title">{apt.title}</div>
              <div className="schedule-time">{apt.time}</div>
            </div>
            <div className="schedule-icon">
              {apt.type === 'heart' && <Heart size={16} />}
              {apt.type === 'brain' && <Brain size={16} />}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default UpcomingSchedule; 