import React from "react";
import { motion } from "framer-motion";

const KPIs: React.FC = () => {
  const kpis = [
    { number: "15", label: "Projects" },
    { number: "3+", label: "Years" },
    { number: "50+", label: "Data Models" },
    { number: "24", label: "Stakeholders" },
  ];

  return (
    <div className="kpis">
      {kpis.map((kpi, index) => (
        <motion.div
          key={index}
          className="kpi"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <div className="kpi-number">{kpi.number}</div>
          <div className="kpi-label">{kpi.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default KPIs;
