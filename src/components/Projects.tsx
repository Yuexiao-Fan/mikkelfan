import React from "react";
import { motion } from "framer-motion";
import FeaturedProjects from "./FeaturedProjects";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Machine Learning Pipeline",
      description:
        "Automated ML pipeline for customer segmentation and predictive analytics",
      image: "/assets/img/project/ml.jpg",
      link: "/projects/ml.html",
    },
    {
      title: "GAN Project",
      description:
        "Generative Adversarial Networks for image generation and data augmentation",
      image: "/assets/img/project/gan.jpg",
      link: "/projects/gan.html",
    },
    {
      title: "Data Analytics Blog",
      description:
        "Personal blog sharing insights on data analytics and business intelligence",
      image: "/assets/img/project/blog.jpg",
      link: "/projects/blog.html",
    },
    {
      title: "IRAS Data Analysis",
      description: "Tax data analysis and visualization for government agency",
      image: "/assets/img/project/iras.jpeg",
      link: "/projects/iras.html",
    },
    {
      title: "Twitter Analysis",
      description: "Social media sentiment analysis and trend prediction",
      image: "/assets/img/project/twitteranalysis.jpg",
      link: "/projects/twitteranalysis.html",
    },
    {
      title: "Music Player",
      description: "Interactive music player with recommendation system",
      image: "/assets/img/project/musicplayer.jpg",
      link: "/projects/musicplayer.html",
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
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Data analytics projects showcasing technical skills and business
          impact
        </p>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card glass enhanced-project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="project-overlay">
                <div className="project-overlay-content">
                  <a href={project.link} className="project-link-btn">
                    <i className="bx bx-show-alt"></i>
                    View Details
                  </a>
                  <a href={project.link} className="project-link-btn secondary">
                    <i className="bx bx-link-external"></i>
                    Open Project
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-category">
                  {project.title === "GAN Project" && "Computer Vision"}
                  {project.title === "Machine Learning Pipeline" &&
                    "Data Science"}
                  {project.title === "Data Analytics Blog" &&
                    "Content Creation"}
                  {project.title === "IRAS Data Analysis" &&
                    "Government Analytics"}
                  {project.title === "Twitter Analysis" &&
                    "Social Media Analytics"}
                  {project.title === "Music Player" && "Web Application"}
                </div>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech-stack">
                {project.title === "GAN Project" && (
                  <>
                    <span className="tech-tag">TensorFlow</span>
                    <span className="tech-tag">Python</span>
                    <span className="tech-tag">Keras</span>
                    <span className="tech-tag">NumPy</span>
                  </>
                )}
                {project.title === "Machine Learning Pipeline" && (
                  <>
                    <span className="tech-tag">Python</span>
                    <span className="tech-tag">Scikit-learn</span>
                    <span className="tech-tag">Pandas</span>
                    <span className="tech-tag">SQL</span>
                  </>
                )}
                {project.title === "Data Analytics Blog" && (
                  <>
                    <span className="tech-tag">HTML</span>
                    <span className="tech-tag">CSS</span>
                    <span className="tech-tag">JavaScript</span>
                    <span className="tech-tag">Analytics</span>
                  </>
                )}
                {project.title === "IRAS Data Analysis" && (
                  <>
                    <span className="tech-tag">Python</span>
                    <span className="tech-tag">Tableau</span>
                    <span className="tech-tag">SQL</span>
                    <span className="tech-tag">Government Data</span>
                  </>
                )}
                {project.title === "Twitter Analysis" && (
                  <>
                    <span className="tech-tag">Python</span>
                    <span className="tech-tag">NLP</span>
                    <span className="tech-tag">Sentiment Analysis</span>
                    <span className="tech-tag">API</span>
                  </>
                )}
                {project.title === "Music Player" && (
                  <>
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">JavaScript</span>
                    <span className="tech-tag">Web Audio</span>
                    <span className="tech-tag">UI/UX</span>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <FeaturedProjects />
    </section>
  );
};

export default Projects;
