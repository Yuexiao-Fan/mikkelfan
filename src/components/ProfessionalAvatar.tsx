import React from "react";
import { motion } from "framer-motion";

const ProfessionalAvatar: React.FC = () => {
  return (
    <motion.div
      className="avatar"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      whileHover={{ scale: 1.05 }}
    >
      <img src="/assets/img/me.jpg" alt="Mikkel Fan" />
    </motion.div>
  );
};

export default ProfessionalAvatar;
