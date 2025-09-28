import React from "react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  const contactItems = [
    {
      icon: "bxl-linkedin",
      label: "LinkedIn",
      value: "linkedin.com/in/mikkelfan",
      href: "https://linkedin.com/in/mikkelfan",
    },
    {
      icon: "bx-envelope",
      label: "Email",
      value: "mikkel.yx.fan@gmail.com",
      href: "mailto:mikkel.yx.fan@gmail.com",
    },
    {
      icon: "bx-phone",
      label: "Phone",
      value: "+61 435 558 853",
      href: "tel:+61435558853",
    },
    {
      icon: "bxl-github",
      label: "GitHub",
      value: "github.com/mikkelfan",
      href: "https://github.com/mikkelfan",
    },
    {
      icon: "bxl-twitter",
      label: "Twitter",
      value: "twitter.com/mikkelfan",
      href: "https://twitter.com/mikkelfan",
    },
  ];

  return (
    <section className="contact-section">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">
            Let's discuss your next data analytics project
          </p>
        </motion.div>

        <motion.div
          className="get-in-touch"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="get-in-touch-title">Get In Touch</h3>
          <p className="get-in-touch-text">
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can work together!
          </p>
        </motion.div>

        <div className="contact-cards">
          {contactItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <i className={`bx ${item.icon}`}></i>
              <h3>{item.label}</h3>
              <p>{item.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
