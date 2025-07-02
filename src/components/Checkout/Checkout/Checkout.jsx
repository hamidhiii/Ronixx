import React from "react";
import { useSelector } from "react-redux";
import "./Checkout.scss";
import CartItem from "../CartItem/CartItem";
import CustomerForm from "../CustomerForm/CustomerForm";
import PaymentSection from "../PymentSection/PymentSection";

const Checkout = () => {
  const items = useSelector(state => state.cart.items);
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <section className="checkout">
      <div className="checkout__cart">
        <h2>Корзина ({items.length} товаров)</h2>
        {items.length === 0 ? (
  <p>Ваша корзина пуста.</p>
) : (
  <>
    {items.map(item => <CartItem key={item.id} item={item} />)}
    <div className="checkout__total">Общая сумма: {total.toLocaleString()} UZS</div>
  </>
)}

      </div>
      <CustomerForm />
      <PaymentSection />
      <button className="order-button" disabled={items.length === 0}>
  Заказать
</button>

    </section>
  );
};

export default Checkout;
