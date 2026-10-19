
import { motion } from "framer-motion";

const experience = [
  {
    role: "Management Trainee Officer (MTO) – Information Technology",
    company: "Transsion Holdings (Infinix, TECNO & itel)",
    period: "July 2026 – Present",
    points: [
      "Support IT operations and troubleshoot hardware, software, and network-related issues across departments.",
      "Assist with system administration, user support, and IT asset management.",
      "Collaborate with senior IT professionals to implement and maintain enterprise IT infrastructure.",
    ],
  },
  {
    role: "Machine Learning Intern",
    company: "CodeAlpha",
    period: "November 2025 – January 2026",
    points: [
      "Developed a credit scoring and loan default prediction model using Random Forest, applying data cleaning, missing-value treatment, and feature engineering.",
      "Built a disease prediction system and compared Logistic Regression, SVM, and Random Forest classifiers.",
      "Developed a sales prediction model using Python, Pandas, NumPy, and Scikit-learn.",
      "Evaluated models using precision, recall, F1-score, confusion matrices, and ROC-AUC.",
    ],
  },
  {
    role: "Web Development Intern",
    company: "Hex Softwares",
    period: "February 2025 – April 2025",
    points: [
      "Developed responsive web applications using HTML, CSS, JavaScript, and Bootstrap.",
      "Built e-commerce, real estate listing, and task management applications.",
      "Applied responsive design principles to improve usability across different screen sizes.",
    ],
  },
];

const projects = [
  {
    role: "AI-Based Student Engagement Detection System",
    company: "Client Project | EfficientNetB0, XGBoost, TensorFlow",
    period: "May 2026 – June 2026",
    points: [
      "Developed a deep learning system to classify six classroom engagement states.",
      "Used EfficientNetB0 for deep feature extraction and XGBoost for classification, achieving 96.46% test accuracy.",
      "Evaluated model performance using confusion matrices, precision, recall, and F1-score.",
    ],
  },
  {
    role: "Plant Leaf Disease Classification",
    company: "Deep Learning | ResNet34, EfficientNetB0, CBAM",
    period: "Selected Project",
    points: [
      "Built a multi-class plant disease classifier using the PlantVillage dataset.",
      "Compared ResNet34, EfficientNetB0, and EfficientNetB0 with CBAM attention.",
      "Applied image preprocessing, data augmentation, and model optimization.",
    ],
  },
  {
    role: "Brain Tumor Detection Using Machine Learning",
    company: "Machine Learning | SVM Classifier",
    period: "Selected Project",
    points: [
      "Developed an MRI-based brain tumor detection model using an SVM classifier.",
      "Applied image preprocessing and feature extraction to distinguish tumor from non-tumor cases.",
      "Evaluated classification performance using machine learning techniques.",
    ],
  },
  {
    role: "Full-Stack Developer – Help Desk Ticketing Portal",
    company: "Independent Project | React, Vite, Tailwind CSS, Node.js",
    period: "Independent Project",
    points: [
      "Designed and developed a full-stack help desk application with a custom Node.js REST API.",
      "Implemented ticket lifecycle management and role-based access for employees, engineers, and administrators.",
      "Added token-based session authentication and salted-hash password storage.",
    ],
  },
  {
    role: "Full-Stack Developer – Gift Inventory Management System",
    company: "Independent Project | MERN Stack, MongoDB Atlas, Vercel",
    period: "Independent Project",
    points: [
      "Developed and deployed a web application to manage promoter records and gift inventory.",
      "Implemented promoter login and image-upload functionality.",
      "Integrated MongoDB Atlas for cloud database management and deployed the application on Vercel.",
    ],
  },
];

const itemVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

function ExperienceCard({ job, index }) {
  return (
    <motion.div
      className="card experience-card"
      key={job.role}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={itemVariant}
    >
      <div className="experience-header">
        <div>
          <h3>{job.role}</h3>
          <p className="experience-company">{job.company}</p>
        </div>
        <span className="experience-period">{job.period}</span>
      </div>

      <ul className="experience-points">
        {job.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </motion.div>
  );
}

function Experience() {
  return (
    <section id="experience">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Professional Experience
      </motion.h2>

      <div className="experience-list">
        {experience.map((job, index) => (
          <ExperienceCard
            job={job}
            index={index}
            key={job.role}
          />
        ))}
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Featured Projects
      </motion.h2>

      <div className="experience-list">
        {projects.map((job, index) => (
          <ExperienceCard
            job={job}
            index={index}
            key={job.role}
          />
        ))}
      </div>
    </section>
  );
}

export default Experience;
