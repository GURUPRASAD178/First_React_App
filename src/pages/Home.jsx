import { motion } from 'framer-motion';

export default function Home() {
  return (
    <section className="home-container">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="eyebrow">Portfolio</p>
        <h1>Welcome to My Portfolio</h1>
        <p className="hero-description">
          Passionate about web development and user experience.
        </p>
        <h2>Hi! I am GURUPRASAD H D</h2>
      </motion.div>
    </section>
  );
}
