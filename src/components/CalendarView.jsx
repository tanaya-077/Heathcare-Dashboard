import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const calendarData = [
  { day: 25, appointments: ['10:00'] },
  { day: 26, appointments: ['08:00', '09:00'] },
  { day: 27, appointments: ['12:00'] },
  { day: 28, appointments: ['10:00', '11:00'] },
  { day: 29, appointments: ['14:00'] },
  { day: 30, appointments: ['15:00', '09:00'] },
  { day: 31, appointments: ['10:00'] }
];

const CalendarView = () => (
  <div className="calendar-section">
    <div className="calendar-header">
      <div className="calendar-nav">
        <ChevronLeft size={16} />
        <span className="calendar-month">October 2021</span>
        <ChevronRight size={16} />
      </div>
      <div className="week-indicator">This Week</div>
    </div>
    
    <div className="calendar-grid">
      <div className="calendar-days">
        {['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'].map(day => (
          <div key={day} className="day-header">{day}</div>
        ))}
      </div>
      <div className="calendar-dates">
        {[25, 26, 27, 28, 29, 30, 31].map((date, index) => (
          <div key={date} className="calendar-date">
            <div className="date-number">{date}</div>
            <div className="date-appointments">
              {calendarData[index]?.appointments.map((time, i) => (
                <div key={i} className="appointment-time">{time}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    
    <div className="appointment-cards">
      <div className="appointment-card dentist">
        <div className="appointment-info">
          <div className="appointment-title">Dentist</div>
          <div className="appointment-time">09:00-11:00</div>
          <div className="appointment-doctor">Dr Cameron Williamson</div>
        </div>
        <div className="appointment-icon">🦷</div>
      </div>
      
      <div className="appointment-card physiotherapy">
        <div className="appointment-info">
          <div className="appointment-title">Physiotherapy Appointment</div>
          <div className="appointment-time">11:00-12:00</div>
          <div className="appointment-doctor">Dr. Kevin Djsores</div>
        </div>
        <div className="appointment-icon">🏃</div>
      </div>
    </div>
  </div>
);

export default CalendarView; 