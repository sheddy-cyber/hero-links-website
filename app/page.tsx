import Image from "next/image";
import Link from "next/link";
import {
  Award,
  GraduationCap,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Clock,
  Monitor,
  UserCheck,
  Scroll,
  FileType,
  Palette,
  Code2,
  Building2,
  Wrench,
  Laptop,
  CalendarDays,
  Wallet,
  ArrowRight,
  Send,
  ExternalLink,
  Settings,
  ShoppingBag,
  Package,
  Check,
  Quote,
  User,
  ShieldCheck,
  TrendingUp,
  Star,
  Info,
  ShoppingCart,
  FileText,
  PlayCircle,
  Users,
  Briefcase,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import ScrollAnimator from "@/components/ScrollAnimator";

const courses = [
  {
    icon: FileType,
    title: "Desktop Publishing",
    description:
      "Computer fundamentals, typing, MS Word, Excel, PowerPoint, Publisher and basic internet skills.",
    duration: "3 months",
    price: "₦90,000",
    featured: true,
  },
  {
    icon: Palette,
    title: "Digital Graphic Design",
    description:
      "CorelDraw, Corel Photo-Paint, Adobe Photoshop CC — print & digital file preparation.",
    duration: "3 months",
    price: "₦150,000",
  },
  {
    icon: Code2,
    title: "Frontend Web Design (Coding)",
    description:
      "HTML, CSS, JavaScript, React, responsive design, UI fundamentals and basic SEO for real projects.",
    duration: "3 – 4 months",
    price: "₦250,000",
  },
  {
    icon: Building2,
    title: "Internship — Business Management",
    description:
      "Work placement and business skills to support entrepreneurship and employment readiness.",
    duration: "5 months",
    price: "₦200,000",
  },
  {
    icon: Wrench,
    title: "Computer Maintenance & Repair",
    description:
      "Hardware diagnostics, troubleshooting, upgrades and preventive maintenance for PCs and laptops.",
    duration: "Variable",
    price: "Contact us",
  },
  {
    icon: Laptop,
    title: "Sales of Computers & Accessories",
    description:
      "We supply laptops, desktops and peripherals with manufacturer guidance and after-sales support.",
    duration: null,
    price: null,
  },
];

const features = [
  {
    icon: Monitor,
    title: "Conducive Learning Environment",
    desc: "Spacious classroom with real equipment and guided exercises.",
  },
  {
    icon: UserCheck,
    title: "Experienced Tutors",
    desc: "Trainers with real-world industry experience.",
  },
  {
    icon: Clock,
    title: "Flexible Schedules",
    desc: "Morning, evening and weekend classes to suit working learners.",
  },
  {
    icon: Scroll,
    title: "Industry Certification",
    desc: "Recognised certificates upon course completion.",
  },
];

const testimonials = [
  {
    quote:
      "The web development course transformed my career. Within 3 months of completing, I landed a job as a junior developer.",
    name: "Chidera O.",
    role: "Web Development Graduate",
  },
  {
    quote:
      "Professional tutors, modern equipment, and practical projects. Best training center in Ibeju-Lekki. Highly recommend!",
    name: "Itoje David",
    role: "Graphic Design Student",
  },
  {
    quote:
      "Started as a complete beginner and became inspired to pursue a career in Computer Science. The hands-on approach made all the difference.",
    name: "Chinonso Ewesiobi",
    role: "Desktop Publishing Alumni",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <ScrollAnimator />
      <main id="main" className="pt-14 lg:pt-6">
        {/* ── HERO ── */}
        <section
          id="home"
          aria-labelledby="hero-heading"
          className="relative min-h-[90vh] bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white overflow-hidden"
        >
          {/* Animated background patterns */}
          <div
            className="absolute inset-0 opacity-10 overflow-hidden"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "60px 60px",
              animation: "gridMove 20s linear infinite",
            }}
          />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] rounded-full bg-blue-600/20 blur-3xl -translate-y-1/2 translate-x-1/4 animate-pulse overflow-hidden" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full bg-orange-500/15 blur-3xl translate-y-1/2 -translate-x-1/4 animate-pulse overflow-hidden" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full bg-purple-500/10 blur-3xl animate-pulse overflow-hidden" style={{ animationDelay: "2s" }} />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-24 pb-16 lg:pb-32">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left */}
              <div className="space-y-6 lg:space-y-8">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-orange-500/20 border border-blue-400/30 rounded-full px-4 py-2 text-xs sm:text-sm font-medium text-blue-200 backdrop-blur-sm">
                  <Award size={14} className="text-orange-400 w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>Certified Training Center</span>
                </div>
                <h1
                  id="hero-heading"
                  className="font-heading text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight"
                >
                  <span className="block">Build Real Skills.</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-orange-400">
                    Get Hired.
                  </span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-blue-100/90 leading-relaxed max-w-xl">
                  Hands-on courses in desktop publishing, graphic design, web
                  design, computer maintenance, and procurement of office
                  equipment — delivered in Ibeju-Lekki, Lagos.
                </p>

                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <Link
                    href="#courses"
                    className="group inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold rounded-2xl shadow-xl shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/40"
                  >
                    <GraduationCap size={18} className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">Explore Courses</span>
                    <ArrowRight size={16} className="w-4 h-4 sm:w-4.5 sm:h-4.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-2xl backdrop-blur-md transition-all duration-300 hover:scale-105"
                  >
                    <Calendar size={20} />
                    <span>Book a Visit</span>
                  </Link>
                </div>

                <div className="flex items-center gap-6 text-sm text-blue-200/80">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-orange-400" />
                    <span>Ibeju-Lekki, Lagos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-blue-400" />
                    <a href="tel:+2348032310325" className="hover:text-white transition-colors">
                      +234 803 231 0325
                    </a>
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="flex flex-col items-center gap-6">
                <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl shadow-black/50 group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
                  <Image
                    src="/images/computer_lab.jpg"
                    alt="Modern computer lab with students learning at workstations"
                    width={600}
                    height={450}
                    className="w-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <div className="inline-flex items-center gap-2 bg-blue-600/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white">
                      <PlayCircle size={16} />
                      <span>State-of-the-art Facilities</span>
                    </div>
                  </div>
                </div>

                {/* Stats — enhanced cards */}
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="bg-gradient-to-br from-blue-600/20 to-blue-700/20 backdrop-blur-sm rounded-2xl p-5 border border-blue-500/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Users size={20} className="text-blue-400" />
                      <span className="text-3xl font-bold text-white">200+</span>
                    </div>
                    <div className="text-sm text-blue-200">Students Trained</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-2xl p-5 border border-orange-500/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase size={20} className="text-orange-400" />
                      <span className="text-3xl font-bold text-white">100%</span>
                    </div>
                    <div className="text-sm text-orange-200">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section
          id="about"
          aria-labelledby="about-heading"
          className="py-20 lg:py-28 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="animate-on-scroll">
                <span className="inline-block text-xs font-bold tracking-widest text-blue-600 uppercase mb-4">
                  About Us
                </span>
                <h2
                  id="about-heading"
                  className="font-heading text-4xl sm:text-5xl font-bold text-slate-900 mb-6"
                >
                  Building Nigeria&apos;s Tech Workforce
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-10">
                  We deliver practical, job-ready training for individuals and
                  organisations. Our instructors are industry practitioners who
                  emphasise real-world projects, internships and post-training
                  support.
                </p>

                <ul className="space-y-5 mb-10">
                  {features.map(({ icon: Icon, title, desc }) => (
                    <li key={title} className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center shrink-0">
                        <Icon size={20} className="text-blue-600" />
                      </div>
                      <div>
                        <strong className="text-slate-900 text-base">
                          {title}
                        </strong>
                        <p className="text-slate-600 text-sm mt-1">{desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <a
                  href="/docs/Course Outline.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-base font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <FileText size={18} />
                  Download full course outline (PDF)
                </a>
              </div>

              <div
                className="animate-on-scroll"
                style={{ transitionDelay: "0.15s" }}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                  <Image
                    src="/images/codescreen.jpeg"
                    alt="Computer lab training session showing code on screen"
                    width={600}
                    height={450}
                    className="w-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-slate-900">
                      <PlayCircle size={18} className="text-blue-600" />
                      <span>Watch Our Training</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5 mt-8">
                  {[
                    { icon: ShieldCheck, label: "Accredited Center" },
                    { icon: TrendingUp, label: "15+ Years Experience" },
                  ].map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl px-5 py-4 border border-slate-200"
                    >
                      <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                        <Icon size={20} className="text-blue-600" />
                      </div>
                      <span className="text-sm font-semibold text-slate-700">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── COURSES ── */}
        <section
          id="courses"
          aria-labelledby="courses-heading"
          className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-on-scroll">
              <span className="inline-block text-xs font-bold tracking-widest text-blue-600 uppercase mb-4">
                Our Programs
              </span>
              <h2
                id="courses-heading"
                className="font-heading text-4xl sm:text-5xl font-bold text-slate-900 mb-6"
              >
                Courses &amp; Programmes
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                Selected programmes — beginner to advanced. Full detailed
                syllabus available in the PDF.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {courses.map((course, i) => {
                const Icon = course.icon;
                return (
                  <article
                    key={course.title}
                    className={`animate-on-scroll relative rounded-3xl p-8 border transition-all duration-500 hover:-translate-y-2 group ${
                      course.featured
                        ? "bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white border-blue-500 shadow-xl shadow-blue-500/30"
                        : "bg-white text-slate-900 border-slate-200 shadow-lg hover:border-blue-300"
                    }`}
                    style={{ transitionDelay: `${i * 0.1}s` }}
                  >
                    {course.featured && (
                      <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-gradient-to-r from-orange-400 to-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                        <Star size={12} fill="white" /> Most Popular
                      </div>
                    )}
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${
                        course.featured ? "bg-white/20 backdrop-blur-sm" : "bg-gradient-to-br from-blue-50 to-blue-100"
                      }`}
                    >
                      <Icon
                        size={24}
                        className={
                          course.featured ? "text-white" : "text-blue-600"
                        }
                    />
                    </div>
                    <h3
                      className={`font-heading font-bold text-xl mb-3 ${course.featured ? "text-white" : "text-slate-900"}`}
                    >
                      {course.title}
                    </h3>
                    <p
                      className={`text-base leading-relaxed mb-6 ${course.featured ? "text-blue-100" : "text-slate-600"}`}
                    >
                      {course.description}
                    </p>

                    <div
                      className={`flex flex-wrap gap-3 mb-6 text-sm font-medium ${course.featured ? "text-blue-100" : "text-slate-500"}`}
                    >
                      {course.duration && (
                        <span
                          className={`flex items-center gap-2 ${course.featured ? "bg-white/15 backdrop-blur-sm" : "bg-slate-100"} rounded-full px-4 py-2`}
                        >
                          <CalendarDays size={14} /> {course.duration}
                        </span>
                      )}
                      {course.price && (
                        <span
                          className={`flex items-center gap-2 ${course.featured ? "bg-white/15 backdrop-blur-sm" : "bg-slate-100"} rounded-full px-4 py-2`}
                        >
                          {course.price.startsWith("₦") ? (
                            <Wallet size={14} />
                          ) : (
                            <Info size={14} />
                          )}{" "}
                          {course.price}
                        </span>
                      )}
                      {!course.price && (
                        <span
                          className={`flex items-center gap-2 ${course.featured ? "bg-white/15 backdrop-blur-sm" : "bg-slate-100"} rounded-full px-4 py-2`}
                        >
                          <ShoppingCart size={14} /> Products available
                        </span>
                      )}
                    </div>

                    <Link
                      href="#contact"
                      className={`arrow-link flex items-center gap-2 text-sm font-semibold transition-all duration-300 ${
                        course.featured
                          ? "text-white hover:text-blue-100 group-hover:translate-x-1"
                          : "text-blue-600 hover:text-blue-700 group-hover:translate-x-1"
                      }`}
                    >
                      {course.price === "Contact us"
                        ? "Learn more"
                        : course.price
                          ? "Enroll now"
                          : "Get quote"}
                      <span className="arrow-icon">
                        <ArrowRight size={16} />
                      </span>
                    </Link>
                  </article>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-16 animate-on-scroll">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold rounded-2xl shadow-xl shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/40"
              >
                <Send size={18} />
                <span>Register Now</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="/docs/Course Outline.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-base font-semibold text-slate-600 hover:text-blue-600 transition-colors"
              >
                <ExternalLink size={18} /> View full syllabus
              </a>
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section
          id="services"
          aria-labelledby="services-heading"
          className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-on-scroll">
              <span className="inline-block text-xs font-bold tracking-widest text-blue-600 uppercase mb-4">
                Additional Services
              </span>
              <h2
                id="services-heading"
                className="font-heading text-4xl sm:text-5xl font-bold text-slate-900 mb-6"
              >
                Beyond Training
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                Comprehensive IT solutions for businesses and individuals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Maintenance */}
              <div className="animate-on-scroll bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-lg transition-all duration-500 hover:-translate-y-2 group">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                  <Settings size={24} className="text-blue-600 w-6 h-6 md:w-7 md:h-7" />
                </div>
                <h3 className="font-heading font-bold text-lg md:text-xl text-slate-900 mb-3">
                  Computer Maintenance &amp; Repair
                </h3>
                <p className="text-slate-600 text-sm md:text-base mb-4 md:mb-6">
                  On-site and in-lab servicing for corporate clients and
                  individuals.
                </p>
                <ul className="space-y-3">
                  {[
                    "Hardware diagnostics",
                    "Software troubleshooting",
                    "Preventive maintenance",
                    "Software installation",
                  ].map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-3 text-sm text-slate-600"
                    >
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                        <Check size={12} className="text-green-600" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Accessories — featured */}
              <div
                className="animate-on-scroll relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-6 md:p-8 text-white shadow-2xl shadow-blue-500/30 hover:-translate-y-2 transition-all duration-500 group"
                style={{ transitionDelay: "0.1s" }}
              >
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-gradient-to-r from-orange-400 to-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  <Star size={12} fill="white" /> New
                </div>
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                  <ShoppingBag size={24} className="text-white w-6 h-6 md:w-7 md:h-7" />
                </div>
                <h3 className="font-heading font-bold text-lg md:text-xl mb-3">
                  Laptops &amp; Computer Accessories
                </h3>
                <p className="text-blue-100 text-sm md:text-base mb-4 md:mb-6">
                  Browse our extensive collection of 100+ quality products
                  available for purchase.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Laptops & Printers",
                    "Keyboards & Mice",
                    "Monitors & Displays",
                    "Cables & Storage",
                  ].map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-3 text-sm text-blue-100"
                    >
                      <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0">
                        <Check size={12} className="text-white" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/accessories"
                  className="arrow-link inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-blue-100 transition-all group-hover:translate-x-1"
                >
                  View Full Gallery{" "}
                  <span className="arrow-icon">
                    <ArrowRight size={16} />
                  </span>
                </Link>
              </div>

              {/* Procurement */}
              <div
                className="animate-on-scroll bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-lg transition-all duration-500 hover:-translate-y-2 group"
                style={{ transitionDelay: "0.2s" }}
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                  <Package size={24} className="text-blue-600 w-6 h-6 md:w-7 md:h-7" />
                </div>
                <h3 className="font-heading font-bold text-lg md:text-xl text-slate-900 mb-3">
                  Procurement of Office Equipment
                </h3>
                <p className="text-slate-600 text-sm md:text-base mb-4 md:mb-6">
                  Office setup and procurement tailored to business budgets and
                  compliance.
                </p>
                <ul className="space-y-3">
                  {[
                    "Bulk ordering",
                    "Budget planning",
                    "Installation support",
                  ].map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-3 text-sm text-slate-600"
                    >
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                        <Check size={12} className="text-green-600" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section
          aria-labelledby="testimonials-heading"
          className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-on-scroll">
              <span className="inline-block text-xs font-bold tracking-widest text-blue-600 uppercase mb-4">
                Success Stories
              </span>
              <h2
                id="testimonials-heading"
                className="font-heading text-4xl sm:text-5xl font-bold text-slate-900 mb-6"
              >
                What Our Students Say
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {testimonials.map((t, i) => (
                <div
                  key={t.name}
                  className="animate-on-scroll bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-lg transition-all duration-500 hover:-translate-y-2 group"
                  style={{ transitionDelay: `${i * 0.15}s` }}
                >
                  <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <User size={20} className="text-blue-600 w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-slate-900 text-sm md:text-base mb-1">
                        {t.name}
                      </div>
                      <div className="text-xs md:text-sm text-slate-500">{t.role}</div>
                    </div>
                    <Quote size={24} className="text-blue-200 shrink-0 w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <p className="text-slate-700 leading-relaxed italic text-sm md:text-base">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex gap-1 mt-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
              {/* Info */}
              <div className="animate-on-scroll">
                <span className="inline-block text-xs font-bold tracking-widest text-blue-600 uppercase mb-4">
                  Get In Touch
                </span>
                <h2
                  id="contact-heading"
                  className="font-heading text-4xl sm:text-5xl font-bold text-slate-900 mb-6"
                >
                  Contact &amp; Visit
                </h2>
                <p className="text-slate-600 text-lg mb-10">
                  <strong className="text-slate-900">
                    Hero Link Systems Limited
                  </strong>
                  <br />
                  Elemoro Shopping Complex, Bogije Bus-stop, Ibeju-Lekki, Lagos
                  State, Nigeria.
                </p>

                <div className="space-y-6 mb-10">
                  {[
                    {
                      icon: Phone,
                      label: "Phone",
                      content: (
                        <a
                          href="tel:+2348032310325"
                          className="text-blue-600 hover:text-blue-700 font-semibold text-lg"
                        >
                          +234 803 231 0325
                        </a>
                      ),
                    },
                    {
                      icon: Mail,
                      content: (
                        <a
                          href="mailto:modemcomputers247@gmail.com"
                          className="text-blue-600 hover:text-blue-700 font-semibold text-lg"
                        >
                          modemcomputers247@gmail.com
                        </a>
                      ),
                      label: "Email",
                    },
                    {
                      icon: Clock,
                      label: "Hours",
                      content: (
                        <span className="font-semibold text-slate-700 text-lg">
                          Mon–Sat: 9AM – 5PM
                        </span>
                      ),
                    },
                  ].map(({ icon: Icon, label, content }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center shrink-0">
                        <Icon size={24} className="text-blue-600" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                          {label}
                        </div>
                        <div className="text-base">{content}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 h-80">
                  <iframe
                    title="Hero Link Systems Limited location on Google Maps"
                    src="https://www.google.com/maps?q=Elemoro+Shopping+Complex,+Bogije+Bus+stop+Ibeju-Lekki,+Lagos&output=embed"
                    className="w-full h-full"
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Form */}
              <div
                className="animate-on-scroll"
                style={{ transitionDelay: "0.15s" }}
              >
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
