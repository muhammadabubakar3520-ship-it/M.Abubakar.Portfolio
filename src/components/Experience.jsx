
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
    role: "Full-Stack Developer – Gift Inventory Management System",
    company: "Independent Project",
    period: "2026",
    points: [
      "Developed and deployed a web-based gift inventory management system to manage inventory records and promoter-related data.",
      "Implemented promoter login functionality and secure password-hashing practices for authentication.",
      "Integrated image uploads and database storage using MongoDB Atlas.",
      "Built and deployed the application using a modern web development stack and Vercel.",
    ],
  },
  {
    role: "Full-Stack Developer – IT Help Desk Management System",
    company: "Independent Project",
    period: "2026",
    points: [
      "Designed and developed a full-stack IT help desk application using React.js, Vite, Tailwind CSS, Node.js, and REST APIs.",
      "Implemented role-based access for employees, IT engineers, and administrators.",
      "Developed ticket creation, assignment, status tracking, comments, and ticket lifecycle management features.",
      "Built dashboards and administrative functionality to support IT operations and ticket management.",
      "Deployed the frontend on Vercel and configured the backend API using Render.",
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
      "Built e-commerce, real estate listing, and task management web applications.",
      "Applied responsive design principles to improve usability across different screen sizes.",
    ],
  },
];

const itemVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
    },
  }),
};

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
                <p className="experience-company">
                  {job.company}
                </p>
              </div>

              <span className="experience-period">
                {job.period}
              </span>
            </div>

            <ul className="experience-points">
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
