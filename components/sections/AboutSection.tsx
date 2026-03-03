"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "500+", label: "Events Curated" },
  { value: "12+", label: "Years of Excellence" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "30+", label: "Cities Served" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 lg:py-40" style={{ background: "#232018" }} ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="brass-line mb-24" />
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }} className="relative"
          >
            <div className="relative h-[500px] lg:h-[600px]">
              <div className="absolute -top-4 -left-4 w-full h-full border" style={{ borderColor: "rgba(184,149,90,0.15)" }} />
              <div className="relative w-full h-full flex items-center justify-center" style={{ background: "#2A2720" }}>
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="rgba(184,149,90,0.15)" strokeWidth="0.8">
                  <rect x="10" y="10" width="80" height="80"/>
                  <rect x="22" y="22" width="56" height="56"/>
                  <line x1="10" y1="50" x2="90" y2="50"/>
                  <line x1="50" y1="10" x2="50" y2="90"/>
                  <circle cx="50" cy="50" r="14"/>
                </svg>
              </div>
              <div className="absolute bottom-6 right-6 w-16 h-16" style={{ borderBottom: "1px solid rgba(184,149,90,0.4)", borderRight: "1px solid rgba(184,149,90,0.4)" }} />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-8 -right-4 lg:-right-10 border p-7"
              style={{ background: "#1C1A17", borderColor: "rgba(184,149,90,0.2)" }}
            >
              <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "44px", fontWeight: 300, color: "#CDA96E", lineHeight: 1 }}>500+</p>
              <p className="section-label mt-1">Luxury Events</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }} className="lg:pl-6"
          >
            <p className="section-label mb-5">Our Story</p>
            <h2 className="section-title mb-6" style={{ fontSize: "clamp(32px,3.5vw,46px)", fontWeight: 300 }}>
              Where Vision Meets{" "}
              <em style={{ fontStyle: "italic", color: "#CDA96E" }}>Flawless Execution</em>
            </h2>
            <div style={{ width: "44px", height: "1px", background: "#B8955A", marginBottom: "28px" }} />
            <p style={{ color: "#B0A090", fontSize: "14px", lineHeight: 1.85, fontWeight: 300, marginBottom: "16px" }}>
              Team Designated was born from a singular conviction — that every celebration deserves to be as extraordinary as the people it honours. We don't plan events. We architect memories.
            </p>
            <p style={{ color: "#B0A090", fontSize: "14px", lineHeight: 1.85, fontWeight: 300, marginBottom: "40px" }}>
              From intimate luxury weddings to sprawling corporate summits, our curatorial approach blends meticulous detail with artistic sensibility — delivering experiences that transcend expectation.
            </p>
            <div className="grid grid-cols-2 gap-px" style={{ background: "rgba(184,149,90,0.12)" }}>
              {stats.map((stat, i) => (
                <motion.div key={stat.label} initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.6 + i * 0.1 }} className="p-6" style={{ background: "#232018" }}
                >
                  <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "28px", fontWeight: 300, color: "#CDA96E" }}>{stat.value}</p>
                  <p className="section-label mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="brass-line mt-24" />
      </div>
    </section>
  );
}
