"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const videos = ["/video/hero1.mp4", "/video/hero2.mp4", "/video/hero3.mp4"];

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fading, setFading] = useState(false);

  const advanceVideo = useCallback(() => {
    setFading(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
      setFading(false);
    }, 700);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.src = videos[currentIndex];
    video.load();
    video.play().catch(() => {});
    const onEnd = () => advanceVideo();
    video.addEventListener("ended", onEnd);
    return () => video.removeEventListener("ended", onEnd);
  }, [currentIndex, advanceVideo]);

  return (
    <section className="relative w-full h-screen min-h-[640px] overflow-hidden flex items-center justify-center bg-[#0D0D0D]">

      {/* VIDEO */}
      <motion.video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        animate={{ opacity: fading ? 0 : 1 }}
        transition={{ duration: 0.7 }}
        autoPlay
        muted
        playsInline
        preload="auto"
      />

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-black/75 z-10" />
      <div className="absolute inset-0 z-10" style={{background:'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)'}} />

      MAIN CONTENT
      <div className="relative z-20 w-full text-center px-4 select-none">

        {/* <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-[10px] tracking-[0.5em] uppercase text-[#B8955A] font-light mb-5"
          style={{ fontFamily: "Jost, sans-serif" }}
        >
          Est. 2018 · Premium Event Curators
        </motion.p> */}

        <div style={{ overflow: "hidden", lineHeight: 0.85 }}>
          <motion.h1
            initial={{ y: "105%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Jost', 'Montserrat', sans-serif",
              fontSize: "clamp(60px, 12vw, 150px)",
              fontWeight: 900,
              textTransform: "uppercase",
              color: "#ffffff",
              letterSpacing: "-0.02em",
              lineHeight: 0.85,
              textShadow: "0 8px 80px rgba(0,0,0,0.6)",
            }}
          >
            TEAM
          </motion.h1>
        </div>

        <div style={{ overflow: "hidden", lineHeight: 0.85 }}>
          <motion.h1
            initial={{ y: "105%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Jost', 'Montserrat', sans-serif",
              fontSize: "clamp(60px, 12vw, 150px)",
              fontWeight: 900,
              textTransform: "uppercase",
              color: "#ffffff",
              letterSpacing: "-0.02em",
              lineHeight: 0.85,
              textShadow: "0 8px 80px rgba(0,0,0,0.6)",
            }}
          >
            DESIGNATED
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="text-[10px] tracking-[0.35em] uppercase text-white/40 font-light mt-7 mb-10"
          style={{ fontFamily: "Jost, sans-serif" }}
        >
          Luxury Weddings &nbsp;·&nbsp; Destination Celebrations &nbsp;·&nbsp; Corporate Excellence
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <Link
            href="#contact"
            style={{ fontFamily: "Jost, sans-serif", background: "#B8955A", color: "#1C1A17" }}
            className="inline-block px-9 py-4 text-[10px] font-semibold tracking-[0.25em] uppercase transition-all duration-300 hover:brightness-110 hover:-translate-y-px"
          >
            Begin Your Journey
          </Link>
          <Link
            href="#portfolio"
            className="inline-block px-9 py-[15px] text-[10px] font-light tracking-[0.25em] uppercase transition-all duration-300 text-white border border-white/25 hover:border-[#B8955A] hover:text-[#B8955A]"
            style={{ fontFamily: "Jost, sans-serif" }}
          >
            View Our Work
          </Link>
        </motion.div>
      </div>

      {/* VIDEO COUNTER */}
      <motion.div
        className="absolute top-28 right-10 z-30 text-right"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="block"
            style={{ fontFamily: "Jost, sans-serif", fontSize: "52px", fontWeight: 800, color: "rgba(255,255,255,0.06)", lineHeight: 1 }}
          >
            0{currentIndex + 1}
          </motion.span>
        </AnimatePresence>
        <span className="block text-[9px] tracking-[0.3em] uppercase" style={{ color: "rgba(184,149,90,0.4)", fontFamily: "Jost, sans-serif", fontWeight: 300 }}>
          / 03
        </span>
      </motion.div>

      {/* PROGRESS DOTS */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        {videos.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className="h-[2px] transition-all duration-500 border-none outline-none cursor-pointer"
            style={{ width: i === currentIndex ? "40px" : "16px", background: i === currentIndex ? "#B8955A" : "rgba(255,255,255,0.2)", padding: 0 }}
            aria-label={`Video ${i + 1}`}
          />
        ))}
      </motion.div>

      {/* SCROLL */}
      <motion.div
        className="absolute bottom-8 right-10 z-30 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="w-px bg-gradient-to-b from-[#B8955A]/50 to-transparent"
          style={{ height: "48px" }}
          animate={{ scaleY: [1, 0.4, 1], opacity: [0.5, 0.15, 0.5] }}
          transition={{ duration: 2.2, repeat: Infinity }}
        />
      </motion.div>

    </section>
  );
}
