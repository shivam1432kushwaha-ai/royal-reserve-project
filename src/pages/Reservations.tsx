import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Calendar, Clock, Users, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Reservations = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    occasion: "",
    requests: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Reservation Request Received",
      description: "Our team will contact you shortly to confirm your reservation.",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
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
            Table Reservations
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl text-primary-foreground"
          >
            Reserve Your Table
          </motion.h1>
        </div>
      </section>

      {/* Reservation Form Section */}
      <section className="section-luxury bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <SectionHeading
                subtitle="Make a Reservation"
                title="Book Your Experience"
                alignment="left"
              />
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary/50 border border-border focus:border-accent outline-none transition-colors font-body text-foreground"
                      placeholder="John Smith"
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
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary/50 border border-border focus:border-accent outline-none transition-colors font-body text-foreground"
                      placeholder="+1 (234) 567-890"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
                      Number of Guests *
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-secondary/50 border border-border focus:border-accent outline-none transition-colors font-body text-foreground"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? "Guest" : "Guests"}
                        </option>
                      ))}
                      <option value="9+">9+ Guests (Private Dining)</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary/50 border border-border focus:border-accent outline-none transition-colors font-body text-foreground"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
                      Preferred Time *
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary/50 border border-border focus:border-accent outline-none transition-colors font-body text-foreground"
                    >
                      <option value="">Select Time</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="12:30">12:30 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="13:30">1:30 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="18:30">6:30 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="19:30">7:30 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="20:30">8:30 PM</option>
                      <option value="21:00">9:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
                    Special Occasion
                  </label>
                  <select
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-secondary/50 border border-border focus:border-accent outline-none transition-colors font-body text-foreground"
                  >
                    <option value="">None</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="engagement">Engagement</option>
                    <option value="business">Business Dinner</option>
                    <option value="other">Other Celebration</option>
                  </select>
                </div>

                <div>
                  <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
                    Special Requests
                  </label>
                  <textarea
                    name="requests"
                    value={formData.requests}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-secondary/50 border border-border focus:border-accent outline-none transition-colors font-body text-foreground resize-none"
                    placeholder="Dietary restrictions, seating preferences, or any other requests..."
                  />
                </div>

                <button type="submit" className="btn-luxury-filled w-full md:w-auto">
                  Request Reservation
                </button>
              </form>
            </motion.div>

            {/* Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Contact Card */}
              <div className="bg-primary p-8">
                <h3 className="font-display text-2xl text-primary-foreground mb-6">
                  Contact Us Directly
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Phone className="w-5 h-5 text-accent" />
                    <div>
                      <p className="font-body text-xs text-primary-foreground/60 uppercase tracking-widest">
                        Reservations
                      </p>
                      <a href="tel:+1234567890" className="font-body text-primary-foreground hover:text-accent transition-colors">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <div>
                      <p className="font-body text-xs text-primary-foreground/60 uppercase tracking-widest">
                        Location
                      </p>
                      <p className="font-body text-sm text-primary-foreground">
                        123 Luxury Avenue<br />
                        Manhattan, NY 10001
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="border border-border p-8">
                <h3 className="font-display text-2xl text-foreground mb-6">
                  Operating Hours
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Clock className="w-5 h-5 text-accent" />
                    <div>
                      <p className="font-body text-xs text-muted-foreground uppercase tracking-widest mb-1">
                        Lunch
                      </p>
                      <p className="font-body text-sm text-foreground">
                        Tue - Sun: 12:00 PM - 3:00 PM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="w-5 h-5 text-accent" />
                    <div>
                      <p className="font-body text-xs text-muted-foreground uppercase tracking-widest mb-1">
                        Dinner
                      </p>
                      <p className="font-body text-sm text-foreground">
                        Tue - Thu: 6:00 PM - 10:00 PM<br />
                        Fri - Sat: 6:00 PM - 11:00 PM<br />
                        Sun: 6:00 PM - 9:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="h-64 bg-secondary/50 flex items-center justify-center border border-border">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-accent mx-auto mb-2" />
                  <p className="font-body text-sm text-muted-foreground">
                    Interactive Map
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Reservations;
