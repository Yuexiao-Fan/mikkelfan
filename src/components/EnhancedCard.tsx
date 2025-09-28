import React from "react";
import { motion } from "framer-motion";

interface EnhancedCardProps {
  children: React.ReactNode;
  className?: string;
  glowEffect?: boolean;
}

const EnhancedCard: React.FC<EnhancedCardProps> = ({
  children,
  className = "",
  glowEffect = false,
}) => {
  return (
    <motion.div
      className={`glass enhanced-card ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{
        y: -8,
        boxShadow: glowEffect ? "var(--shadow-glow-hover)" : "var(--shadow-xl)",
      }}
    >
      {children}
    </motion.div>
  );
};

export default EnhancedCard;
