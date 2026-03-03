"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const testimonials = [
  { quote: "Team Designated transformed our wedding into something beyond our wildest dreams. Every detail was flawless — from the floral arrangements to the final farewell. Our guests still talk about it.", author: "Priya & Arjun Mehta", event: "Luxury Wedding, Mumbai", initials: "PM" },
  { quote: "Our annual leadership summit was elevated to an entirely new level. The production quality, the ambiance, the seamless execution — it reflected our brand better than we ever imagined possible.", author: "Rajeev Krishnamurthy", event: "Corporate Summit, Bangalore", initials: "RK" },
  { quote: "We chose Santorini and Team Designated made it feel effortless. They handled everything while we simply enjoyed every breathtaking moment.", author: "Sneha & Dev Kapoor", event: "Destination Wedding, Santorini", initials: "SK" },
  { quote: "The product launch they orchestrated generated incredible buzz. Immersive, brand-aligned, and absolutely memorable. Truly world-class execution.", author: "Ananya Sharma", event: "Product Launch, Delhi", initials: "AS" },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [cur, setCur] = useState(0);
  const prev = () => setCur(c => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCur(c => (c + 1) % testimonials.length);

  return (
    <section id="testimonials" className="py-32 lg:py-40" style={{ background: "#1C1A17" }} ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="brass-line mb-24" />
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}>
          <p className="section-label mb-4">Client Words</p>
          <h2 className="section-title" style={{ fontSize: "clamp(32px,4vw,56px)", fontWeight: 300 }}>
            Stories of <em style={{ fontStyle: "italic", color: "#CDA96E" }}>Excellence</em>
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }} className="max-w-3xl mx-auto text-center">
          <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "120px", lineHeight: 0.75, color: "rgba(184,149,90,0.08)", userSelect: "none" }}>"</div>
          <AnimatePresence mode="wait">
            <motion.div key={cur} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.45 }}>
              <p style={{ fontFamily: "Cormorant Garamond, serif", fontStyle: "italic", fontSize: "clamp(17px,2.2vw,23px)", fontWeight: 300, color: "#C8BFB0", lineHeight: 1.65, padding: "0 16px", marginBottom: "36px" }}>
                &ldquo;{testimonials[cur].quote}&rdquo;
              </p>
              <div className="flex items-center justify-center gap-4 mb-5">
                <div style={{ height: "1px", width: "36px", background: "rgba(184,149,90,0.3)" }} />
                <div style={{ width: "5px", height: "5px", background: "#B8955A", transform: "rotate(45deg)" }} />
                <div style={{ height: "1px", width: "36px", background: "rgba(184,149,90,0.3)" }} />
              </div>
              <div className="flex items-center justify-center gap-4">
                <div className="w-10 h-10 border flex items-center justify-center text-xs font-light" style={{ borderColor: "rgba(184,149,90,0.25)", color: "#B8955A", background: "#2A2720" }}>
                  {testimonials[cur].initials}
                </div>
                <div className="text-left">
                  <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "15px", fontWeight: 400, color: "#EDE8E0" }}>{testimonials[cur].author}</p>
                  <p className="section-label">{testimonials[cur].event}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-6 mt-10">
            <button onClick={prev} className="w-10 h-10 border transition-all duration-300 text-base"
              style={{ borderColor: "rgba(184,149,90,0.25)", color: "#B8955A", background: "transparent", cursor: "pointer" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#B8955A"; (e.currentTarget as HTMLElement).style.color = "#1C1A17"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "#B8955A"; }}>←</button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCur(i)} style={{ height: "3px", width: i === cur ? "24px" : "8px", background: i === cur ? "#B8955A" : "rgba(184,149,90,0.2)", border: "none", cursor: "pointer", padding: 0, transition: "all 0.3s" }} />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 border transition-all duration-300 text-base"
              style={{ borderColor: "rgba(184,149,90,0.25)", color: "#B8955A", background: "transparent", cursor: "pointer" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#B8955A"; (e.currentTarget as HTMLElement).style.color = "#1C1A17"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "#B8955A"; }}>→</button>
          </div>
        </motion.div>
        <div className="brass-line mt-24" />
      </div>
    </section>
  );
}
