import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.william-chen.ca"),
  title: "William Chen | Mechanical & Robotics Design Engineer",
  description:
    "Portfolio of William Chen — mechanical and robotics design engineer. Mechanism design, CAD, FEA, and 3D-printed prototypes for machines that physically handle real-world objects.",
  openGraph: {
    title: "William Chen | Mechanical & Robotics Design Engineer",
    description:
      "Mechanism design, CAD, FEA, and 3D-printed prototypes for machines that physically handle real-world objects.",
    url: "https://www.william-chen.ca",
    siteName: "William Chen",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "William Chen | Mechanical & Robotics Design Engineer",
    description:
      "Mechanism design, CAD, FEA, and 3D-printed prototypes for machines that physically handle real-world objects.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
