"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const eventTypes = ["Luxury Wedding","Destination Wedding","Corporate Summit","Product Launch","Anniversary Celebration","Other"];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name:"", email:"", phone:"", eventType:"", eventDate:"", message:"" });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };
  const handleWhatsApp = () => {
    const msg = encodeURIComponent(`Hello Team Designated! I'm interested in planning a ${form.eventType||"luxury event"}. My name is ${form.name||"—"}.`);
    window.open(`https://wa.me/919876543210?text=${msg}`, "_blank");
  };

  const inputStyle = { width:"100%", background:"#2A2720", border:"1px solid rgba(184,149,90,0.15)", borderBottom:"1px solid rgba(184,149,90,0.3)", color:"#EDE8E0", fontFamily:"Jost, sans-serif", fontSize:"13px", padding:"14px 16px", outline:"none", fontWeight:300 };
  const labelStyle = { fontSize:"9px", letterSpacing:"0.25em", textTransform:"uppercase" as const, color:"#8C8070", display:"block", marginBottom:"7px", fontWeight:400 };

  return (
    <section id="contact" className="py-32 lg:py-40" style={{ background: "#232018" }} ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}>
          <p className="section-label mb-4">Get In Touch</p>
          <h2 className="section-title mb-4" style={{ fontSize: "clamp(32px,4vw,56px)", fontWeight: 300 }}>
            Begin Your <em style={{ fontStyle: "italic", color: "#CDA96E" }}>Luxury Experience.</em>
          </h2>
          <p style={{ fontSize: "13px", color: "#8C8070", fontWeight: 200 }}>Share your vision. Our curators will be in touch within 24 hours.</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-16 lg:gap-20">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }} className="lg:col-span-2 space-y-8">
            {[
              { label:"Email Us", value:"hello@teamdesignated.com", href:"mailto:hello@teamdesignated.com" },
              { label:"Call Us", value:"+91 98765 43210", href:"tel:+919876543210" },
              { label:"Visit Us", value:"Mumbai, Maharashtra, India", href:"#" },
            ].map(item => (
              <div key={item.label}>
                <p className="section-label mb-2">{item.label}</p>
                <a href={item.href} style={{ fontSize:"14px", color:"#B0A090", textDecoration:"none", fontWeight:300, transition:"color 0.3s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#CDA96E"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#B0A090"}>{item.value}</a>
              </div>
            ))}
            <button onClick={handleWhatsApp} className="flex items-center gap-3 w-full p-4 transition-all duration-300"
              style={{ border:"1px solid rgba(37,211,102,0.25)", color:"#25D366", background:"transparent", cursor:"pointer" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(37,211,102,0.07)"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "transparent"}
            >
              <svg width="18" height="18" fill="#25D366" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              <span style={{ fontSize:"9px", letterSpacing:"0.2em", textTransform:"uppercase", fontWeight:400 }}>Chat on WhatsApp</span>
            </button>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="lg:col-span-3">
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
                className="border p-16 text-center" style={{ borderColor: "rgba(184,149,90,0.25)", background: "#1C1A17" }}>
                <div className="w-14 h-14 border flex items-center justify-center mx-auto mb-6 text-xl" style={{ borderColor: "rgba(184,149,90,0.3)", color: "#B8955A" }}>✓</div>
                <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "24px", fontWeight: 300, color: "#EDE8E0", marginBottom: "12px" }}>Thank You</h3>
                <p style={{ fontSize: "13px", color: "#8C8070", fontWeight: 300 }}>Your enquiry has been received. We'll be in touch within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><label style={labelStyle}>Full Name *</label><input name="name" required value={form.name} onChange={handleChange} style={inputStyle} placeholder="Your name" /></div>
                  <div><label style={labelStyle}>Email *</label><input name="email" type="email" required value={form.email} onChange={handleChange} style={inputStyle} placeholder="your@email.com" /></div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><label style={labelStyle}>Phone</label><input name="phone" type="tel" value={form.phone} onChange={handleChange} style={inputStyle} placeholder="+91 00000 00000" /></div>
                  <div><label style={labelStyle}>Event Type *</label>
                    <select name="eventType" required value={form.eventType} onChange={handleChange} style={{ ...inputStyle, appearance:"none", cursor:"pointer" }}>
                      <option value="" disabled>Select event type</option>
                      {eventTypes.map(t => <option key={t} value={t} style={{ background:"#2A2720" }}>{t}</option>)}
                    </select>
                  </div>
                </div>
                <div><label style={labelStyle}>Event Date</label><input name="eventDate" type="date" value={form.eventDate} onChange={handleChange} style={{ ...inputStyle, colorScheme:"dark" }} /></div>
                <div><label style={labelStyle}>Tell Us Your Vision</label><textarea name="message" rows={5} value={form.message} onChange={handleChange} style={{ ...inputStyle, resize:"none" }} placeholder="Share your vision, guest count, preferences…" /></div>
                <button type="submit" className="btn-solid w-full py-5 text-[10px] tracking-[0.3em]">Submit Enquiry</button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
