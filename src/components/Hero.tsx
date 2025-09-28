import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import KPIs from "./KPIs";
import ProfessionalAvatar from "./ProfessionalAvatar";
import TypedText from "./TypedText";

const Hero: React.FC = () => {
  return (
    <section className="hero container">
      <div className="hero-content">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="hero-eyebrow">
            <span className="eyebrow-indicator"></span>
            <span>Senior Data & BI Analyst • Sydney</span>
          </div>
          <h1 className="title">Mikkel Fan</h1>
          <div className="role-intro">
            <span className="role-prefix">&lt;</span>
            <TypedText />
            <span className="role-suffix">/&gt;</span>
          </div>
          <p className="subtitle">
            Transforming operations with predictive revenue & growth analytics.
          </p>
          <p className="text">
            Delivering board-level dashboards, automated SQL & Python pipelines,
            and executive-ready narratives.
          </p>

          <div className="hero-actions">
            <Link to="/projects" className="btn">
              <i className="bx bx-show-alt"></i> View Projects
            </Link>
            <a className="btn btn-ghost" href="mailto:mikkel.yx.fan@gmail.com">
              <i className="bx bx-envelope"></i> Send Email
            </a>
            <a
              className="btn btn-ghost secondary"
              href="/assets/resume/Mikkel_Fan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bx-download"></i> Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="hero-avatar-center">
            <ProfessionalAvatar />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hero-kpis"
          >
            <KPIs />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
