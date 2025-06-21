import React, { useEffect, useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./ProfilePage.scss";

const ProfilePage = () => {
  const navigate = useNavigate();
  const formRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
   const [isEditing, setIsEditing] = useState(false);
    const showForm = !isMobile || isEditing;

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
  });

 

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (savedUser) {
      setUser(savedUser);
    } else {
      navigate("/login");
    }

    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [navigate]);

  useEffect(() => {
    if (isMobile && isEditing) {
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
  }, [isEditing, isMobile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    localStorage.setItem("currentUser", JSON.stringify(user));
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
            <li><Link to="/profile/orders">📦 My Orders</Link></li>
            <li><Link to="/profile/addresses">📍 Manage Addresses</Link></li>
            <li><Link to="/profile/cards">💳 Saved Cards</Link></li>
            <li onClick={handleLogout} className="logout">🚪 Log Out</li>
          </ul>
        </nav>
      </aside>

      <main className="profile-content">
    <div className="profile-header">
  <h1>My Profile</h1>
  {!isEditing && (
   <button
  className={`edit-btn ${isEditing ? "active" : ""}`}
  onClick={() => setIsEditing(true)}
>
  ✏️ Edit Profile
</button>

  )}
</div>


    {showForm && (
  <div className={`profile-form ${isMobile ? "fade-in" : ""}`} ref={formRef}>
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

    {isEditing && (
      <div className="form-row">
        <button className="save-btn full-width" onClick={handleSave}>✅ Save</button>
      </div>
    )}
  </div>
)}


      </main>
    </div>
  );
};

export default ProfilePage;
