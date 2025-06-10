import React from 'react';

const ProfileSidebar = () => {
  return (
    <aside className="sidebar">
      <div className="user-info">
        <img src="/avatar.jpg" alt="User" className="avatar" />
        <p>Hello 👋</p>
        <h2>Robert Fox</h2>
      </div>
      <ul className="menu">
        <li className="active">👤 Personal Information</li>
        <li>📦 My Orders</li>
        <li>❤️ My Wishlists</li>
        <li>📍 Manage Addresses</li>
        <li>💳 Saved Cards</li>
        <li>🔔 Notifications</li>
        <li>⚙️ Settings</li>
      </ul>
    </aside>
  );
};

export default ProfileSidebar;
