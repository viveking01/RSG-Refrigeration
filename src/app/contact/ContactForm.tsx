"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const SERVICE_OPTIONS = [
  "Split AC Repair",
  "Split AC Service",
  "Split AC Installation",
  "Split AC Gas Charging",
  "Split AC Deep Cleaning",
  "Split AC AMC",
  "Cassette AC Service",
  "Ductable AC Service",
  "VRF/VRV AC Service",
  "Other",
];

const AREA_OPTIONS = [
  "Bandlaguda Jagir",
  "Narsingi",
  "Kokapet",
  "Gachibowli",
  "Financial District",
  "Madhapur",
  "Hitech City",
  "Kondapur",
  "Rajendranagar",
  "Attapur",
  "Hydershakote",
  "Manikonda",
  "Shamshabad",
  "Other",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    area: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // WhatsApp redirect with form data
    const message = encodeURIComponent(
      `*New Service Request — RSG Refrigeration Website*\n\n` +
      `👤 Name: ${form.name}\n` +
      `📞 Phone: ${form.phone}\n` +
      `🔧 Service: ${form.service}\n` +
      `📍 Area: ${form.area}\n` +
      `💬 Message: ${form.message || "No additional message"}\n\n` +
      `_Sent from rsgrefrigeration.com_`
    );

    setTimeout(() => {
      setStatus("success");
      window.open(`https://wa.me/${BUSINESS.whatsapp}?text=${message}`, "_blank");
    }, 800);
  };

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-[#22C55E]/10 flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} className="text-[#22C55E]" />
        </div>
        <h3 className="text-xl font-bold text-[#111827] mb-2">Message Sent!</h3>
        <p className="text-gray-500 mb-6">
          Your request has been sent via WhatsApp. We'll respond within 30 minutes.
        </p>
        <button
          onClick={() => { setStatus("idle"); setForm({ name: "", phone: "", service: "", area: "", message: "" }); }}
          className="btn-outline-primary text-sm px-6 py-2.5"
        >
          Send Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="contact-name">
            Your Name *
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#0B1F66] focus:ring-2 focus:ring-[#0B1F66]/10 transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="contact-phone">
            Phone Number *
          </label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            placeholder="+91 98765 43210"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#0B1F66] focus:ring-2 focus:ring-[#0B1F66]/10 transition-all"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="contact-service">
            Service Required *
          </label>
          <select
            id="contact-service"
            name="service"
            value={form.service}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#0B1F66] focus:ring-2 focus:ring-[#0B1F66]/10 transition-all bg-white"
          >
            <option value="">Select service...</option>
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="contact-area">
            Your Area *
          </label>
          <select
            id="contact-area"
            name="area"
            value={form.area}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#0B1F66] focus:ring-2 focus:ring-[#0B1F66]/10 transition-all bg-white"
          >
            <option value="">Select area...</option>
            {AREA_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="contact-message">
          Additional Details
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="Describe your AC problem or any additional information..."
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#0B1F66] focus:ring-2 focus:ring-[#0B1F66]/10 transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#0B1F66] text-white font-bold text-base hover:-translate-y-0.5 transition-all shadow-lg disabled:opacity-60 disabled:translate-y-0"
        id="contact-submit-btn"
      >
        {status === "loading" ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={18} />
            Send via WhatsApp
          </>
        )}
      </button>

      <p className="text-center text-gray-400 text-xs">
        Your message will be sent directly via WhatsApp for fastest response.
      </p>
    </form>
  );
}
