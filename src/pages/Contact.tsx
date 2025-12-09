import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We'll respond within 24 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-primary">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-body text-xs tracking-[0.4em] uppercase text-accent block mb-4"
          >
            Get in Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl text-primary-foreground"
          >
            Contact Us
          </motion.h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-luxury bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeading
                subtitle="Send a Message"
                title="We'd Love to Hear From You"
                alignment="left"
              />
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary/50 border border-border focus:border-accent outline-none transition-colors font-body text-foreground"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary/50 border border-border focus:border-accent outline-none transition-colors font-body text-foreground"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary/50 border border-border focus:border-accent outline-none transition-colors font-body text-foreground"
                  >
                    <option value="">Select a topic</option>
                    <option value="reservation">Reservation Inquiry</option>
                    <option value="events">Private Events</option>
                    <option value="catering">Catering Services</option>
                    <option value="feedback">Feedback</option>
                    <option value="careers">Careers</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-secondary/50 border border-border focus:border-accent outline-none transition-colors font-body text-foreground resize-none"
                  />
                </div>

                <button type="submit" className="btn-luxury-filled inline-flex items-center gap-3">
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Location Card */}
              <div className="bg-primary p-8">
                <h3 className="font-display text-2xl text-primary-foreground mb-6">
                  Visit Us
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <div>
                      <p className="font-body text-xs text-primary-foreground/60 uppercase tracking-widest mb-1">
                        Address
                      </p>
                      <p className="font-body text-primary-foreground">
                        123 Luxury Avenue<br />
                        Manhattan, New York<br />
                        NY 10001
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-accent shrink-0" />
                    <div>
                      <p className="font-body text-xs text-primary-foreground/60 uppercase tracking-widest mb-1">
                        Phone
                      </p>
                      <a href="tel:+1234567890" className="font-body text-primary-foreground hover:text-accent transition-colors">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-accent shrink-0" />
                    <div>
                      <p className="font-body text-xs text-primary-foreground/60 uppercase tracking-widest mb-1">
                        Email
                      </p>
                      <a href="mailto:info@aurelius.com" className="font-body text-primary-foreground hover:text-accent transition-colors">
                        info@aurelius.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="border border-border p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-6 h-6 text-accent" />
                  <h3 className="font-display text-2xl text-foreground">
                    Opening Hours
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-body text-sm text-muted-foreground">Monday</span>
                    <span className="font-body text-sm text-foreground">Closed</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-body text-sm text-muted-foreground">Tuesday - Thursday</span>
                    <span className="font-body text-sm text-foreground">12PM - 10PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-body text-sm text-muted-foreground">Friday - Saturday</span>
                    <span className="font-body text-sm text-foreground">12PM - 11PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-body text-sm text-muted-foreground">Sunday</span>
                    <span className="font-body text-sm text-foreground">12PM - 9PM</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="text-center pt-4">
                <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-4">
                  Follow Us
                </p>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border border-border flex items-center justify-center text-foreground hover:border-accent hover:text-accent transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border border-border flex items-center justify-center text-foreground hover:border-accent hover:text-accent transition-all duration-300"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border border-border flex items-center justify-center text-foreground hover:border-accent hover:text-accent transition-all duration-300"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] bg-secondary/50 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
            <p className="font-display text-2xl text-foreground mb-2">
              123 Luxury Avenue, Manhattan
            </p>
            <p className="font-body text-sm text-muted-foreground">
              Interactive map integration available
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
