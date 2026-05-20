import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Clean import compatibility for standard React environments
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      detail: 'hello@codebridge.my',
      link: 'mailto:hello@codebridge.my',
    },
    {
      icon: Phone,
      title: 'Phone',
      detail: '+60 3-1234 5678',
      link: 'tel:+60312345678',
    },
    {
      icon: MapPin,
      title: 'Office',
      detail: 'Kuala Lumpur, Malaysia',
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-[#F8F9FA]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Section Heading Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-xl text-[#64748B]">
            Ready to transform your ideas into reality? Let's talk.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT PANEL: Contact Information (Slide-in from Left x: -20) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-4">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-[#64748B] leading-relaxed">
                Whether you're a startup looking to launch quickly, an enterprise needing scalable solutions,
                or an organization seeking AI-powered platforms, we're here to help you succeed.
              </p>
            </div>

            {/* Individual Info Rows with Staggered Appearance (0.1s delays) */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-4"
                >
                  {/* Solid Red Content Icon Containers matching mockup branding exactly */}
                  <div className="w-12 h-12 rounded-xl bg-[#D30000] flex items-center justify-center flex-shrink-0 shadow-md">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0F172A] text-base">{item.title}</div>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-[#64748B] hover:text-[#D30000] transition-colors font-medium"
                      >
                        {item.detail}
                      </a>
                    ) : (
                      <div className="text-[#64748B] font-medium">{item.detail}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Business Hours Separator Layout Section Block */}
            <div className="pt-10 border-t border-gray-200/80">
              <h4 className="font-bold text-[#0F172A] text-lg mb-5">Business Hours</h4>
              <div className="space-y-4 max-w-md text-[#64748B] font-medium">
                <div className="flex justify-between items-center">
                  <span>Monday - Friday</span>
                  <span className="text-[#0F172A] font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Saturday</span>
                  <span className="text-[#0F172A] font-semibold">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Sunday</span>
                  <span className="text-gray-400 font-semibold">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT PANEL: Floating Contact Form Wrapper (Slide-in from Right x: 20) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-10 shadow-xl shadow-slate-100/70 border border-gray-100/50">
              <div className="space-y-6">
                
                {/* Full Name Input Field Row */}
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-[#0F172A] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 bg-[#F8F9FA] border border-gray-200 rounded-xl font-medium placeholder-gray-400 text-[#0F172A] outline-none transition-all duration-200 focus:bg-white focus:ring-4 focus:ring-red-500/10 focus:border-[#D30000]"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Address Input Field Row */}
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-[#0F172A] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 bg-[#F8F9FA] border border-gray-200 rounded-xl font-medium placeholder-gray-400 text-[#0F172A] outline-none transition-all duration-200 focus:bg-white focus:ring-4 focus:ring-red-500/10 focus:border-[#D30000]"
                    placeholder="john@company.com"
                  />
                </div>

                {/* Company Name Input Field Row */}
                <div>
                  <label htmlFor="company" className="block text-sm font-bold text-[#0F172A] mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-[#F8F9FA] border border-gray-200 rounded-xl font-medium placeholder-gray-400 text-[#0F172A] outline-none transition-all duration-200 focus:bg-white focus:ring-4 focus:ring-red-500/10 focus:border-[#D30000]"
                    placeholder="Your Company"
                  />
                </div>

                {/* Phone Number Input Field Row */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-[#0F172A] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-[#F8F9FA] border border-gray-200 rounded-xl font-medium placeholder-gray-400 text-[#0F172A] outline-none transition-all duration-200 focus:bg-white focus:ring-4 focus:ring-red-500/10 focus:border-[#D30000]"
                    placeholder="+60 12-345 6789"
                  />
                </div>

                {/* Message Textarea Input Field Row */}
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-[#0F172A] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3.5 bg-[#F8F9FA] border border-gray-200 rounded-xl font-medium placeholder-gray-400 text-[#0F172A] outline-none transition-all duration-200 focus:bg-white focus:ring-4 focus:ring-red-500/10 focus:border-[#D30000] resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Submit Action Button Block Area with shadow intensify, custom scale press & sliding icon properties */}
                <motion.button
                  type="submit"
                  whileHover={{ 
                    scale: 1.01,
                    shadow: "0px 20px 30px rgba(211, 0, 0, 0.25)"
                  }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full mt-4 px-8 py-4 bg-[#D30000] text-white rounded-xl font-bold shadow-lg shadow-red-500/15 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer text-base"
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1.5 group-hover:-translate-y-0.5 transition-transform duration-300 ease-out" />
                </motion.button>

                <p className="text-xs text-gray-400 font-medium text-center mt-4">
                  We'll get back to you within 24 hours
                </p>
              </div>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}