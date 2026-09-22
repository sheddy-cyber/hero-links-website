"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Download,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Home,
  Building,
  GraduationCap,
  Wrench,
  ShoppingBag,
  MessageSquare,
} from "lucide-react";

const navLinks = [
  { href: "/#home", label: "Home", icon: Home },
  { href: "/#about", label: "About", icon: Building },
  { href: "/#courses", label: "Courses", icon: GraduationCap },
  { href: "/#services", label: "Services", icon: Wrench },
  { href: "/accessories", label: "Accessories", icon: ShoppingBag },
  { href: "/#contact", label: "Contact", icon: MessageSquare },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeLink, setActiveLink] = useState("/#home");
  const lastScrollY = useRef(0);
  const isUserClickingRef = useRef(false);

  useEffect(() => {
    // Handle hash changes from clicking nav links
    const updateActiveLink = () => {
      isUserClickingRef.current = true;
      const path = window.location.pathname || "/";
      const hash = window.location.hash || (path === "/" ? "#home" : "");
      const current = `${path}${hash}`;
      setActiveLink(current === "/" ? "/#home" : current);

      // Allow scroll-based updates to resume after a short delay
      setTimeout(() => {
        isUserClickingRef.current = false;
      }, 500);
    };

    updateActiveLink();
    window.addEventListener("hashchange", updateActiveLink);
    return () => window.removeEventListener("hashchange", updateActiveLink);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || window.location.pathname !== "/")
      return;

    const sectionIds = ["home", "about", "courses", "services", "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isUserClickingRef.current) return;

        const viewportTop = window.innerHeight * 0.25;
        const inViewport = entries.filter((entry) => {
          const rect = entry.target.getBoundingClientRect();
          return rect.top <= viewportTop && rect.bottom > viewportTop;
        });

        if (inViewport.length > 0) {
          setActiveLink(`/#${inViewport[0].target.id}`);
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /* ── scroll behaviour ── */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 10);
      setHidden(y > lastScrollY.current && y > 100);
      lastScrollY.current = y <= 0 ? 0 : y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── keyboard + body-scroll lock ── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      {/* ── MOBILE HEADER WITH HAMBURGER MENU ── */}
      <header
        role="banner"
        className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200/50"
      >
        <div className="flex items-center justify-between px-4 py-3">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={close}
          >
            <Image
              src="/images/logo.png"
              alt="Hero Link Systems Limited Logo"
              width={34}
              height={34}
              className="rounded-lg object-contain"
              priority
            />
            <div>
              <div className="font-heading font-bold text-[10px] text-slate-900 leading-tight">
                Hero Link Systems Limited
              </div>
              <div className="text-[8px] text-slate-600 font-medium tracking-wide">
                Power. Connect. Advance.
              </div>
            </div>
          </Link>

          {/* Hamburger button */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-100 text-slate-700 hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* ── DESKTOP FLOATING ISLAND NAVIGATION ── */}
      <header
        role="banner"
        style={{ transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease" }}
        className={[
          "site-header fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden lg:block",
          "bg-white/90 backdrop-blur-xl",
          "rounded-2xl shadow-2xl shadow-slate-900/10 border border-white/50",
          hidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100",
        ].join(" ")}
      >
        <div className="flex items-center gap-3 px-4 py-3">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-3 group shrink-0 pr-5 border-r border-slate-200/50"
            onClick={close}
          >
            <div className="relative">
              <Image
                src="/images/logo.png"
                alt="Hero Link Systems Limited Logo"
                width={38}
                height={38}
                className="rounded-lg transition-transform group-hover:scale-110 object-contain"
                priority
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg opacity-0 group-hover:opacity-20 blur transition-opacity" />
            </div>
            <div className="hidden sm:block">
              <div className="font-heading font-bold text-[10px] text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                Hero Link Systems Limited
              </div>
              <div className="text-[9px] text-slate-600 font-medium tracking-wide">
                Power. Connect. Advance.
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1">
            <ul className="flex items-center gap-1">
              {navLinks.map(({ href, label, icon: Icon }) => {
                const isActive = href === activeLink;
                return (
                  <li key={href} className="list-none">
                    <Link
                      href={href}
                      className={`relative px-3 py-2 text-xs font-medium rounded-lg transition-all duration-300 flex items-center gap-1.5 ${
                        isActive
                          ? "text-blue-600 bg-gradient-to-r from-blue-50 to-blue-100/50"
                          : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                      }`}
                    >
                      <Icon size={14} className={isActive ? "text-blue-600" : "text-slate-400"} />
                      <span className="relative">{label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3 pl-3 border-l border-slate-200/50">
            <a
              href="/docs/Course Outline.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-blue-600 bg-blue-50/50 border border-blue-200/50 rounded-xl hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 whitespace-nowrap"
            >
              <Download size={12} />
              <span>Course Outline</span>
            </a>

            {/* Hamburger — unique design */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              className="lg:hidden relative w-9 h-9 flex items-center justify-center rounded-xl bg-slate-100 text-slate-700 hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              <span
                className="absolute transition-all duration-300"
                style={{
                  opacity: menuOpen ? 0 : 1,
                  transform: menuOpen
                    ? "rotate(90deg) scale(0.5)"
                    : "rotate(0deg) scale(1)",
                }}
              >
                <Menu size={18} />
              </span>
              <span
                className="absolute transition-all duration-300"
                style={{
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen
                    ? "rotate(0deg) scale(1)"
                    : "rotate(-90deg) scale(0.5)",
                }}
              >
                <X size={18} />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* ── BACKDROP ── always in DOM, fades in/out */}
      <div
        aria-hidden="true"
        onClick={close}
        className="lg:hidden fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-[2px] transition-all duration-300"
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      />

      {/* ── MOBILE DRAWER ── full screen overlay */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className="lg:hidden fixed inset-0 z-50 bg-white flex flex-col pt-14"
        style={{
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {/* Close button */}
        <div className="flex justify-end px-4 py-3">
          <button
            onClick={close}
            aria-label="Close menu"
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            <X size={18} />
          </button>
        </div>

        {/* Mobile nav links */}
        <nav aria-label="Mobile navigation" className="flex-1 px-4 py-2">
          <ul className="space-y-2">
            {navLinks.map(({ href, label, icon: Icon }) => {
              const isActive = href === activeLink;
              return (
                <li key={href} className="list-none">
                  <Link
                    href={href}
                    onClick={close}
                    className={[
                      "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-slate-700 hover:bg-slate-50",
                    ].join(" ")}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile footer */}
        <div className="px-4 py-4 border-t border-slate-100">
          <div className="text-center text-xs text-slate-500">
            <p>© 2025 Hero Link Systems Limited</p>
          </div>
        </div>
      </div>
    </>
  );
}
