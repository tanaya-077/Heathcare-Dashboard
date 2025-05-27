import React from 'react';
import { 
  BarChart3, 
  Clock, 
  Calendar, 
  MessageCircle, 
  HelpCircle, 
  Settings 
} from 'lucide-react';

const navigationItems = [
  { icon: BarChart3, label: 'Dashboard', active: true },
  { icon: Clock, label: 'History' },
  { icon: Calendar, label: 'Calendar' },
  { icon: Calendar, label: 'Appointments' },
  { icon: BarChart3, label: 'Statistics' },
  { icon: MessageCircle, label: 'Chat' },
  { icon: HelpCircle, label: 'Support' }
];

const Sidebar = () => (
  <aside className="sidebar">
    <div className="sidebar-section">
      <h3 className="sidebar-title">General</h3>
      <nav className="navigation">
        {navigationItems.map((item, index) => (
          <div key={index} className={`nav-item ${item.active ? 'active' : ''}`}>
            <item.icon size={16} />
            <span>{item.label}</span>
          </div>
        ))}
      </nav>
    </div>
    <div className="sidebar-section">
      <h3 className="sidebar-title">Tools</h3>
      <nav className="navigation">
        <div className="nav-item">
          <MessageCircle size={16} />
          <span>Chat</span>
        </div>
        <div className="nav-item">
          <HelpCircle size={16} />
          <span>Support</span>
        </div>
      </nav>
    </div>
    <div className="sidebar-bottom">
      <div className="nav-item">
        <Settings size={16} />
        <span>Setting</span>
      </div>
    </div>
  </aside>
);

export default Sidebar; 