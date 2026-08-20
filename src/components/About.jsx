import { motion } from "framer-motion";

const stats = [
  { number: "6+", label: "Projects Built" },
  { number: "96.46%", label: "Best Model Accuracy" },
  { number: "2022", label: "Started BSCS" },
  { number: "3", label: "Languages Spoken" },
];

function About() {
  return (
    <section id="about">
      <motion.p
        className="eyebrow"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      <div className="about-grid">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          I'm a Computer Science undergraduate at the University of
          Management and Technology (UMT), Lahore, with hands-on experience
          across full-stack web development (MERN stack) and applied machine
          learning, including SVM classification and deep learning with
          ResNet34, EfficientNetB0 and attention mechanisms. I'm comfortable
          working across the stack — from building responsive, secure web
          applications to training and evaluating image-classification
          models — and I'm looking for a Machine Learning or Web Developer
          internship to apply these skills to real-world engineering
          problems.
        </motion.p>

        <motion.div
          className="stat-grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {stats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default About;
