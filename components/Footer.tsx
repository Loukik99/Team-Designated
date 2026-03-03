"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#1C1A17", borderTop: "1px solid rgba(184,149,90,0.1)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex flex-col mb-5">
              <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "20px", fontWeight: 400, color: "#EDE8E0", letterSpacing: "0.12em" }}>Team Designated</span>
              <span style={{ fontFamily: "Jost, sans-serif", fontSize: "9px", letterSpacing: "0.5em", color: "#8C8070", textTransform: "uppercase", fontWeight: 200, marginTop: "3px" }}>Luxury Events</span>
            </div>
            <p style={{ fontSize: "12px", color: "#605850", lineHeight: 1.8, maxWidth: "240px", fontWeight: 200 }}>Designing experiences. Defining luxury. India's premier luxury event management house.</p>
            <div style={{ width: "36px", height: "1px", background: "rgba(184,149,90,0.3)", margin: "20px 0" }} />
            <p style={{ fontSize: "10px", letterSpacing: "0.12em", color: "#605850", fontWeight: 200 }}>hello@teamdesignated.com</p>
          </div>
          {[
            { title: "Services", links: ["Luxury Weddings","Destination Weddings","Corporate Summits","Product Launches","Consultation"] },
            { title: "Company", links: ["About Us","Portfolio","Testimonials","Careers","Contact"] },
            { title: "Connect", links: ["Instagram","Pinterest","LinkedIn","WhatsApp","YouTube"] },
          ].map(col => (
            <div key={col.title}>
              <p style={{ fontSize: "9px", letterSpacing: "0.35em", textTransform: "uppercase", color: "#B8955A", fontWeight: 300, marginBottom: "18px" }}>{col.title}</p>
              <ul style={{ listStyle: "none" }}>
                {col.links.map(link => (
                  <li key={link} style={{ marginBottom: "10px" }}>
                    <Link href="#" style={{ fontSize: "12px", color: "#8C8070", textDecoration: "none", fontWeight: 200, transition: "color 0.3s" }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#CDA96E"}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#8C8070"}>{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6" style={{ borderTop: "1px solid rgba(184,149,90,0.08)" }}>
          <p style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#605850", fontWeight: 200 }}>© {new Date().getFullYear()} Team Designated. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy Policy","Terms of Service"].map(l => (
              <Link key={l} href="#" style={{ fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#605850", textDecoration: "none", fontWeight: 200, transition: "color 0.3s" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#B8955A"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#605850"}>{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
