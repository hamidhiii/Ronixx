import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./FeatureList.module.scss";
import { features } from "../../Constants/Index";

const FeatureList = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.features}>
      {features.map((feature, index) => (
        <div
          key={index}
          className={`${styles.card} ${styles[`card${index + 1}`]}`}
          style={
            index < 2 && feature.image
              ? { backgroundImage: `url(${feature.image})` }
              : {}
          }
        >
          {index >= 2 && feature.image && (
            <img src={feature.image} alt={t(feature.title)} className={styles.topImage} />
          )}

          <div className={styles.content}>
            <h3>{t(feature.title)}</h3>
            <p>{t(feature.text)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureList;
