import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Web Development",
    skills: [
      { name: "React.js", level: 88 },
      { name: "JavaScript", level: 85 },
      { name: "Node.js / Express.js", level: 80 },
      { name: "MongoDB", level: 78 },
      { name: "HTML / CSS", level: 90 },
    ],
  },
  {
    title: "Machine Learning",
    skills: [
      { name: "Python", level: 88 },
      { name: "Deep Learning", level: 82 },
      { name: "Computer Vision", level: 80 },
      { name: "SVM / Classical ML", level: 78 },
      { name: "Transfer Learning", level: 80 },
    ],
  },
  {
    title: "Tools & Languages",
    skills: [
      { name: "C++ / C", level: 75 },
      { name: "Git", level: 80 },
      { name: "VS Code", level: 90 },
      { name: "Google Colab / Jupyter", level: 85 },
    ],
  },
];

const barVariant = {
  hidden: { width: 0 },
  visible: (level) => ({
    width: `${level}%`,
    transition: { duration: 1, ease: "easeOut" },
  }),
};

function Skills() {
  return (
    <section id="skills">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>

      <div className="skills-groups">
        {skillGroups.map((group) => (
          <div className="skills-group" key={group.title}>
            <h3>{group.title}</h3>
            {group.skills.map((skill) => (
              <div className="skill-row" key={skill.name}>
                <div className="skill-row-top">
                  <span>{skill.name}</span>
                  <span className="skill-pct">{skill.level}%</span>
                </div>
                <div className="skill-bar-track">
                  <motion.div
                    className="skill-bar-fill"
                    custom={skill.level}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={barVariant}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
