import {
  Star, Users, IndianRupee, Zap, Award, Eye,
  HeartHandshake, CalendarCheck,
} from "lucide-react";
import { WHY_CHOOSE } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Star, Users, IndianRupee, Zap, Award, Eye, HeartHandshake, CalendarCheck,
};

const colors = [
  "from-blue-500 to-blue-700",
  "from-purple-500 to-purple-700",
  "from-emerald-500 to-emerald-700",
  "from-amber-500 to-amber-700",
  "from-rose-500 to-rose-700",
  "from-teal-500 to-teal-700",
  "from-orange-500 to-orange-700",
  "from-indigo-500 to-indigo-700",
];

export default function WhyChooseSection() {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="badge badge-primary mx-auto mb-4">
            Why RSG Refrigeration
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
            Why Hyderabad Trusts{" "}
            <span className="gradient-text">RSG Refrigeration</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mx-auto max-w-xl">
            We combine technical expertise with genuine customer care to deliver
            the best AC service experience in Hyderabad.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_CHOOSE.map((item, index) => {
            const Icon = iconMap[item.icon] || Star;
            return (
              <div
                key={item.title}
                className="card-premium card-why-choose h-full"
                style={{
                  padding: "32px 24px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "flex-start",
                }}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors[index]} flex items-center justify-center shadow-lg mx-auto`}
                  style={{ marginBottom: "20px" }}
                >
                  <Icon size={22} className="text-white" />
                </div>
                <h3
                  className="font-bold text-[#111827] text-base text-center w-full"
                  style={{ marginBottom: "12px", textAlign: "center" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-gray-500 text-sm leading-relaxed text-center w-full"
                  style={{ textAlign: "center" }}
                >
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
