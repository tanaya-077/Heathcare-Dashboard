import React from 'react';
import { Search, Bell, Plus } from 'lucide-react';

const Header = () => (
  <header className="header">
    <div className="header-left">
      <h1 className="logo">Healthcare.</h1>
    </div>
    <div className="header-center">
      <div className="search-container">
        <Search size={16} className="search-icon" />
        <input type="text" placeholder="Search" className="search-input" />
      </div>
    </div>
    <div className="header-right">
      <Bell size={20} className="notification-icon" />
      <div className="user-profile">
        <div className="avatar">S</div>
      </div>
      <button className="add-button">
        <Plus size={16} />
      </button>
    </div>
  </header>
);

export default Header; 