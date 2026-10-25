import type { Metadata, Viewport } from "next";
import { heroSlides } from "@/content/hero-slides";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Deepak Thimaya | Multi-faceted personality",
    template: "%s | Deepak Thimaya",
  },
  description: "The official portfolio of Deepak Thimaya.",
  metadataBase: new URL("https://www.deepakthimaya.com"),
  applicationName: "Deepak Thimaya",
  icons: {
    icon: [
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#67a83f",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {heroSlides.map((slide, index) => (
          <link
            key={slide.src}
            rel="preload"
            as="image"
            href={slide.src}
            type="image/webp"
            fetchPriority={index === 0 ? "high" : "auto"}
          />
        ))}
      </head>
      <body>{children}</body>
    </html>
  );
}
