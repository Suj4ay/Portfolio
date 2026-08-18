import React from 'react';
import { motion } from 'framer-motion';
import About from '../components/About';

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="pt-24 pb-12"
    >
      <About />
    </motion.div>
  );
}
