"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      animate={{
        backgroundColor: scrolled ? "rgba(28,26,23,0.97)" : "transparent",
        borderBottomColor: scrolled ? "rgba(184,149,90,0.15)" : "transparent",
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
      }}
      style={{ backdropFilter: scrolled ? "blur(12px)" : "none" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-none">
          <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "20px", fontWeight: 400, color: "#EDE8E0", letterSpacing: "0.12em" }}>
            Team Designated
          </span>
          <span style={{ fontFamily: "Jost, sans-serif", fontSize: "9px", letterSpacing: "0.5em", color: "#8C8070", textTransform: "uppercase", fontWeight: 200, marginTop: "2px" }}>
            Luxury Events
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}
              className="text-[10px] tracking-[0.22em] uppercase font-light transition-colors duration-300"
              style={{ fontFamily: "Jost, sans-serif", color: "#B0A090" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#CDA96E"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#B0A090"}
            >
              {link.label}
            </Link>
          ))}
          <Link href="#contact" className="btn-brass text-[10px] px-5 py-2.5">
            Enquire Now
          </Link>
        </div>

        <button className="lg:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <motion.span className="block w-6 h-px bg-[#B8955A]" animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }} />
          <motion.span className="block w-6 h-px bg-[#B8955A]" animate={{ opacity: menuOpen ? 0 : 1 }} />
          <motion.span className="block w-6 h-px bg-[#B8955A]" animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t px-6 py-8 flex flex-col gap-6"
            style={{ background: "rgba(28,26,23,0.98)", borderTopColor: "rgba(184,149,90,0.15)" }}
          >
            {navLinks.map((link, i) => (
              <motion.div key={link.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.07 }}>
                <Link href={link.href} onClick={() => setMenuOpen(false)}
                  className="text-[11px] tracking-[0.3em] uppercase font-light transition-colors"
                  style={{ fontFamily: "Jost, sans-serif", color: "#8C8070" }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <Link href="#contact" onClick={() => setMenuOpen(false)} className="btn-solid text-center text-[10px] mt-2">
              Enquire Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
