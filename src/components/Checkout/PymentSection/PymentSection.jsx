import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPaymentMethod } from "../../../redux/cartSlice";
const methods = ["click", "payme", "uzum"];

const PaymentSection = () => {
  const dispatch = useDispatch();
  const current = useSelector(state => state.cart.paymentMethod);

  return (
    <div className="payment-methods">
      <p>Способ оплаты *</p>
      <div className="method-list">
        {methods.map(method => (
          <button
            key={method}
            className={current === method ? "active" : ""}
            onClick={() => dispatch(setPaymentMethod(method))}
          >
            {method}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaymentSection;
