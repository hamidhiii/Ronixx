import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // для навигации
import "./ProfilePage.scss";

const ProfilePage = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
  });

  const [isEditing, setIsEditing] = useState(false);

 useEffect(() => {
  const savedUser = JSON.parse(localStorage.getItem("currentUser"));
  if (savedUser) {
    setUser(savedUser);
  } else {
    navigate("/login");
  }
}, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    localStorage.setItem("user", JSON.stringify(user));
    setIsEditing(false);
  };
const handleLogout = () => {
  localStorage.removeItem("currentUser");
  navigate("/");  
};


  return (
    <div className="profile-page">
      <aside className="sidebar">
        <nav className="menu">
          <ul>
            <li className="active">👤 Personal Information</li>
            <li>📦 My Orders</li>
            <li>📍 Manage Addresses</li>
            <li>💳 Saved Cards</li>
            <li onClick={handleLogout} className="logout">🚪 Log Out</li>
          </ul>
        </nav>
      </aside>

      <main className="profile-content">
        <div className="profile-header">
          <h1>My Profile</h1>
          {!isEditing ? (
            <button className="edit-btn" onClick={() => setIsEditing(true)}>✏️ Edit Profile</button>
          ) : (
            <button className="save-btn" onClick={handleSave}>✅ Save</button>
          )}
        </div>

        <div className="profile-form">
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={user.firstName}
                onChange={handleChange}
                readOnly={!isEditing}
              />
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={user.lastName}
                onChange={handleChange}
                readOnly={!isEditing}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                readOnly={!isEditing}
              />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={user.email}
                readOnly
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group full-width">
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={user.address}
                onChange={handleChange}
                readOnly={!isEditing}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
