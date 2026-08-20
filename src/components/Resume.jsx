import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

function Resume() {
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

  return (
    <section id="resume">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Resume
      </motion.h2>

      <motion.div
        className="resume-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="resume-download">
          <a
            className="btn btn-primary"
            href={resumeUrl}
            download="Muhammad_Abubakar_Resume.pdf"
          >
            <FiDownload /> Download PDF
          </a>
        </div>

        <iframe src={resumeUrl} width="100%" height="600px" title="Resume"></iframe>
      </motion.div>
    </section>
  );
}

export default Resume;
