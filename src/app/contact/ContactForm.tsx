"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle, User, Phone, Wrench, MapPin, MessageSquare } from "lucide-react";
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
      <div className="text-center py-12 px-4">
        <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6 shadow-inner animate-scale-in">
          <CheckCircle size={40} className="text-[#22C55E]" />
        </div>
        <h3 className="text-2xl font-bold text-[#111827] mb-3">Message Sent Successfully!</h3>
        <p className="text-gray-500 max-w-sm mx-auto mb-8 text-sm md:text-base">
          Your request has been successfully generated. We will redirect you to WhatsApp to connect with our dispatch team.
        </p>
        <button
          onClick={() => { setStatus("idle"); setForm({ name: "", phone: "", service: "", area: "", message: "" }); }}
          className="btn-outline-primary text-sm px-8 py-3"
        >
          Send Another Request
        </button>
      </div>
    );
  }

  const inputBaseClass = "w-full pl-12 pr-4 py-3.5 bg-slate-50/70 hover:bg-slate-100/50 focus:bg-white text-gray-800 placeholder-gray-400 rounded-2xl border border-gray-200 text-sm focus:outline-none focus:border-[#0B1F66] focus:ring-4 focus:ring-[#0B1F66]/8 transition-all shadow-sm focus:shadow-md";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2" htmlFor="contact-name">
            Your Name *
          </label>
          <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none group-focus-within:text-[#0B1F66] transition-colors">
              <User size={16} />
            </div>
            <input
              id="contact-name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              className={inputBaseClass}
              style={{ paddingLeft: "3rem" }}
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2" htmlFor="contact-phone">
            Phone Number *
          </label>
          <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none group-focus-within:text-[#0B1F66] transition-colors">
              <Phone size={16} />
            </div>
            <input
              id="contact-phone"
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="10-digit mobile number"
              className={inputBaseClass}
              style={{ paddingLeft: "3rem" }}
            />
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2" htmlFor="contact-service">
            Service Required *
          </label>
          <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none group-focus-within:text-[#0B1F66] transition-colors">
              <Wrench size={16} />
            </div>
            <select
              id="contact-service"
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              className={`${inputBaseClass} appearance-none bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22%2394a3b8%22%20stroke-width%3D%222%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22M19.5%208.25l-7.5%207.5-7.5-7.5%22%20%2F%3E%3C%2Fsvg%3E')] bg-[length:16px] bg-[position:right_16px_center] bg-no-repeat pr-10`}
              style={{ paddingLeft: "3rem" }}
            >
              <option value="">Select service...</option>
              {SERVICE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2" htmlFor="contact-area">
            Your Area *
          </label>
          <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none group-focus-within:text-[#0B1F66] transition-colors">
              <MapPin size={16} />
            </div>
            <select
              id="contact-area"
              name="area"
              value={form.area}
              onChange={handleChange}
              required
              className={`${inputBaseClass} appearance-none bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22%2394a3b8%22%20stroke-width%3D%222%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22M19.5%208.25l-7.5%207.5-7.5-7.5%22%20%2F%3E%3C%2Fsvg%3E')] bg-[length:16px] bg-[position:right_16px_center] bg-no-repeat pr-10`}
              style={{ paddingLeft: "3rem" }}
            >
              <option value="">Select area...</option>
              {AREA_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2" htmlFor="contact-message">
          Additional Details
        </label>
        <div className="relative group">
          <div className="absolute left-4 top-4 text-gray-400 pointer-events-none group-focus-within:text-[#0B1F66] transition-colors">
            <MessageSquare size={16} />
          </div>
          <textarea
            id="contact-message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            placeholder="Describe your AC problem or any additional information..."
            className={`${inputBaseClass} pl-12 resize-none`}
            style={{ paddingLeft: "3rem" }}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-gradient-to-r from-[#0B1F66] to-[#1a3a8f] text-white font-bold text-base hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#0B1F66]/15 transition-all duration-300 disabled:opacity-60 disabled:translate-y-0 cursor-pointer active:translate-y-0 active:scale-[0.99] border-none"
        id="contact-submit-btn"
      >
        {status === "loading" ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending Request...
          </>
        ) : (
          <>
            <Send size={16} />
            Send via WhatsApp
          </>
        )}
      </button>

      <p className="text-center text-gray-400 text-xs mt-3">
        Your message will be sent directly via WhatsApp for fastest response.
      </p>
    </form>
  );
}
