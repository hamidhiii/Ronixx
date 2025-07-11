import React from 'react';
import './ProductAccardion.scss';
import { FaPlus, FaMinus } from "react-icons/fa";
import Accordion from "react-bootstrap/Accordion";
import ProductSpec from '../ProductSpec/ProductSpec';
import { useTranslation } from 'react-i18next';

export default function ProductAccardion({ featuress, description, specification, activeAccordion, toggleAccordion }) {
  const { t } = useTranslation();

  return (
    <div>
      <Accordion activeKey={activeAccordion} className='product-desc-accordion'>
        <Accordion.Item eventKey="0">
          <Accordion.Header onClick={() => toggleAccordion("0")}>
          {t("features")}{" "}
            <span style={{ marginLeft: "8px" }}>
              {activeAccordion === "0" ? <FaMinus /> : <FaPlus />}
            </span>
          </Accordion.Header>
          <Accordion.Body>{featuress}</Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header onClick={() => toggleAccordion("1")}>
          {t("description")}{" "}
            <span style={{ marginLeft: "8px" }}>
              {activeAccordion === "1" ? <FaMinus /> : <FaPlus />}
            </span>
          </Accordion.Header>
          <Accordion.Body>{description}</Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header onClick={() => toggleAccordion("2")}>
          {t("specification")}{" "}
            <span style={{ marginLeft: "8px" }}>
              {activeAccordion === "2" ? <FaMinus /> : <FaPlus />}
            </span>
          </Accordion.Header>
          <Accordion.Body>
            <ProductSpec specification={specification} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
