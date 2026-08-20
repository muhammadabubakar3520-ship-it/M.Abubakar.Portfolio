import { motion } from "framer-motion";

const projects = [
  {
    name: "Intelligent Voting Platform with AI Integration",
    description:
      "Secure full-stack digital voting platform (MERN) with multi-layer biometric security — CNIC validation, facial recognition, fingerprint scanning, and OTP-based multi-factor authentication.",
    tags: ["React", "Node.js", "MongoDB", "MFA"],
  },
  {
    name: "Hospital Management System",
    description:
      "Full-stack hospital management web app with patient records, doctor profiles, appointment scheduling, and real-time updates.",
    tags: ["React", "Node.js", "MongoDB", "REST API"],
  },
  {
    name: "Plant Leaf Disease Classification Using Deep Learning",
    description:
      "Multi-class plant disease classifier on the Plant Village dataset comparing ResNet34, EfficientNetB0, and CBAM-attention EfficientNetB0.",
    tags: ["PyTorch", "ResNet34", "EfficientNetB0", "CBAM"],
  },
  {
    name: "Brain Tumor Detection using Machine Learning",
    description:
      "MRI-based brain tumor detection using an SVM classifier with image preprocessing and feature extraction.",
    tags: ["Python", "SVM", "OpenCV"],
  },
  {
    name: "AI-Based Student Engagement Detection System",
    description:
      "Classifies six classroom engagement states via transfer learning with EfficientNetB0 and XGBoost, achieving 96.46% testing accuracy.",
    tags: ["EfficientNetB0", "XGBoost", "TensorFlow"],
  },
  {
    name: "Tic Tac Toe Game on Console",
    description:
      "Two-player console game in Assembly (EMU 8086) handling turns, input validation, and win/draw logic.",
    tags: ["Assembly", "EMU 8086"],
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

function Projects() {
  return (
    <section id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>

      <div className="projects">
        {projects.map((project, index) => (
          <motion.div
            className="card"
            key={project.name}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariant}
          >
            <h3>{project.name}</h3>
            <p className="card-desc">{project.description}</p>

            <div className="tag-row">
              {project.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
