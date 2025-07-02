import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPaymentMethod } from "../../../redux/cartSlice";

import clickIcon from "../../../assets/payment/Click-01_hjB080W.png";
import paymeIcon from "../../../assets/payment/payme-01.png";
import uzumIcon from "../../../assets/payment/Uzum-01.png";
import { Col, Container, Row } from "react-bootstrap";

const methods = [
  { id: "click", label: "Click", icon: clickIcon },
  { id: "payme", label: "Payme", icon: paymeIcon },
  { id: "uzum", label: "Uzum", icon: uzumIcon }
];

const PaymentSection = () => {
  const dispatch = useDispatch();
  const current = useSelector(state => state.cart.paymentMethod);

  return (
   
    <Row className="payment-section">
  <p className="section-title">Способ оплаты <span>*</span></p>
  {methods.map(({ id, label, icon }) => (
    <Col key={id} lg={2} md={3} sm={4} xs={6} className="d-flex justify-content-center mb-3">
      <button
        className={`payment-button ${current === id ? "active" : ""}`}
        onClick={() => dispatch(setPaymentMethod(id))}
      >
        <img src={icon} alt={label} />
        <span>{label}</span>
      </button>
    </Col>
  ))}
</Row>


   
  );
};

export default PaymentSection;
