                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
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
