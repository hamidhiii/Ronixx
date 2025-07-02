import React, { useState, useEffect } from "react"; // добавлен useEffect
import { Link, useNavigate } from "react-router-dom";
import { Button, Modal, Form } from "react-bootstrap";
import { Edit, Trash2, Plus, Phone } from "lucide-react";
import "./ManageAddressesPage.scss";

const ManageAddressesPage = () => {
  const [addresses, setAddresses] = useState(() => {

    const saved = localStorage.getItem("addresses");
    return saved ? JSON.parse(saved) : [];
  });
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    flatInfo: '',
    area: '',
    city: '',
    pinCode: '',
    state: '',  
    isDefault: false,
  });
  const [editId, setEditId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("addresses", JSON.stringify(addresses));
  }, [addresses]);

  const handleShow = (addr = null) => {
    if (addr) {
      setFormData(addr);
      setEditId(addr.id);
    } else {
      setFormData({
        fullName: '',
        mobileNumber: '',
        flatInfo: '',
        area: '',
        city: '',
        pinCode: '',
        state: '',
        isDefault: false,
      });
      setEditId(null);
    }
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.mobileNumber) return;

    if (editId) {
      setAddresses((prev) =>
        prev.map((addr) => (addr.id === editId ? { ...formData, id: editId } : addr))
      );
    } else {
      const newAddress = { ...formData, id: Date.now() };
      setAddresses((prev) => [...prev, newAddress]);
    }

    setShowModal(false);
    setFormData({
      fullName: '',
      mobileNumber: '',
      flatInfo: '',
      area: '',
      city: '',
      pinCode: '',
      state: '',
      isDefault: false,
    });
    setEditId(null);
  };

  const handleDelete = (id) => {
    setAddresses((prev) => prev.filter((addr) => addr.id !== id));
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="profile-page ">
       <aside className="sidebar">
             <nav className="menu">
               <ul>
                 <li className="adress">
                   <Link to="/profile">👤 Personal Information</Link>
                 </li>
                 <li className="adress">
                   <Link to="/profile/orders">📦 My Orders</Link>
                 </li>
                 <li className="adress">
                   <Link to="/profile/addresses">📍 Manage Addresses</Link>
                 </li>
                 <li className="active">
                   <Link to="/profile/cards">💳 Saved Cards</Link>
                 </li>
                 <li onClick={handleLogout} className="logout">
                   🚪 Log Out
                 </li>
               </ul>
             </nav>
           </aside>
     

      <div className="manage-addresses flex-grow-1 ps-4">
        <div className="header d-flex justify-content-between align-items-center">
          <h2>My Addresses</h2>
          <Button variant="dark" onClick={() => handleShow()}>
            <Plus size={16} className="me-2" /> Add New Address
          </Button>
        </div>

        <div className="address-list">
          {addresses.map((addr) => (
            <div className="address-card" key={addr.id}>
              <div className="card-content">
                <strong>{addr.fullName}</strong>
                <p><Phone size={14} className="me-2" />{addr.mobileNumber}</p>
                <p>
                  {addr.flatInfo}, {addr.area}, {addr.city}, {addr.state}, {addr.pinCode}
                </p>
                {addr.isDefault && <span className="default-badge">Default</span>}
              </div>
              <div className="actions">
                <Button variant="light" size="sm" onClick={() => handleShow(addr)}>
                  <Edit size={14} className="me-1" /> Edit
                </Button>
                <Button variant="outline-danger" size="sm" onClick={() => handleDelete(addr.id)}>
                  <Trash2 size={14} className="me-1" /> Delete
                </Button>
              </div>
            </div>
          ))}
        </div>

        <Modal className="address-modal" show={showModal} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{editId ? "Edit Address" : "Add Address"}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>👤 Full Name</Form.Label>
                <Form.Control type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>🏠 Flat, House No, Apartment</Form.Label>
                <Form.Control type="text" name="flatInfo" value={formData.flatInfo} onChange={handleChange} required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>📍 Area, Colony, Sector</Form.Label>
                <Form.Control type="text" name="area" value={formData.area} onChange={handleChange} required />
              </Form.Group>

              <Form.Group className="mb-3 form-check">
                <Form.Check type="checkbox" label="Use as my default address" name="isDefault" checked={formData.isDefault} onChange={handleChange} />
              </Form.Group>

              <div className="d-flex justify-content-end mt-3">
                <Button variant="dark" type="submit">Save Address</Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default ManageAddressesPage;
