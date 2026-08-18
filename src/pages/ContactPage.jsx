import React from 'react';
import { motion } from 'framer-motion';
import ContactSection from '../components/ContactSection';
import SocialSection from '../components/SocialSection';

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="pt-24 pb-12 space-y-12"
    >
      <ContactSection />
      <SocialSection />
    </motion.div>
  );
}
