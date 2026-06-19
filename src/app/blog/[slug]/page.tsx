import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { BLOG_POSTS, BlogPost } from "@/lib/data/blog-posts";
import { BUSINESS } from "@/lib/constants";
import Link from "next/link";
import { ArrowRight, Clock, Tag, Calendar, User, Phone, MessageCircle, ChevronLeft } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

// Rich content for each post to avoid placeholders
const POST_CONTENT: Record<string, {
  htmlContent: string;
  author: string;
  authorRole: string;
}> = {
  "how-often-should-you-service-your-ac": {
    author: "Raju G.",
    authorRole: "Senior HVAC Technician & Founder",
    htmlContent: `
      <p class="lead">Air conditioners have become a necessity for Hyderabad households, especially during our intense summer months. However, to keep your unit running efficiently and maintain healthy indoor air quality, regular servicing is vital. But how often should you actually service it?</p>
      
      <h2>1. The Standard Recommendation</h2>
      <p>Generally, for standard residential split AC units, we recommend a minimum of <strong>3 to 4 services per year</strong>. In Hyderabad's dusty climate, dust filters and outdoor condenser fins clog up very quickly, leading to poor airflow and overheating.</p>
      
      <table class="w-full border-collapse my-6 text-sm text-left">
        <thead>
          <tr class="bg-gray-100 border-b border-gray-200">
            <th class="p-3 font-semibold">AC Type</th>
            <th class="p-3 font-semibold">Usage Frequency</th>
            <th class="p-3 font-semibold">Recommended Service Gap</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-gray-100">
            <td class="p-3">Split AC (Home)</td>
            <td class="p-3">Seasonal / Daily</td>
            <td class="p-3">Every 3–4 Months</td>
          </tr>
          <tr class="border-b border-gray-100">
            <td class="p-3">Cassette AC (Office)</td>
            <td class="p-3">Daily (8+ Hours)</td>
            <td class="p-3">Every 2–3 Months</td>
          </tr>
          <tr class="border-b border-gray-100">
            <td class="p-3">Ductable / Central AC</td>
            <td class="p-3">Constant Commercial</td>
            <td class="p-3">Monthly / Bi-Monthly</td>
          </tr>
        </tbody>
      </table>

      <h2>2. Key Times to Schedule Service</h2>
      <ul>
        <li><strong>Pre-Summer Service (February - March):</strong> This is the most crucial service. It prepares your AC for the peak heat load and ensures there are no hidden refrigerant leaks.</li>
        <li><strong>Mid-Summer Check (June):</strong> After months of constant running, a quick filter clean and drain check prevents mid-season breakdowns.</li>
        <li><strong>Post-Monsoon Clean (October):</strong> Cleans out the humidity and dampness that causes mold growth on the evaporator coils during the rainy season.</li>
      </ul>

      <h2>3. Signs Your AC Needs Immediate Servicing</h2>
      <p>Do not wait for your scheduled service if you notice any of these signs:</p>
      <ul>
        <li><strong>Reduced Airflow:</strong> If you feel the fan blowing weakly even on high settings.</li>
        <li><strong>Bad Odour:</strong> A musty, damp smell is a sign of mold or bacteria buildup in the drain pan.</li>
        <li><strong>Strange Noises:</strong> Rattling, grinding, or hissing sounds suggest mechanical wear or gas leakage.</li>
        <li><strong>Water Leakage:</strong> Dripping from the indoor unit means the drain line is clogged.</li>
      </ul>
    `,
  },
  "signs-your-ac-needs-gas-charging": {
    author: "Raju G.",
    authorRole: "Senior HVAC Technician & Founder",
    htmlContent: `
      <p class="lead">Low refrigerant (commonly called AC gas) is one of the most frequent causes of poor cooling in split and cassette air conditioners. Since refrigerant operates in a closed loop, levels only drop if there is a physical leak.</p>

      <h2>The 7 Most Common Signs of Low AC Gas:</h2>
      
      <h3>1. The AC Runs Constantly but Doesn't Cool the Room</h3>
      <p>If your AC continues to blow warm or lukewarm air even after running for hours, it's a strong indicator that there isn't enough refrigerant to extract heat from the room.</p>
      
      <h3>2. Ice Formation on the Copper Pipes</h3>
      <p>Check the outdoor unit connections. If you see white frost or ice accumulation on the thin copper pipe (liquid line), the refrigerant pressure has dropped below freezing levels.</p>

      <h3>3. Ice on the Indoor Evaporator Coil</h3>
      <p>When gas is low, the evaporator coil inside the room becomes extremely cold and freezes condensation, causing ice blocks that block airflow.</p>

      <h3>4. Water Leakage / Dripping Indoors</h3>
      <p>When you turn off an AC with a frozen coil, the ice melts rapidly, overflowing the drain pan and leaking down your wall.</p>

      <h3>5. Hissing or Bubbling Sounds</h3>
      <p>A physical crack in the copper coils allows gas to escape, producing a noticeable hissing sound near the indoor unit or outdoor joints.</p>

      <h3>6. High Electricity Bills</h3>
      <p>Because the room doesn't reach the target temperature, the compressor runs continuously at maximum load, spiking your power consumption.</p>

      <h3>7. AC Turns Off Automatically with Blinking Lights</h3>
      <p>Modern inverter ACs have pressure sensors. When they detect low suction pressure, they shut down the system and flash error codes on the display to protect the compressor.</p>

      <div class="bg-blue-50 border-l-4 border-[#0B1F66] p-4 my-6 rounded-r-xl text-sm">
        <strong>Important:</strong> Simply topping up the gas is a temporary fix. At RSG Refrigeration, we always locate the leak, repair it by brazing or flaring, vacuum the lines, and then perform a full gas refill.
      </div>
    `,
  },
  "split-ac-vs-cassette-ac": {
    author: "Raju G.",
    authorRole: "Senior HVAC Technician & Founder",
    htmlContent: `
      <p class="lead">Choosing the right type of air conditioner is critical for both optimal cooling and aesthetics. Let's compare Split ACs and Cassette ACs across key metrics to help you make the right choice.</p>

      <h2>1. The Basic Difference</h2>
      <p><strong>Split ACs</strong> are mounted directly onto a wall. They are ideal for individual rooms, bedrooms, and small shops. <strong>Cassette ACs</strong> are mounted inside the ceiling, with only the decorative front panel visible. They distribute air in 4 directions and are perfect for large halls, offices, and square rooms.</p>

      <h2>2. Head-to-Head Comparison</h2>
      <table class="w-full border-collapse my-6 text-sm text-left">
        <thead>
          <tr class="bg-gray-100 border-b border-gray-200">
            <th class="p-3 font-semibold">Feature</th>
            <th class="p-3 font-semibold">Split AC</th>
            <th class="p-3 font-semibold">Cassette AC</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-gray-100">
            <td class="p-3 font-medium">Mounting Location</td>
            <td class="p-3">Wall Mounted</td>
            <td class="p-3">Ceiling Recessed</td>
          </tr>
          <tr class="border-b border-gray-100">
            <td class="p-3 font-medium">Air Distribution</td>
            <td class="p-3">1-Directional (Auto-swing)</td>
            <td class="p-3">4-Directional (Uniform)</td>
          </tr>
          <tr class="border-b border-gray-100">
            <td class="p-3 font-medium">Ceiling Requirement</td>
            <td class="p-3">None</td>
            <td class="p-3">False Ceiling required (10-12\" depth)</td>
          </tr>
          <tr class="border-b border-gray-100">
            <td class="p-3 font-medium">Aesthetic Appeal</td>
            <td class="p-3">Visible on the wall</td>
            <td class="p-3">Sleek, hides into ceiling</td>
          </tr>
          <tr class="border-b border-gray-100">
            <td class="p-3 font-medium">Installation Cost</td>
            <td class="p-3">Low to Medium</td>
            <td class="p-3">Higher (requires anchors & drainage lift pump)</td>
          </tr>
        </tbody>
      </table>

      <h2>3. Which Should You Choose?</h2>
      <h3>Choose a Split AC if:</h3>
      <ul>
        <li>You are cooling a bedroom, small living room, or study.</li>
        <li>You do not have a false ceiling or ceiling space.</li>
        <li>You are looking for a budget-friendly option with lower installation costs.</li>
      </ul>
      <h3>Choose a Cassette AC if:</h3>
      <ul>
        <li>You have a large, open-concept hall or a commercial showroom.</li>
        <li>You want uniform, draft-free cooling in all directions.</li>
        <li>You have a false ceiling and want a clean, minimalist interior look.</li>
      </ul>
    `,
  },
  "why-is-my-ac-not-cooling": {
    author: "Raju G.",
    authorRole: "Senior HVAC Technician & Founder",
    htmlContent: `
      <p class="lead">An AC that isn't cooling during a hot Hyderabad afternoon can be incredibly frustrating. Before you panic, check these 10 common causes and how they can be fixed.</p>

      <h2>1. Dirty Air Filters</h2>
      <p>This is the number one cause of poor cooling. Dust restricts airflow, preventing your AC from circulating cool air. Clean your filters once every two weeks.</p>

      <h2>2. Incorrect Thermostat Settings</h2>
      <p>Ensure your remote is set to <strong>Cool Mode</strong> (snowflake icon) and not Fan or Dry mode. Set the temperature to a realistic 24°C for efficient cooling.</p>

      <h2>3. Clogged Outdoor Condenser Fins</h2>
      <p>The outdoor unit rejects the heat from your room. If the metal fins are covered in dirt, mud, or leaves, the heat exchange fails and the compressor overheats and shuts down.</p>

      <h2>4. Low Refrigerant Gas</h2>
      <p>Refrigerant is required to cool the air. Low gas levels (due to a leak) lead to slow cooling, frost on pipes, and eventual compressor failure.</p>

      <h2>5. Faulty Compressor Capacitor</h2>
      <p>If you hear a humming sound from the outdoor unit but the compressor doesn't start, the capacitor is likely dead. This is a quick and cheap replacement.</p>

      <h2>6. Blocked Evaporator Coils</h2>
      <p>Dust bypassing the filters deposits on the indoor coils. This insulating layer stops the refrigerant from absorbing heat from the air.</p>

      <h2>7. Faulty Thermistor / Sensor</h2>
      <p>If the AC sensor detects incorrect room temperatures, it will turn off the compressor prematurely before the room is cooled.</p>

      <h2>8. Undersized AC for the Room</h2>
      <p>A 1.0 Ton AC cannot cool a large 250 sq. ft. living room. Calculate your room size: under 120 sq ft needs 1.0 Ton, 120-180 sq ft needs 1.5 Ton, and above 180 sq ft needs 2.0 Ton.</p>

      <h2>9. Faulty PCB (Control Board)</h2>
      <p>The motherboard coordinates operations. Relay or microprocessor failure on the PCB can stop power from reaching the outdoor compressor.</p>

      <h2>10. Compressor Failure</h2>
      <p>The most expensive part of the AC. If the compressor windings are shorted or the mechanical pump is seized, it must be repaired or replaced.</p>
    `,
  },
  "benefits-of-amc-for-ac-systems": {
    author: "Raju G.",
    authorRole: "Senior HVAC Technician & Founder",
    htmlContent: `
      <p class="lead">Many homeowners view AC maintenance as an emergency service — they only call a technician when the AC stops working. However, an Annual Maintenance Contract (AMC) is a preventive shield that saves money and headaches.</p>

      <h2>What is an AC AMC?</h2>
      <p>An Annual Maintenance Contract is a pre-scheduled service package where a professional team takes care of your AC needs for the entire year. It includes regular tune-ups, filter cleanings, checks, and priority breakdown assistance.</p>

      <h2>Top 5 Benefits of an AMC:</h2>
      
      <h3>1. Substantial Financial Savings</h3>
      <p>Regular maintenance keeps minor faults from turning into massive repairs. For instance, catching a minor capacitor issue or flare joint leak early saves you from compressor burnouts or total gas refills later.</p>

      <h3>2. Up to 25% Lower Electricity Bills</h3>
      <p>A dirty AC consumes significantly more power. Clogged coils force the compressor to run longer and consume more watts. AMC servicing keeps the cooling loop operating at peak thermodynamic efficiency, keeping bills low.</p>

      <h3>3. Maximum Lifespan of Your AC</h3>
      <p>Unmaintained ACs typically fail around the 5–7 year mark. With structured AMC servicing, a high-quality AC easily lasts 10–12 years, maximizing your return on investment.</p>

      <h3>4. Better Indoor Air Quality & Hygiene</h3>
      <p>A key part of AMC visits is deep cleaning the evaporator coils and disinfecting the drain pan. This destroys mold, bacteria, and dust mites that circulate in your indoor air and cause respiratory issues.</p>

      <h3>5. Priority Breakdown Dispatch</h3>
      <p>During peak summer (April - May), AC technicians are heavily booked. AMC customers enjoy priority booking, ensuring a technician reaches their home within hours of raising a request.</p>
    `,
  },
  "ac-maintenance-tips-hyderabad-weather": {
    author: "Raju G.",
    authorRole: "Senior HVAC Technician & Founder",
    htmlContent: `
      <p class="lead">Hyderabad experiences extreme summer heat, with temperatures regularly crossing 42°C in April and May. This puts immense pressure on your home air conditioning systems. Here is how you can help your AC survive the heat.</p>

      <h2>1. The 24°C Rule</h2>
      <p>Avoid setting your AC to 16°C or 18°C. This does not cool the room any faster. Instead, set the thermostat to 24°C or 25°C. This allows the compressor to take short breaks, preventing overheating and saving up to 30% on electricity.</p>

      <h2>2. Shield the Outdoor Unit</h2>
      <p>The outdoor unit rejects heat. If it is placed in direct afternoon sunlight, it has to work much harder. Installing a simple overhead shade (while keeping ventilation clear) can improve cooling efficiency by 10%.</p>

      <h2>3. Clean Return-Air Filters Bi-Weekly</h2>
      <p>Hyderabad's construction and traffic dust quickly clog standard air filters. Wash them under tap water once every two weeks to maintain smooth airflow.</p>

      <h2>4. Use Ceiling Fans in Tandem</h2>
      <p>Ceiling fans create a wind-chill effect, spreading cool air quickly throughout the room. This allows you to set the AC 2 degrees higher while enjoying the same comfort levels.</p>

      <h2>5. Keep the Room Sealed</h2>
      <p>Ensure doors and windows are tightly closed. Check window frame gaps or exhaust fans that let cool air escape and draw hot, humid air inside.</p>
    `,
  },
  "best-time-for-ac-servicing": {
    author: "Raju G.",
    authorRole: "Senior HVAC Technician & Founder",
    htmlContent: `
      <p class="lead">Timing is everything when it comes to home appliance maintenance. Waiting until the middle of a hot summer afternoon to service your AC is a recipe for high prices and long delays. Here is why pre-summer is the absolute best time for servicing.</p>

      <h2>1. Beat the Peak Season Rush</h2>
      <p>By late March, temperature levels rise rapidly, leading to a flood of service calls. Technicians become heavily booked, and you might have to wait 2 to 4 days just to get a basic checkup. Booking in February or early March gets you immediate service.</p>

      <h2>2. Identify Hidden Faults Early</h2>
      <p>AC units sitting idle during the winter months (November to January) can develop slow gas leaks or electrical issues. A pre-summer service catches these faults, ensuring your AC is fully ready to cool when summer begins.</p>

      <h2>3. Save Money on Promo Offers</h2>
      <p>HVAC service providers often run discounts and packages during the off-season. Booking your pre-summer service early gets you premium service quality at the best rates.</p>

      <h2>4. Protect the Compressor</h2>
      <p>Starting up a dusty AC that has been idle for months puts heavy torque strain on the compressor motor. Clean coils and new capacitors ensure a smooth startup, protecting your most expensive AC component.</p>
    `,
  },
  "how-to-reduce-ac-electricity-bills": {
    author: "Raju G.",
    authorRole: "Senior HVAC Technician & Founder",
    htmlContent: `
      <p class="lead">Running an air conditioner during Hyderabad's summers can result in high electricity bills. However, by adopting these 12 proven, expert-verified tips, you can cut your AC energy consumption by up to 30%.</p>

      <h2>1. The Ideal Temperature Setting</h2>
      <p>Set your AC to <strong>24°C</strong>. Every degree you raise the temperature above 18°C saves about 6% on electricity bills. 24°C is the perfect balance of comfort and energy savings.</p>

      <h2>2. Clean Filters Regularly</h2>
      <p>Clogged filters block airflow, forcing the indoor blower and outdoor compressor to work harder. Cleaning your filters bi-weekly takes 5 minutes and saves up to 15% on power consumption.</p>

      <h2>3. Prevent Ceiling Sweating with Proper Insulation</h2>
      <p>Ensure the copper refrigerant pipes running between your indoor and outdoor units are insulated with nitrile foam sleeve. Exposed copper pipes waste energy by absorbing heat from the atmosphere.</p>

      <h2>4. Switch to Inverter AC</h2>
      <p>If your AC is older than 8 years, consider replacing it with a 5-star inverter AC. Inverter models adjust compressor speed dynamically rather than switching on/off, consuming 30-40% less power.</p>

      <h2>5. Use a Programmable Timer / Sleep Mode</h2>
      <p>Use the sleep function on your remote. It raises the temperature by 1 or 2 degrees during the early hours of the morning when the ambient temperature is naturally cooler, saving energy while you sleep.</p>

      <h2>6. Close Gaps and Windows</h2>
      <p>Use weather stripping to seal gaps under doors and around windows. Install thick curtains to prevent solar heat from warming the room.</p>
    `,
  },
  "common-ac-problems-and-solutions": {
    author: "Raju G.",
    authorRole: "Senior HVAC Technician & Founder",
    htmlContent: `
      <p class="lead">From water leaks to compressor failures, split and cassette AC systems can run into various issues. Here is a troubleshooting guide for the 10 most common AC problems, their causes, and how to resolve them.</p>

      <h2>1. Water Dripping from the Indoor Unit</h2>
      <p><strong>Cause:</strong> A clogged condensate drain line due to dust and algae buildup, or an incorrect drain pipe slope.<br/>
      <strong>Solution:</strong> Flush the drain pipe with pressurized water or clear it manually. Correct the piping slope if it has sagged.</p>

      <h2>2. AC Unit Not Turning On</h2>
      <p><strong>Cause:</strong> Burnt power contactor, dead remote batteries, blown PCB fuse, or a tripped MCB.<br/>
      <strong>Solution:</strong> Check the circuit breaker and remote batteries. Call a technician to inspect the PCB fuse and electrical wiring.</p>

      <h2>3. Lukewarm Air Instead of Cool Air</h2>
      <p><strong>Cause:</strong> Low refrigerant gas, dirty condenser coil, or a faulty compressor capacitor.<br/>
      <strong>Solution:</strong> Clean the outdoor unit. If that doesn't help, have a technician check the gas pressure and capacitor values.</p>

      <h2>4. Ice Formation on the Evaporator Coil</h2>
      <p><strong>Cause:</strong> Clogged air filters blocking heat exchange, or very low refrigerant gas levels.<br/>
      <strong>Solution:</strong> Turn off the AC, let the ice melt, and clean the filters. If the ice returns, check for gas leaks.</p>

      <h2>5. Constant On/Off Cycling (Short Cycling)</h2>
      <p><strong>Cause:</strong> A dirty air filter restricting airflow, a faulty thermostat sensor, or an oversized unit.<br/>
      <strong>Solution:</strong> Clean filters and verify sensor values. Ensure the AC is sized correctly for your room.</p>

      <h2>6. Strange Vibrating or Grinding Noises</h2>
      <p><strong>Cause:</strong> Unbalanced indoor blower wheel, loose casing screws, or worn motor bearings in the outdoor fan.<br/>
      <strong>Solution:</strong> Tighten any loose screws. Blower fan wheels and motor bearings need professional replacement.</p>

      <h2>7. Foul Musty Odour from Vents</h2>
      <p><strong>Cause:</strong> Mold, mildew, and bacteria breeding in the damp environment of the indoor drain pan.<br/>
      <strong>Solution:</strong> Perform a deep chemical cleaning of the evaporator coil and disinfect the drain tray.</p>

      <h2>8. Remote Control Not Working</h2>
      <p><strong>Cause:</strong> Dead batteries, damaged infrared receiver on the AC display panel, or a faulty remote.<br/>
      <strong>Solution:</strong> Change batteries. If it still doesn't work, test with a universal AC remote or call for PCB sensor repair.</p>

      <h2>9. Outdoor Unit Fan Not Running</h2>
      <p><strong>Cause:</strong> Failed fan motor winding, or a dead fan run capacitor.<br/>
      <strong>Solution:</strong> Replace the fan motor capacitor or the fan motor assembly.</p>

      <h2>10. Circuit Breaker Trips Instantly</h2>
      <p><strong>Cause:</strong> Direct short circuit in the compressor winding, or a grounded fan motor.<br/>
      <strong>Solution:</strong> Do not try to turn it back on. Call an emergency technician immediately to test for electrical grounding.</p>
    `,
  },
};

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  return generatePageMetadata({
    title: post.title,
    description: post.metaDescription,
    path: `/blog/${slug}`,
    keywords: post.keywords,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const content = POST_CONTENT[slug];
  if (!content) notFound();

  const breadcrumbs = breadcrumbSchema([
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${slug}` },
  ]);

  const recentPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 4);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      {/* Header Info */}
      <div className="bg-[#f8faff] py-4 border-b border-gray-100">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-xs md:text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#0B1F66]">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#0B1F66]">Blog</Link>
            <span>/</span>
            <span className="text-[#0B1F66] font-medium truncate max-w-xs md:max-w-md">{post.title}</span>
          </nav>

          <Link href="/blog" className="inline-flex items-center gap-1.5 text-[#0B1F66] text-sm font-semibold hover:text-[#1a3a8f] mb-2">
            <ChevronLeft size={16} /> Back to Blog
          </Link>
        </div>
      </div>

      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main Article Content */}
            <article className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-[#0B1F66] border border-blue-100">
                  {post.category}
                </span>
                <h1 className="text-2xl md:text-4xl font-extrabold text-[#111827] leading-tight">
                  {post.title}
                </h1>

                {/* Author Metadata */}
                <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs md:text-sm text-gray-500 pt-2 border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-1.5">
                    <div className="w-8 h-8 rounded-full bg-[#0B1F66]/10 flex items-center justify-center text-[#0B1F66] font-bold text-xs">
                      RG
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">{content.author}</div>
                      <div className="text-[10px] text-gray-400">{content.authorRole}</div>
                    </div>
                  </div>
                  <span className="text-gray-300 hidden sm:inline">|</span>
                  <div className="flex items-center gap-1">
                    <Calendar size={13} />
                    <span>{new Date(post.publishedAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
                  </div>
                  <span className="text-gray-300 hidden sm:inline">|</span>
                  <div className="flex items-center gap-1">
                    <Clock size={13} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>

              {/* HTML Content Body */}
              <div
                className="prose max-w-none text-gray-600 leading-relaxed space-y-5"
                dangerouslySetInnerHTML={{ __html: content.htmlContent }}
              />
            </article>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Commercial CTA Card */}
              <div className="rounded-2xl bg-gradient-to-br from-[#0B1F66] to-[#1a3a8f] p-6 text-white shadow-xl">
                <div className="text-lg font-bold mb-2">Need Professional Help?</div>
                <p className="text-white/70 text-sm mb-6 leading-relaxed">
                  Don't risk damaging your AC or voiding warranties. Call RSG Refrigeration's certified technicians for same-day service across Hyderabad.
                </p>
                <div className="space-y-3">
                  <a
                    href={BUSINESS.callUrl}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#F5A623] text-[#07132e] font-bold text-sm hover:bg-[#f7b84a] transition-all"
                  >
                    <Phone size={16} /> Call: {BUSINESS.phoneDisplay}
                  </a>
                  <a
                    href={BUSINESS.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#22c55e] transition-all"
                  >
                    <MessageCircle size={16} /> WhatsApp Us
                  </a>
                </div>
              </div>

              {/* Recent Articles */}
              <div className="rounded-2xl border border-gray-100 p-5 space-y-4">
                <h3 className="font-bold text-[#111827] text-sm border-b border-gray-50 pb-2">Recent Articles</h3>
                <div className="space-y-3">
                  {recentPosts.map((p) => (
                    <Link key={p.slug} href={`/blog/${p.slug}`} className="block group">
                      <div className="text-xs text-[#0B1F66] font-semibold mb-0.5">{p.category}</div>
                      <div className="text-sm font-medium text-gray-700 group-hover:text-[#0B1F66] transition-colors line-clamp-2 leading-snug">
                        {p.title}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 bg-dark-section">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Is Your AC Having Problems?
          </h2>
          <p className="text-white/60 mb-6">Expert diagnostic repairs and servicing within 2 hours across Hyderabad.</p>
          <div className="cta-buttons-container justify-center">
            <a href={BUSINESS.callUrl} className="btn-secondary">
              <Phone size={17} /> Call: {BUSINESS.phoneDisplay}
            </a>
            <a href={BUSINESS.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <MessageCircle size={17} /> WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
