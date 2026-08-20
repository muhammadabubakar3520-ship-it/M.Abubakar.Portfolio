import { motion } from "framer-motion";

const experience = [
  {
    role: "Management Trainee Officer (MTO) – Information Technology",
    company: "Transsion Holdings (Infinix, TECNO & itel)",
    period: "July 2026 – Present",
    points: [
      "Supporting IT operations and providing technical assistance across departments.",
      "Troubleshooting hardware, software, and network-related issues to ensure smooth business operations.",
      "Installing, configuring, and maintaining computer systems, operating systems, and business applications.",
      "Assisting with system administration, user account management, and IT asset management.",
      "Collaborating with senior IT professionals to implement and maintain IT infrastructure.",
      "Monitoring system performance, resolving technical issues, and documenting support activities.",
      "Following IT security policies and contributing to continuous process improvements.",
      "Gaining hands-on experience with enterprise IT environments, technical support, and infrastructure management.",
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
        ))}
      </div>
    </section>
  );
}

export default Experience;
