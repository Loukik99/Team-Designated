"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function HighlightBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section ref={ref} style={{ padding: 0 }}>
      <div className="grid lg:grid-cols-2">
        {[
          { label: "Luxury Weddings", desc: "Transforming the most important day of your life into an eternal memory, crafted with uncompromising attention to every detail.", bg: "linear-gradient(160deg,#2a2016 0%,#1e1810 50%,#161208 100%)" },
          { label: "Corporate Excellence", desc: "Elevating your brand through meticulously orchestrated summits, galas, and product launches that leave lasting impressions.", bg: "linear-gradient(160deg,#162020 0%,#101818 50%,#0c1414 100%)" },
        ].map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: i === 0 ? -30 : 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            className="relative h-[500px] lg:h-[560px] overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-104" style={{ background: item.bg }} />
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 70%, rgba(184,149,90,0.07), transparent 60%)" }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(28,26,23,0.88) 0%, rgba(28,26,23,0.2) 60%, transparent 100%)" }} />
            <div className="absolute bottom-10 left-10 right-10">
              <p className="section-label mb-3">Specialty</p>
              <h3 className="section-title mb-4" style={{ fontSize: "clamp(28px,3vw,44px)", fontWeight: 300 }}>
                <em style={{ fontStyle: "italic", color: "#CDA96E" }}>{item.label}</em>
              </h3>
              <p style={{ fontSize: "12px", color: "#8C8070", lineHeight: 1.7, fontWeight: 300, maxWidth: "340px" }}>{item.desc}</p>
              <div className="flex items-center gap-2 mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="section-label">Explore</span>
                <span style={{ color: "#B8955A" }}>→</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
