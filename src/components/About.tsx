import React from "react";
import { motion } from "framer-motion";
import EnhancedCard from "./EnhancedCard";

const About: React.FC = () => {
  return (
    <section className="section container">
      <motion.div
        className="section-head"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">About</h2>
        <p className="section-subtitle">
          Senior Data & BI Analyst with expertise in transforming operations
          through predictive analytics
        </p>
      </motion.div>

      <div className="about-grid">
        <motion.div
          className="about-profile-container"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <EnhancedCard
            glowEffect={true}
            className="about-profile enhanced-card profile-card"
          >
            <div className="profile-header">
              <div className="profile-avatar">
                <img src="/assets/img/me.jpg" alt="Mikkel Fan" />
              </div>
              <div className="profile-info">
                <h3>Mikkel Fan</h3>
                <p className="profile-role">Senior Data & BI Analyst</p>
                <p className="profile-location">Sydney, Australia</p>
              </div>
            </div>
            <ul className="profile-meta">
              <li>
                <i className="bx bx-envelope"></i>
                <span>Email</span>
                <a href="mailto:mikkel.yx.fan@gmail.com">
                  mikkel.yx.fan@gmail.com
                </a>
              </li>
              <li>
                <i className="bx bx-phone"></i>
                <span>Phone</span>
                <span>+61 435 558 853</span>
              </li>
              <li>
                <i className="bx bx-calendar"></i>
                <span>Birthday</span>
                <span>02 Oct 1998</span>
              </li>
            </ul>
          </EnhancedCard>
        </motion.div>

        <motion.div
          className="about-description-container"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <EnhancedCard className="about-description enhanced-card description-card">
            <div className="description-content">
              <h3 className="description-title">Professional Summary</h3>
              <p className="description-text">
                Data Analyst skilled in SQL, Python and Power BI. I build clean
                data models, automated ELT pipelines, and executive-ready
                dashboards. Comfortable partnering with non-technical
                stakeholders to translate business goals into measurable
                outcomes.
              </p>
              <p className="description-focus">
                <strong>Focus:</strong> Revenue & ROI analytics · Customer
                segmentation (K-means/RFM) · Data quality frameworks ·
                Predictive models.
              </p>
            </div>
            <div className="skills-chips">
              <span className="skill-chip">
                <i className="bx bx-data"></i>
                Data Modeling
              </span>
              <span className="skill-chip">
                <i className="bx bx-transfer"></i>
                ETL/ELT
              </span>
              <span className="skill-chip">
                <i className="bx bx-trending-up"></i>
                Forecasting
              </span>
              <span className="skill-chip">
                <i className="bx bx-test-tube"></i>
                A/B Testing
              </span>
              <span className="skill-chip">
                <i className="bx bx-calculator"></i>
                DAX
              </span>
              <span className="skill-chip">
                <i className="bx bx-cloud"></i>
                Snowflake
              </span>
              <span className="skill-chip">
                <i className="bx bxl-git"></i>
                Git
              </span>
            </div>
          </EnhancedCard>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
