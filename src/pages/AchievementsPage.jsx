import React from 'react';
import { motion } from 'framer-motion';
import Achievements from '../components/Achievements';

export default function AchievementsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="pt-24 pb-12"
    >
      <Achievements />
    </motion.div>
  );
}
