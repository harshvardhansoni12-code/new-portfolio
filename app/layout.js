import { Space_Mono, Inter } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Harsh Vardhan Soni — Portfolio",
  description: "Full-stack Developer & AIML Engineer. Building real-time web applications, AI tools, and scalable systems.",
  keywords: ["Harsh Vardhan Soni", "Portfolio", "Next.js", "React", "Full Stack", "AIML", "Developer"],
  authors: [{ name: "Harsh Vardhan Soni" }],
  openGraph: {
    title: "Harsh Vardhan Soni — Portfolio",
    description: "Full-stack Developer & AIML Engineer. Building real-time web applications, AI tools, and scalable systems.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceMono.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#FAF7F2] text-[#2D2621] font-sans antialiased selection:bg-[#E5DFD3] selection:text-[#1F1916]">
        {children}
      </body>
    </html>
  );
}
