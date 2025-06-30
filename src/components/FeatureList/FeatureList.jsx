import React from "react";
import styles from "./FeatureList.module.scss";
import { features } from "../../Constants/Index";

const FeatureList = () => {
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
            <img src={feature.image} alt={feature.title} className={styles.topImage} />
          )}

          <div className={styles.content}>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureList;
