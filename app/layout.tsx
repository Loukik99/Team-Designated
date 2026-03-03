import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Team Designated | Luxury Event Management",
  description: "Designing Experiences. Defining Luxury. Premier luxury event management for weddings, destination celebrations, and corporate excellence.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
