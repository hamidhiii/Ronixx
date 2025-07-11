import React, { use } from "react";
import "./SectionCore.scss";
import { Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import FeatureList from './../FeatureList/FeatureList';





export default function SectionCore() {
  const {t} = useTranslation(); 
  return (
    <div className="sectionCore">
      <Container>
        <Row>
          <h2>{t("coretitle")}</h2>
          <p>
            {t("coreparagraph")}
          </p>
        </Row>

      
        <FeatureList/>
      </Container>
    </div>
  );
}
