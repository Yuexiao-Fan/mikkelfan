import React from "react";
import { motion } from "framer-motion";

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Senior Data & BI Analyst",
      company: "H&S FMCG",
      period: "2025 - Present",
      description: [
        "Automated T-SQL + Power BI pipelines, saving 20+ staff hours weekly",
        "Executive dashboards for revenue, ROI, and SKU performance",
        "Improved reporting accuracy across ERP (Pronto) and CRM (CIN7)",
      ],
    },
    {
      title: "Data Analyst Intern",
      company: "Flywheel by Omnicom",
      period: "2023 - 2024",
      description: [
        "K-means & RFM segmentation; identified high-value cohorts",
        "Built Tableau dashboards analyzing 500K+ monthly e-commerce records",
      ],
    },
  ];

  return (
    <section className="section container">
      <motion.div
        className="section-head"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          Professional journey in data analytics and business intelligence
        </p>
      </motion.div>

      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="glass experience-card">
              <div className="experience-header">
                <div className="experience-meta">
                  <div className="experience-time">{exp.period}</div>
                  <div className="experience-org">{exp.company}</div>
                </div>
                <div className="experience-role">{exp.title}</div>
              </div>
              <ul className="experience-description">
                {exp.description.map((item, idx) => (
                  <li key={idx}>
                    <i className="bx bx-check"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
