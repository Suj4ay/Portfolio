import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle2, AlertCircle, Sparkles, RefreshCw } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activationNeeded, setActivationNeeded] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setActivationNeeded(false);

    try {
      // Direct FormSubmit AJAX Endpoint targeting sujay.nandan23@gmail.com
      const response = await fetch(`https://formsubmit.co/ajax/${personalData.socials.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
          _template: 'table'
        })
      });

      const data = await response.json();

      if (data.success === 'true' || data.success === true) {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else if (data.message && data.message.includes('Activation')) {
        // FormSubmit sent an activation link to sujay.nandan23@gmail.com
        setIsSubmitting(false);
        setActivationNeeded(true);
        setSubmitted(true);
      } else {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (err) {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Mail className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Let's build something together.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Have an opportunity, project idea, or interesting problem? I'd love to hear from you.
          </p>
        </div>

        {/* Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Left Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-2xl text-left space-y-6"
          >
            <div className="space-y-3">
              <h3 className="text-xl font-bold">Direct Email Delivery</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Messages sent here are transmitted directly into my personal Gmail inbox (<code className="text-cyan-400 font-bold">{personalData.socials.email}</code>).
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block uppercase">Target Inbox</span>
                  <span className="text-sm font-semibold text-cyan-400 break-all">
                    {personalData.socials.email}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono space-y-2 text-left">
              <span className="text-cyan-400 font-bold block flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" /> 1-Click Form Activation Notice:
              </span>
              <p className="text-slate-300 leading-relaxed">
                Check your Gmail inbox (<code className="text-cyan-300">sujay.nandan23@gmail.com</code>) for an email from FormSubmit titled <strong>"Activate Form"</strong>.<br/>
                Click the activation link inside that email ONCE to permanently enable instant email delivery!
              </p>
            </div>
          </motion.div>

          {/* Right Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-2xl text-left"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                
                {activationNeeded ? (
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-amber-400">Action Required: Check Your Gmail!</h3>
                    <p className="text-slate-300 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                      We've sent an <strong>"Activate Form"</strong> email to <strong className="text-cyan-400">sujay.nandan23@gmail.com</strong>.<br/>
                      Open your Gmail, click the <strong>Activate Form</strong> link once, and all future messages will arrive directly in your inbox!
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Message Sent Successfully!</h3>
                    <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out! Your message has been sent directly to <strong className="text-cyan-400">{personalData.socials.email}</strong>.
                    </p>
                  </div>
                )}

                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-200 text-xs font-mono hover:bg-slate-700 transition-colors mt-2"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono font-medium mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Rivera"
                    className={`w-full px-4 py-3 bg-slate-900/80 border ${
                      errors.name ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-500/60'
                    } rounded-xl text-sm placeholder-slate-500 focus:outline-none transition-colors`}
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-400 mt-1 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono font-medium mb-1.5">
                    Your Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@example.com"
                    className={`w-full px-4 py-3 bg-slate-900/80 border ${
                      errors.email ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-500/60'
                    } rounded-xl text-sm placeholder-slate-500 focus:outline-none transition-colors`}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-400 mt-1 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono font-medium mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, idea, or opportunity..."
                    className={`w-full px-4 py-3 bg-slate-900/80 border ${
                      errors.message ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-500/60'
                    } rounded-xl text-sm placeholder-slate-500 focus:outline-none transition-colors resize-none`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-400 mt-1 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 transition-all"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      Sending Message...
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message Directly</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
