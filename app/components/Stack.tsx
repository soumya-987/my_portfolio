'use client';

import { motion } from 'framer-motion';

export default function Stack() {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Tailwind CSS',
    'Git & GitHub',
  ];

  return (
    <section className="stack">
      <h2 className="stack-title">Tech Stack</h2>

      <ul className="stack-list">
        {skills.map((skill, index) => (
          <motion.li
            key={skill}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ease: 'easeOut',duration:0.18}}
            whileHover={{
    y: -6,
    boxShadow: "0 10px 30px rgba(229,162,36,0.35)",
    backgroundColor: "rgba(245, 215, 110, 0.2)",
    borderColor: "#e5a224",
  }}

          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

