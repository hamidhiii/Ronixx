import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CustomerForm.scss";
import { updateCustomer } from "../../../redux/cartSlice";

const CustomerForm = () => {
  const dispatch = useDispatch();
  const customer = useSelector(state => state.cart.customer);

  useEffect(() => {

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser && !customer.name && !customer.phone) {
      dispatch(updateCustomer({
        name: currentUser.name || "",
        surname: currentUser.surname || "",
        phone: currentUser.phone || currentUser.emailOrPhone || "",
        address: currentUser.address || ""
      }));
    }
  }, [dispatch, customer]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateCustomer({ [name]: value }));
  };

  return (
    <div className="customer-form">
      <input name="name" placeholder="Имя" value={customer.name} onChange={handleChange} />
      <input name="surname" placeholder="Фамилия" value={customer.surname} onChange={handleChange} />
      <input name="phone" placeholder="Телефон" value={customer.phone} onChange={handleChange} />
      <input name="address" placeholder="Адрес" value={customer.address} onChange={handleChange} />
    </div>
  );
};

export default CustomerForm;
