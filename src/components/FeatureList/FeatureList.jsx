import React from "react";
import styles from "./FeatureList.module.scss";
import { features } from "../../Constants/Index";

const FeatureList = () => {
  return (
    <div className={styles.features}>
      {features.map((feature, index) => (
        <div key={index} className={`${styles.card} ${styles[`card${index + 1}`]}`}>
          {feature.image ? (
            <img src={feature.image} alt={feature.title} className={styles.image} />
          ) : (
            <div className={styles.icon}>{feature.icon}</div>
          )}
          <h3>{feature.title}</h3>
          <p>{feature.text}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureList;