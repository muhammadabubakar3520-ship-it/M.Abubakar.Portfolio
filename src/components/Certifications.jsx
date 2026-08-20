import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";

const certifications = [
  {
    name: "Machine Learning Internship",
    issuer: "CodeAlpha",
  },
  {
    name: "Web Development Internship",
    issuer: "Hex Softwares",
  },
  {
    name: "React Development",
    issuer: "",
  },
  {
    name: "Python",
    issuer: "",
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

function Certifications() {
  return (
    <section id="certifications">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Certifications
      </motion.h2>

      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <motion.div
            className="card certification-card"
            key={cert.name}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariant}
          >
            <FiAward className="certification-icon" />
            <div>
              <h3>{cert.name}</h3>
              {cert.issuer && (
                <p className="certification-issuer">{cert.issuer}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
