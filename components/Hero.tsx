"use client";
import { useRef } from "react";
import { motion, useTransform } from "framer-motion";
import { useSceneProgress } from "@/lib/motion";
const F=[["$500 available",-38,-30,-14,-34],["AI",30,-38,10,-30],["MVP",-30,28,-22,22],["Founder verified",34,22,22,26],["$2,500 seeking",-10,-40,-2,-38],["SaaS",40,-4,32,-6],["Lagos",-42,0,-34,-2],["91% match",18,38,6,36],["Revenue",-18,34,-12,30],["Developer Tools",42,34,36,16]] as const;
export default function Hero(){
  const ref=useRef<HTMLElement>(null);const p=useSceneProgress(ref);
  return <section id="top" ref={ref} className="relative motion-safe:h-[220vh]">
    <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
      {F.map(([t,x0,y0,x1,y1],i)=>{
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const x=useTransform(p,[0,.9],[`${x0}vw`,`${x1}vw`]);const y=useTransform(p,[0,.9],[`${y0}vh`,`${y1}vh`]);
        return <motion.span key={t} aria-hidden style={{x,y}} className="absolute hidden border border-ink/15 bg-paper px-2.5 py-1 font-mono text-[11px] text-mute sm:block">{t}</motion.span>})}
      <div className="relative z-10 max-w-4xl px-5 text-center">
        <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-8xl">Capital for what comes before <span className="text-coral">obvious.</span></h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-mute">Firstlight connects ambitious builders with people willing to back them early.</p>
        <div className="mt-8 flex justify-center gap-3">
          <a href="#discover" className="bg-ink px-6 py-3 text-paper transition hover:-translate-y-0.5">Explore the network</a>
          <a href="#converge" className="border border-ink/20 px-6 py-3 transition hover:-translate-y-0.5 hover:border-ink">See how it works</a></div>
      </div></div></section>}
