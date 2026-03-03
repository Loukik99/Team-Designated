"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  { number: "01", title: "Luxury Weddings", desc: "Bespoke celebrations designed around your love story. Every detail impeccably curated, from venue to final farewell." },
  { number: "02", title: "Destination Weddings", desc: "Breathtaking venues, seamless logistics, and once-in-a-lifetime experiences wherever you choose to say your vows." },
  { number: "03", title: "Corporate Summits", desc: "Annual conferences, leadership retreats, and gala evenings crafted to inspire, connect, and elevate your prestige." },
  { number: "04", title: "Product Launches", desc: "Create an unforgettable first impression. Launch experiences that command attention and build lasting brand equity." },
  { number: "05", title: "Event Consultation", desc: "Expert creative direction, strategic thinking, and meticulous planning for any scale — concept to execution." },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-32 lg:py-40" style={{ background: "#1C1A17" }} ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}>
          <p className="section-label mb-4">What We Do</p>
          <h2 className="section-title" style={{ fontSize: "clamp(32px,4vw,56px)", fontWeight: 300 }}>
            Our <em style={{ fontStyle: "italic", color: "#CDA96E" }}>Services</em>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(184,149,90,0.08)" }}>
          {services.map((svc, i) => (
            <motion.div
              key={svc.number}
              initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden p-10 cursor-pointer"
              style={{ background: "#1C1A17" }}
            >
              <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700" style={{ background: "#B8955A" }} />
              <div className="absolute inset-0 border border-transparent group-hover:border-[rgba(184,149,90,0.25)] transition-all duration-500" />
              <p className="section-label mb-6">{svc.number}</p>
              <h3 className="group-hover:text-[#CDA96E] transition-colors duration-300 mb-4"
                style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "22px", fontWeight: 400, color: "#EDE8E0", lineHeight: 1.2 }}>
                {svc.title}
              </h3>
              <p style={{ fontSize: "12px", color: "#8C8070", lineHeight: 1.75, fontWeight: 300 }}>{svc.desc}</p>
              <div className="flex items-center gap-2 mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="section-label">Explore</span>
                <span style={{ color: "#B8955A" }}>→</span>
              </div>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.8 }}
            className="p-10 flex flex-col justify-between cursor-pointer group"
            style={{ background: "#B8955A" }}
          >
            <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "26px", fontWeight: 300, color: "#1C1A17", lineHeight: 1.3 }}>
              Ready to Create Something <em style={{ fontStyle: "italic" }}>Extraordinary?</em>
            </h3>
            <div className="flex items-center gap-3 mt-6">
              <span style={{ fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(28,26,23,0.7)", fontWeight: 400 }}>Begin Planning</span>
              <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }} style={{ color: "rgba(28,26,23,0.7)", fontSize: "16px" }}>→</motion.span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
