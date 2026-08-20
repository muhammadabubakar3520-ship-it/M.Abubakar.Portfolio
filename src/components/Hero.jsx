import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiLinkedin, FiMail } from "react-icons/fi";

const roles = [
  "Machine Learning Engineer",
  "MERN Stack Developer",
  "Computer Vision Enthusiast",
];

function useTypewriter(words, speed = 70, pause = 1400) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    } else {
      timeout = setTimeout(
        () => {
          setText((t) =>
            deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
          );
        },
        deleting ? speed / 2 : speed
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section className="hero" id="home">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Hi, I'm Muhammad Abubakar
      </motion.h1>

      <motion.p
        className="role-line"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {typed}
        <span className="cursor">|</span>
      </motion.p>

      <motion.p
        className="tagline"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Computer Science undergraduate building secure full-stack web
        applications and training deep learning models — from MERN-based
        platforms to attention-based image classifiers.
      </motion.p>

      <motion.div
        className="hero-actions"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <a
          className="btn btn-primary"
          href={`${import.meta.env.BASE_URL}resume.pdf`}
          download="Muhammad_Abubakar_Resume.pdf"
        >
          Download CV
        </a>
        <a className="btn btn-outline" href="#projects">
          View Projects
        </a>
      </motion.div>

      <motion.div
        className="social-row"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <a
          className="social-icon"
          href="https://www.linkedin.com/in/muhammad-abubakar-9699323b4"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FiLinkedin />
        </a>
        <a
          className="social-icon"
          href="mailto:muhammad.abubakar3520@gmail.com"
          aria-label="Email"
        >
          <FiMail />
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;
