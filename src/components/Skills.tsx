import React from "react";
import { motion } from "framer-motion";

const Skills: React.FC = () => {
  const skills = [
    { name: "SQL", level: 95, category: "Database" },
    { name: "Python", level: 90, category: "Programming" },
    { name: "Power BI", level: 88, category: "Visualization" },
    { name: "Tableau", level: 85, category: "Visualization" },
    { name: "R", level: 80, category: "Programming" },
    { name: "Machine Learning", level: 85, category: "AI/ML" },
    { name: "Data Modeling", level: 90, category: "Database" },
    { name: "ETL/ELT", level: 88, category: "Data Engineering" },
    { name: "Statistics", level: 85, category: "Analytics" },
    { name: "Git", level: 80, category: "Tools" },
    { name: "AWS", level: 70, category: "Cloud" },
  ];

  const categories = [...new Set(skills.map((skill) => skill.category))];

  return (
    <section className="section container">
      <motion.div
        className="section-head"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">
          Technical expertise across data analytics, programming, and business
          intelligence
        </p>
      </motion.div>

      <div className="skills-categories">
        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category}
            className="skill-category-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
          >
            <div className="glass skill-category-card">
              <div className="category-header">
                <div className="category-icon">
                  {category === "Database" && <i className="bx bx-data"></i>}
                  {category === "Programming" && (
                    <i className="bx bx-code-alt"></i>
                  )}
                  {category === "Visualization" && (
                    <i className="bx bx-bar-chart-alt-2"></i>
                  )}
                  {category === "AI/ML" && <i className="bx bx-brain"></i>}
                  {category === "Data Engineering" && (
                    <i className="bx bx-cog"></i>
                  )}
                  {category === "Analytics" && (
                    <i className="bx bx-trending-up"></i>
                  )}
                  {category === "Tools" && <i className="bx bx-wrench"></i>}
                  {category === "Cloud" && <i className="bx bx-cloud"></i>}
                </div>
                <div className="category-info">
                  <h3 className="category-name">{category}</h3>
                  <div className="category-skills">
                    {skills
                      .filter((skill) => skill.category === category)
                      .map((skill) => (
                        <span key={skill.name} className="skill-chip">
                          {skill.name}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
