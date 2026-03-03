"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const items = [
  { id:1, title:"The Mehta Grand Wedding", cat:"Luxury Wedding", span:"col-span-2 row-span-2", bg:"linear-gradient(135deg,#2e2418,#1a140c)" },
  { id:2, title:"Azure Ceremony", cat:"Destination Wedding", span:"", bg:"linear-gradient(135deg,#1a2418,#101810)" },
  { id:3, title:"Stellar Summit", cat:"Corporate Event", span:"", bg:"linear-gradient(135deg,#1c1820,#141018)" },
  { id:4, title:"Kapoor Reception", cat:"Luxury Wedding", span:"", bg:"linear-gradient(135deg,#2a1e12,#1a140c)" },
  { id:5, title:"TechVision Launch", cat:"Product Launch", span:"", bg:"linear-gradient(135deg,#161e1a,#0e1410)" },
  { id:6, title:"Santorini Dream Wedding", cat:"Destination Wedding", span:"col-span-2", bg:"linear-gradient(135deg,#241a10,#181008)" },
];

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [selected, setSelected] = useState<typeof items[0] | null>(null);

  return (
    <section id="portfolio" className="py-32 lg:py-40" style={{ background: "#232018" }} ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}>
          <p className="section-label mb-4">Our Portfolio</p>
          <h2 className="section-title" style={{ fontSize: "clamp(32px,4vw,56px)", fontWeight: 300 }}>
            Moments We've <em style={{ fontStyle: "italic", color: "#CDA96E" }}>Crafted</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 auto-rows-[200px]">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.97 }} animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.08 }}
              className={`group relative overflow-hidden cursor-pointer ${item.span}`}
              onClick={() => setSelected(item)}
            >
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105" style={{ background: item.bg }} />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "rgba(184,149,90,0.05)" }} />
              <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "linear-gradient(to top, rgba(28,26,23,0.92), transparent)" }}>
                <p className="section-label mb-1">{item.cat}</p>
                <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "15px", fontWeight: 400, color: "#EDE8E0" }}>{item.title}</p>
              </div>
              <div className="absolute inset-0 border border-transparent group-hover:border-[rgba(184,149,90,0.3)] transition-all duration-500 pointer-events-none" />
              <div className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#1C1A17] text-sm font-bold" style={{ background: "#B8955A" }}>+</div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{ background: "rgba(20,18,15,0.94)", backdropFilter: "blur(10px)" }}
            onClick={() => setSelected(null)}
          >
            <motion.div initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.92, opacity: 0 }}
              className="max-w-4xl w-full border" style={{ borderColor: "rgba(184,149,90,0.25)" }}
              onClick={e => e.stopPropagation()}
            >
              <div className="h-[55vh]" style={{ background: selected.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "28px", letterSpacing: "0.4em", color: "rgba(184,149,90,0.15)" }}>✦</span>
              </div>
              <div className="flex justify-between items-center p-6" style={{ background: "#1C1A17", borderTop: "1px solid rgba(184,149,90,0.15)" }}>
                <div>
                  <p className="section-label mb-1">{selected.cat}</p>
                  <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "18px", fontWeight: 300, color: "#EDE8E0" }}>{selected.title}</p>
                </div>
                <button onClick={() => setSelected(null)} className="w-9 h-9 border flex items-center justify-center text-lg transition-all duration-300"
                  style={{ borderColor: "rgba(184,149,90,0.3)", color: "#B8955A", background: "transparent" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#B8955A"; (e.currentTarget as HTMLElement).style.color = "#1C1A17"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "#B8955A"; }}
                >×</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
