# Healthcare Dashboard

A modern, responsive healthcare dashboard built with React that provides a comprehensive view of patient health data, appointments, and medical activities.

## Features

### 1. Interactive Dashboard
- Real-time health status monitoring
- Visual representation of body anatomy
- Health progress tracking for different body parts
- Activity feed with weekly statistics

### 2. Appointment Management
- Calendar view with appointment scheduling
- Upcoming appointments display
- Detailed appointment cards with doctor information
- Easy navigation between dates

### 3. Health Monitoring
- Visual health indicators for different body parts
- Progress tracking for:
  - Lungs health
  - Dental health
  - Bone health
- Healthy heart status indicator

### 4. User Interface
- Clean and modern design
- Responsive layout for all screen sizes
- Intuitive navigation
- Search functionality
- Notification system

## Components

### Header (`Header.jsx`)
- Logo display
- Search functionality
- Notification bell
- User profile
- Quick action button

### Sidebar (`Sidebar.jsx`)
- Navigation menu
- General section with main features
- Tools section
- Settings access

### Dashboard (`Dashboard.jsx`)
- Main dashboard layout
- Integration of all dashboard components
- Responsive grid system

### Anatomy Section (`AnatomySection.jsx`)
- Interactive human body visualization
- Health status indicators
- Progress tracking for different body parts
- Health log functionality

### Calendar View (`CalendarView.jsx`)
- Monthly calendar display
- Week view navigation
- Appointment time slots
- Appointment cards with details

### Upcoming Schedule (`UpcomingSchedule.jsx`)
- Upcoming appointments list
- Day-wise organization
- Appointment details including:
  - Time
  - Doctor information
  - Appointment type

### Activity Feed (`ActivityFeed.jsx`)
- Weekly activity visualization
- Appointment statistics
- Interactive chart display
- Detailed view access

## Technologies Used

- React.js
- CSS3 with modern features
- Lucide React for icons
- SVG for anatomy visualization
- Responsive design principles

## Getting Started

1. Clone the repository
```bash
git clone [repository-url]
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── Sidebar.jsx
│   ├── Dashboard.jsx
│   ├── AnatomySection.jsx
│   ├── CalendarView.jsx
│   ├── UpcomingSchedule.jsx
│   └── ActivityFeed.jsx
├── styles/
│   └── App.css
└── App.jsx
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Icons provided by Lucide React
- Design inspiration from modern healthcare applications
- SVG anatomy visualization resources 