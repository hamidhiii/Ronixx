import React, { useState, useEffect } from "react";
import { Trash2, Plus } from "lucide-react";
import { Modal, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./SavedCardsPage.scss";

const detectCardType = (number) => {
  if (/^4/.test(number)) return "Visa Card";
  if (/^5[1-5]/.test(number)) return "Master Card";
  if (/^8600/.test(number)) return "UzCard";
  if (/^9860/.test(number)) return "Humo Card";
  return "Unknown";
};

const getCardLogo = (type) => {
  if (type.toLowerCase().includes("visa")) return "/images/visa.jpg";
  if (type.toLowerCase().includes("master")) return "/images/mastercard.png";
  if (type.toLowerCase().includes("uzcard")) return "/images/uzcard.png";
  if (type.toLowerCase().includes("humo")) return "/images/humo.jpg";
  return "/images/default-card.png";
};

const SavedCardsPage = () => {
  const navigate = useNavigate();
  const [cardError, setCardError] = useState("");
  const [cardName, setCardName] = useState("");
  const [cards, setCards] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newCard, setNewCard] = useState({
    number: "",
    expiry: "",
    cvv: "",
    type: "",
    logo: "",
  });

  useEffect(() => {
    const stored = localStorage.getItem("cards");
    if (stored) setCards(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  const handleDelete = (index) => {
    const updated = [...cards];
    updated.splice(index, 1);
    setCards(updated);
  };

  const handleAddCard = () => {
    if (!newCard.number || !newCard.expiry || !newCard.cvv) return;

    if (newCard.type === "Unknown") {
      alert("❌ This card type is not supported.");
      return;
    }

    const logo = getCardLogo(newCard.type);
    setCards([...cards, { ...newCard, logo }]);
    setNewCard({ number: "", expiry: "", cvv: "", type: "", logo: "" });
    setShowModal(false);
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="saved-cards-page">
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

      <div className="card-list-section">
        <button className="add-btn" onClick={() => setShowModal(true)}>
          <Plus size={16} /> Add New Card
        </button>

        <div className="card-list">
          {cards.map((card, index) => (
            <div key={index} className="card-item">
              <div className="card-info">
                <img src={card.logo} alt={card.type} />
                <div>
                  <h5>{card.type}</h5>
                  <p>{card.number}</p>
                </div>
              </div>
              <button
                className="delete-btn"
                onClick={() => handleDelete(index)}
              >
                <Trash2 size={16} /> Delete
              </button>
            </div>
          ))}
        </div>
      </div>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">Add New Card</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="form-label">Card Number</Form.Label>
              <Form.Control
                className="form-input"
                type="text"
                maxLength={19}
                placeholder="1234 5678 9012 3456"
                value={newCard.number}
                onChange={(e) => {
                  const raw = e.target.value.replace(/\D/g, "").slice(0, 16);
                  const formatted = raw.replace(/(.{4})/g, "$1 ").trim();
                  const cardType = detectCardType(raw);
                  setNewCard({ ...newCard, number: formatted, type: cardType });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="form-label">
                Expiration Date (MM/YY)
              </Form.Label>
              <Form.Control
                className="form-input"
                type="text"
                maxLength={5}
                placeholder="MM/YY"
                value={newCard.expiry}
                onChange={(e) => {
                  let val = e.target.value.replace(/\D/g, "");
                  if (val.length >= 3)
                    val = `${val.slice(0, 2)}/${val.slice(2, 4)}`;
                  setNewCard({ ...newCard, expiry: val });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="form-label">CVV</Form.Label>
              <Form.Control
                className="form-input"
                type="text"
                maxLength={3}
                placeholder="123"
                value={newCard.cvv}
                onChange={(e) => {
                  setNewCard({
                    ...newCard,
                    cvv: e.target.value.replace(/\D/g, "").slice(0, 3),
                  });
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="dark" onClick={handleAddCard}>
            Save Card
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SavedCardsPage;
