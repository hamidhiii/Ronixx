import React from "react";
import "./CartItem.scss";
import { decrement, increment, removeItem } from "../../../redux/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      {/* Отображение изображения товара */}
      <img src={item.image} alt={item.name} />

      <div className="info">
        {/* Отображение названия товара */}
        <p className="name">{item.name}</p>
        <p className="barcode">Штрихкод: {item.barcode}</p>

        <div className="controls">
          {/* Кнопки для увеличения/уменьшения количества */}
          <button onClick={() => dispatch(decrement(item.id))}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(increment(item.id))}>+</button>
        </div>
      </div>

      {/* Отображение цены с учетом количества */}
      <p className="price">{(item.price * item.quantity).toLocaleString()} UZS</p>

      {/* Кнопка для удаления товара из корзины */}
      <button className="remove" onClick={() => dispatch(removeItem(item.id))}>×</button>
    </div>
  );
};

export default CartItem;
