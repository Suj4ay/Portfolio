import React from 'react';
import { motion } from 'framer-motion';
import DsaSection from '../components/DsaSection';

export default function DsaPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="pt-24 pb-12"
    >
      <DsaSection />
    </motion.div>
  );
}
