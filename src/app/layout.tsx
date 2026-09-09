import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: {default:"Deepak Thimaya | Multi-faceted personality",template:"%s | Deepak Thimaya"}, description:"The official portfolio of Deepak Thimaya.", metadataBase:new URL("https://www.deepakthimaya.com") };
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body>{children}</body></html>}
