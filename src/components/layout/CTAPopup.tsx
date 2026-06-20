"use client";

import { useState, useEffect } from "react";
import { X, Calendar, MapPin, Wrench, User, Phone, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BUSINESS, PRIMARY_AREAS } from "@/lib/constants";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function CTAPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Split AC Repair",
    location: "Bandlaguda Jagir",
  });

  useEffect(() => {
    // Check if popup was already shown or dismissed in the current session
    const hasBeenShown = sessionStorage.getItem("rsg_cta_popup_shown");
    if (hasBeenShown) return;

    // Show popup after 15 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem("rsg_cta_popup_shown", "true");
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format WhatsApp message
    const message = `Hello RSG Refrigeration, I want to book an AC Service/Repair. Here are my details:
• *Name:* ${formData.name}
• *Phone:* ${formData.phone}
• *Service Required:* ${formData.service}
• *Location:* ${formData.location}

Please contact me to confirm the slot.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${BUSINESS.whatsapp}?text=${encodedMessage}`;

    // Redirect to WhatsApp
    window.open(whatsappLink, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          {/* Overlay to close */}
          <div className="absolute inset-0" onClick={handleClose} />

          {/* Popup Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-[#07132e] text-white border border-white/10 rounded-3xl w-full max-w-md overflow-hidden shadow-2xl relative z-10 p-6 md:p-8"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-white/50 hover:text-white bg-white/5 p-2 rounded-full transition-all active:scale-90"
              aria-label="Close Popup"
            >
              <X size={18} />
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5A623]/10 border border-[#F5A623]/20 text-[#F5A623] text-xs font-semibold mb-3">
                <CheckCircle size={12} />
                Same Day Quick AC Service
              </div>
              <h3 className="text-xl md:text-2xl font-bold font-heading text-white">
                Book Service on WhatsApp
              </h3>
              <p className="text-white/60 text-sm mt-1">
                Fill details below &amp; connect instantly with our technician
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40">
                    <User size={16} />
                  </span>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-1">
                  Mobile Number
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40">
                    <Phone size={16} />
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    required
                    pattern="[0-9]{10}"
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623] transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-1">
                  Select Service
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40">
                    <Wrench size={16} />
                  </span>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-[#07132e] border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623] transition-all appearance-none cursor-pointer"
                  >
                    <option value="Split AC Service">Split AC Service</option>
                    <option value="Split AC Repair">Split AC Repair</option>
                    <option value="Split AC Installation">Split AC Installation</option>
                    <option value="Cassette AC Service/Repair">Cassette AC Service</option>
                    <option value="Ductable AC Service/Repair">Ductable AC Service</option>
                    <option value="VRF / VRV System Service">VRF/VRV System Service</option>
                    <option value="AC Gas Charging">AC Gas Charging</option>
                    <option value="AC AMC Service">AC AMC Contract</option>
                  </select>
                  <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                    ▼
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-1">
                  Your Area in Hyderabad
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40">
                    <MapPin size={16} />
                  </span>
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-[#07132e] border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623] transition-all appearance-none cursor-pointer"
                  >
                    {PRIMARY_AREAS.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                    ▼
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-6 py-3.5 rounded-xl bg-[#22C55E] hover:bg-[#1eb052] text-white font-bold text-sm tracking-wide transition-all shadow-[0_4px_15px_rgba(34,197,94,0.3)] hover:shadow-[0_6px_20px_rgba(34,197,94,0.4)] flex items-center justify-center gap-2 active:scale-98"
              >
                <WhatsAppIcon size={18} />
                Send Inquiry via WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
