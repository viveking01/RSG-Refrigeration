import Link from "next/link";
import { Phone, Mail, MapPin, Clock, AirVent } from "lucide-react";
import { BUSINESS, BRANDS } from "@/lib/constants";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import Image from "next/image";
import { AC_CATEGORIES } from "@/lib/data/services";
import { LOCATION_DATA } from "@/lib/data/locations";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#07132e] text-white">
      {/* Main Footer */}
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <Image
                src="/images/logo.webp"
                alt="RSG Refrigeration Logo"
                width={200}
                height={54}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Hyderabad's trusted AC repair, installation, and maintenance specialists. Fast, reliable, and affordable HVAC services across 40+ areas.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href={BUSINESS.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center hover:bg-[#F5A623] transition-colors"
                aria-label="Facebook"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a
                href={BUSINESS.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center hover:bg-[#F5A623] transition-colors"
                aria-label="Instagram"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a
                href={BUSINESS.socialMedia.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center hover:bg-[#F5A623] transition-colors"
                aria-label="Twitter"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#F5A623] mb-5">Our Services</h3>
            <ul className="space-y-3">
              {AC_CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/services/${cat.slug}`}
                    className="text-white/60 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block"
                  >
                    {cat.title}
                  </Link>
                </li>
              ))}
              <li><Link href="/services/split-ac/installation" className="text-white/60 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block">Split AC Installation</Link></li>
              <li><Link href="/services/split-ac/repair" className="text-white/60 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block">Split AC Repair</Link></li>
              <li><Link href="/services/split-ac/gas-charging" className="text-white/60 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block">AC Gas Charging</Link></li>
              <li><Link href="/services/split-ac/deep-cleaning" className="text-white/60 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block">AC Deep Cleaning</Link></li>
              <li><Link href="/services/split-ac/amc" className="text-white/60 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block">AC AMC Services</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#F5A623] mb-5">Service Areas</h3>
            <ul className="space-y-3">
              {LOCATION_DATA.slice(0, 8).map((loc) => (
                <li key={loc.slug}>
                  <Link
                    href={`/service-areas/${loc.slug}`}
                    className="text-white/60 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block"
                  >
                    AC Service {loc.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/service-areas"
                  className="text-[#F5A623] hover:text-[#f7b84a] text-sm font-medium transition-colors"
                >
                  View All Areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#F5A623] mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href={BUSINESS.callUrl} className="flex items-start gap-3 group">
                  <Phone size={16} className="mt-0.5 text-[#F5A623] shrink-0" />
                  <div>
                    <div className="text-xs text-white/40 mb-0.5">Phone / WhatsApp</div>
                    <div className="text-white/80 text-sm group-hover:text-white transition-colors font-medium">
                      {BUSINESS.phoneDisplay}
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href={`mailto:${BUSINESS.email}`} className="flex items-start gap-3 group">
                  <Mail size={16} className="mt-0.5 text-[#F5A623] shrink-0" />
                  <div>
                    <div className="text-xs text-white/40 mb-0.5">Email</div>
                    <div className="text-white/80 text-sm group-hover:text-white transition-colors">
                      {BUSINESS.email}
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 text-[#F5A623] shrink-0" />
                  <div>
                    <div className="text-xs text-white/40 mb-0.5">Address</div>
                    <div className="text-white/70 text-sm leading-relaxed">
                      {BUSINESS.address.full}
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <Clock size={16} className="mt-0.5 text-[#22C55E] shrink-0" />
                  <div>
                    <div className="text-xs text-white/40 mb-0.5">Working Hours</div>
                    <div className="text-white/70 text-sm">{BUSINESS.workingHours}</div>
                  </div>
                </div>
              </li>
            </ul>

            {/* CTA Buttons */}
            <div className="mt-6 space-y-3">
              <a
                href={BUSINESS.callUrl}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#0B1F66] hover:bg-[#1a3a8f] text-white font-semibold text-sm transition-all hover:-translate-y-0.5 border border-white/10"
              >
                <Phone size={15} />
                Call for Service
              </a>
              <a
                href={BUSINESS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#22c55e] text-white font-semibold text-sm transition-all hover:-translate-y-0.5"
              >
                <WhatsAppIcon size={15} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Brands Bar */}
        <div className="mt-12 pt-10 border-t border-white/10">
          <p className="text-center text-white/40 text-xs font-medium uppercase tracking-widest mb-6">
            Brands We Service
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {BRANDS.map((brand) => (
              <span
                key={brand}
                className="px-4 py-1.5 bg-white/6 border border-white/10 rounded-full text-white/60 text-xs font-medium hover:text-white hover:bg-white/10 transition-colors cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/8 py-5">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs text-center md:text-left">
            © {currentYear} RSG Refrigeration. All rights reserved. | Bandlaguda Jagir, Hyderabad, Telangana 500091
          </p>
          <div className="flex items-center gap-4 text-white/40 text-xs flex-wrap justify-center">
            <Link href="/privacy-policy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-white/70 transition-colors">Terms of Service</Link>
            <span>·</span>
            <Link href="/sitemap.xml" className="hover:text-white/70 transition-colors">Sitemap</Link>
            <span>·</span>
            <a
              href="https://www.zoomdigital.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/70 transition-colors"
            >
              Design &amp; Developed By <span className="text-[#F5A623]/70 font-semibold">Zoom Digital</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
