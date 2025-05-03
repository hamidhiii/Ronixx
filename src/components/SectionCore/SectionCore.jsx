import React from "react";
import "./SectionCore.scss";
import { Container, Row } from "react-bootstrap";
import FeatureList from "../FeatureList/FeatureList";




export default function SectionCore() {
  return (
    <div className="sectionCore">
      <Container>
        <Row>
          <h2>ОСНОВНЫЕ ЦЕННОСТИ: ЧЕМ ХАРАКТЕРИЗУЕТСЯ РОНИКС</h2>
          <p>
          С самого начала, суть деятельности компании «РОНИКС» основывается на наших пяти основных ценностях, каждая из которых важна и определяет характер нашего бизнеса. Реализация нашей основных ценностей “разнообразие, качество, разумные цены, организационное поведение и обслуживание клиентов” ведет нас по пути к непрерывному росту на рынке инструментов.
          </p>
        </Row>

      
        <FeatureList/>
      </Container>
    </div>
  );
}
