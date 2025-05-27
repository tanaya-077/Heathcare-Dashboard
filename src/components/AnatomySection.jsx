import React from 'react';
import { Heart } from 'lucide-react';

const healthStatus = [
  { name: 'Lungs', date: 'Tue, 26 Oct 2021', status: 'warning', progress: 65 },
  { name: 'Teeth', date: 'Tue, 26 Oct 2021', status: 'good', progress: 85 },
  { name: 'Bone', date: 'Drink, 26 Oct 2021', status: 'warning', progress: 45 }
];

const AnatomySection = () => (
  <div className="anatomy-section">
    <div className="anatomy-container">
      <div className="human-body">
        <svg width="200" height="400" viewBox="0 0 200 400" className="body-svg">
          <circle cx="100" cy="40" r="25" fill="#FFB8A3" stroke="#E8A085" strokeWidth="2"/>
          <rect x="95" y="65" width="10" height="15" fill="#FFB8A3"/>
          <ellipse cx="100" cy="140" rx="40" ry="60" fill="#FF6B4A" stroke="#E8573C" strokeWidth="2"/>
          <ellipse cx="65" cy="120" rx="12" ry="35" fill="#FF6B4A" stroke="#E8573C" strokeWidth="2"/>
          <ellipse cx="135" cy="120" rx="12" ry="35" fill="#FF6B4A" stroke="#E8573C" strokeWidth="2"/>
          <ellipse cx="85" cy="260" rx="15" ry="60" fill="#FF6B4A" stroke="#E8573C" strokeWidth="2"/>
          <ellipse cx="115" cy="260" rx="15" ry="60" fill="#FF6B4A" stroke="#E8573C" strokeWidth="2"/>
          <ellipse cx="85" cy="340" rx="12" ry="40" fill="#FF6B4A" stroke="#E8573C" strokeWidth="2"/>
          <ellipse cx="115" cy="340" rx="12" ry="40" fill="#FF6B4A" stroke="#E8573C" strokeWidth="2"/>
        </svg>
        
        <div className="health-indicator healthy-heart">
          <div className="indicator-badge">
            <Heart size={12} fill="white" />
            <span>Healthy Heart</span>
          </div>
        </div>
      </div>
      
      <button className="healthy-log-btn">Healthy Log</button>
    </div>
    
    <div className="health-status-cards">
      {healthStatus.map((item, index) => (
        <div key={index} className="health-card">
          <div className="health-card-header">
            <div className="health-icon">
              {item.name === 'Lungs' && <div className="lung-icon"></div>}
              {item.name === 'Teeth' && <div className="teeth-icon">🦷</div>}
              {item.name === 'Bone' && <div className="bone-icon">🦴</div>}
            </div>
            <span className="health-name">{item.name}</span>
          </div>
          <div className="health-date">{item.date}</div>
          <div className="health-progress">
            <div 
              className={`progress-bar ${item.status}`}
              style={{width: `${item.progress}%`}}
            ></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default AnatomySection; 