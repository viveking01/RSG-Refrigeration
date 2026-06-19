import Link from "next/link";
import { Phone, Mail, MapPin, Clock, AirVent } from "lucide-react";
import { BUSINESS, BRANDS } from "@/lib/constants";
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
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#F5A623] flex items-center justify-center shadow-lg">
                <AirVent size={24} className="text-[#0B1F66]" />
              </div>
              <div>
                <div className="font-bold text-white text-xl leading-tight">RSG Refrigeration</div>
                <div className="text-xs text-white/50 leading-tight">Royal Refrigeration System Group</div>
              </div>
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
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
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
          <div className="flex items-center gap-4 text-white/40 text-xs">
            <Link href="/privacy-policy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-white/70 transition-colors">Terms of Service</Link>
            <span>·</span>
            <Link href="/sitemap.xml" className="hover:text-white/70 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
