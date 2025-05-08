import React from 'react'
import './ProductAccardion.scss'
import { FaPlus, FaMinus } from "react-icons/fa"
import Accordion from "react-bootstrap/Accordion";
import ProductSpec from '../ProductSpec/ProductSpec';
export default function ProductAccardion({features, description,  activeAccordion, toggleAccordion}) {
  return (
    <div> <Accordion activeKey={activeAccordion} className='product-desc-accordion'>
    <Accordion.Item eventKey="0">
      <Accordion.Header onClick={() => toggleAccordion("0")}>
        Features{" "}
        <span style={{ marginLeft: "8px" }}>
          {activeAccordion === "0" ? <FaMinus /> : <FaPlus />}
        </span>
      </Accordion.Header>
      <Accordion.Body>{features}</Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="1">
      <Accordion.Header onClick={() => toggleAccordion("1")}>
        Description{" "}
        <span style={{ marginLeft: "8px" }}>
          {activeAccordion === "1" ? <FaMinus /> : <FaPlus />}
        </span>
      </Accordion.Header>
      <Accordion.Body>{description}</Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="2">
      <Accordion.Header onClick={() => toggleAccordion("2")}>
        Specification{" "}
        <span style={{ marginLeft: "8px" }}>
          {activeAccordion === "2" ? <FaMinus /> : <FaPlus />}
        </span>
      </Accordion.Header>
      <Accordion.Body><ProductSpec/></Accordion.Body>
    </Accordion.Item>
  </Accordion></div>
  )
}
