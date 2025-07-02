import React from 'react';
import styles from './CoreValues.module.scss';
// import drillImage from '../../assets/drill.png';
// import toolsImage from '../../assets/tools.png';

const CoreValues = () => {
  return (
    <section className={styles.coreValues}>
      <h1>CORE VALUES: WHAT DEFINES RONIX</h1>
      <p className={styles.description}>
        Since the beginning, the heart of our activities at Ronix has been based on our five Core Values in which every value is essential and shapes the nature of our business. Applying these core values of “variety, quality, reasonable pricing, organizational behavior, and customer service” leads us through continuous success in the tools market.
      </p>

      <div className={styles.grid}>
        <div className={styles.card}>
          {/* <img src={drillImage} alt="Drill" /> */}
          <h3>Quality</h3>
          <p>
            Ronix is a manufacturer of high-quality tools and equipment, produced under rigorous quality control and assurance protocols.
          </p>
        </div>

        <div className={styles.card}>
          {/* <img src={toolsImage} alt="Tools Variety" /> */}
          <h3>Variety</h3>
          <p>
            Ronix offers over 2500 types of tools and 36000 various types spare parts types in 9 different categories.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>$</div>
          <h3>Reasonable Pricing</h3>
          <p>
            Ronix is committed to delivering exceptional quality while ensuring affordability for customers with different needs.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>💬</div>
          <h3>Customer Support</h3>
          <p>
            Ronix ensures all customers receive reliable 24/7 support to meet their needs and boost their success in the tool market.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>🤝</div>
          <h3>Professional Behavior</h3>
          <p>
            Ronix has a deep commitment to valuing both our human resources and the customers who have chosen Ronix.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
