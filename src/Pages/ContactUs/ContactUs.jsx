import React from "react";
import { Container, Row } from "react-bootstrap";
import "./ContactUs.scss";
import ContactForm from "../../components/ContactForm/ContactForm";
import InstagramCard from "../../components/InstagramCard/InstagramCard";
import HeaderLocations from "../../components/HeaderLocations/HeaderLocations";
import Location from "../../components/Location/Location";

export default function ContactUs() {
  return (
    <div className="contactUs">
        <HeaderLocations/>
        <ContactForm/>
        <InstagramCard/>
        <Location/>
    </div>
  );
}

