import React from "react";
import { Container, Row } from "react-bootstrap";
import "./ContactUs.scss";
import ContactForm from "../../components/ContactForm/ContactForm";
import InstagramCard from "../../components/InstagramCard/InstagramCard";
import Location from "../../components/Location/Location";

export default function ContactUs() {
  return (
    <div className="contactUs">
        
        <ContactForm/>
        <InstagramCard/>
        <Location/>
    </div>
  );
}

