import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface CaseStudy {
  id: string;
  title: string;
  problem: string;
  solution: string;
  techStack: string[];
  results: {
    metric: string;
    improvement: string;
    impact: string;
  }[];
  image: string;
  demoLink?: string;
  githubLink?: string;
  featured: boolean;
}

const FeaturedProjects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const caseStudies: CaseStudy[] = [
    {
      id: "revenue-analytics",
      title: "Revenue Analytics Dashboard",
      problem:
        "H&S FMCG company had manual reporting processes taking 2 days, with inconsistent data across ERP and CRM systems.",
      solution:
        "Built automated T-SQL + Power BI pipeline with real-time KPI tracking, executive dashboards, and predictive revenue modeling.",
      techStack: ["SQL Server", "Power BI", "Python", "Pronto ERP", "CIN7 CRM"],
      results: [
        {
          metric: "Report Generation Time",
          improvement: "2 days → 1 hour",
          impact: "95% reduction",
        },
        {
          metric: "Staff Hours Saved",
          improvement: "20+ hours/week",
          impact: "Cost savings: $15K/year",
        },
        {
          metric: "Data Accuracy",
          improvement: "Manual → Automated",
          impact: "99.5% accuracy",
        },
      ],
      image: "/assets/img/project/revenue-dashboard.jpg",
      demoLink: "#",
      githubLink: "#",
      featured: true,
    },
    {
      id: "gan-project",
      title: "GAN Image Generation",
      problem:
        "Limited training data for computer vision models and need for data augmentation techniques.",
      solution:
        "Developed Generative Adversarial Networks (GANs) using PyTorch to generate synthetic images and augment training datasets.",
      techStack: ["Python", "PyTorch", "TensorFlow", "OpenCV", "NumPy"],
      results: [
        {
          metric: "Data Augmentation",
          improvement: "10x → 100x",
          impact: "10x more training data",
        },
        {
          metric: "Model Performance",
          improvement: "85% → 92%",
          impact: "7% accuracy increase",
        },
        {
          metric: "Training Time",
          improvement: "2 days → 6 hours",
          impact: "8x faster training",
        },
      ],
      image: "/assets/img/project/gan.jpg",
      demoLink: "/projects/gan.html",
      githubLink: "#",
      featured: true,
    },
    {
      id: "customer-segmentation",
      title: "Customer Segmentation & RFM Analysis",
      problem:
        "Marketing team couldn't identify high-value customers or optimize campaign targeting effectively.",
      solution:
        "Implemented K-means clustering and RFM analysis using Python, creating automated customer scoring and targeting recommendations.",
      techStack: ["Python", "Pandas", "Scikit-learn", "Tableau", "SQL"],
      results: [
        {
          metric: "Campaign ROI",
          improvement: "15% → 32%",
          impact: "113% increase",
        },
        {
          metric: "Customer Retention",
          improvement: "68% → 81%",
          impact: "19% improvement",
        },
        {
          metric: "Targeting Accuracy",
          improvement: "Manual → ML-driven",
          impact: "3x better precision",
        },
      ],
      image: "/assets/img/project/customer-segmentation.jpg",
      demoLink: "#",
      githubLink: "#",
      featured: true,
    },
  ];

  return (
    <section ref={ref} className="section container">
      <motion.div
        className="section-head"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Featured Case Studies</h2>
        <p className="section-subtitle">
          Real-world data analytics projects with measurable business impact
        </p>
      </motion.div>

      <div className="case-studies-grid">
        {caseStudies.map((study, index) => (
          <motion.div
            key={study.id}
            className="case-study-card"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="case-study-header">
              <div className="case-study-image">
                <img src={study.image} alt={study.title} />
                <div className="case-study-overlay">
                  <div className="case-study-links">
                    {study.demoLink && (
                      <a href={study.demoLink} className="case-study-link">
                        <i className="bx bx-show-alt"></i>
                        Demo
                      </a>
                    )}
                    {study.githubLink && (
                      <a href={study.githubLink} className="case-study-link">
                        <i className="bx bxl-github"></i>
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="case-study-content">
              <h3 className="case-study-title">{study.title}</h3>

              <div className="case-study-section">
                <h4 className="case-study-label">Problem</h4>
                <p className="case-study-text">{study.problem}</p>
              </div>

              <div className="case-study-section">
                <h4 className="case-study-label">Solution</h4>
                <p className="case-study-text">{study.solution}</p>
              </div>

              <div className="case-study-section">
                <h4 className="case-study-label">Tech Stack</h4>
                <div className="tech-stack">
                  {study.techStack.map((tech) => (
                    <span key={tech} className="tech-chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="case-study-section">
                <h4 className="case-study-label">Results</h4>
                <div className="results-grid">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="result-item">
                      <div className="result-metric">{result.metric}</div>
                      <div className="result-improvement">
                        {result.improvement}
                      </div>
                      <div className="result-impact">{result.impact}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
