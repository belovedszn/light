import "./globals.css";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import type { Metadata } from "next";
const sans=Inter({subsets:["latin"],variable:"--font-sans"});
const display=Space_Grotesk({subsets:["latin"],weight:["500","700"],variable:"--font-display"});
const mono=JetBrains_Mono({subsets:["latin"],variable:"--font-mono"});
export const metadata:Metadata={title:"Firstlight — Capital for what comes before obvious",description:"Conceptual early-stage capital marketplace."};
export default function RootLayout({children}:{children:React.ReactNode}){
return <html lang="en" className={`${sans.variable} ${display.variable} ${mono.variable}`}><body className="font-sans antialiased">{children}</body></html>}
