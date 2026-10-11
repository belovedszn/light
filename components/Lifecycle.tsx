"use client";
import { useRef } from "react";
import { motion, useTransform } from "framer-motion";
import { lifecycle } from "@/data";
import { useSceneProgress, useStep } from "@/lib/motion";
import { Disclosure, Mono } from "./Shared";
export default function Lifecycle(){
  const ref=useRef<HTMLElement>(null);const p=useSceneProgress(ref);const step=useStep(p,lifecycle.length,0,.95);
  const top=useTransform(p,[0,.95],["0%","100%"]);
  return <section id="lifecycle" ref={ref} className="relative bg-night text-paper motion-safe:h-[400vh]">
    <div className="sticky top-0 flex h-screen flex-col items-center justify-center gap-6 px-5 md:flex-row md:gap-16">
      <div className="max-w-md"><Mono className="text-coral">CAPITAL JOURNEY · FIRSTLIGHT-INV-02841</Mono>
        <h2 className="mt-3 font-display text-4xl font-bold leading-none md:text-6xl">The same $500, in a controlled lifecycle.</h2>
        <div className="mt-6"><Disclosure dark/></div></div>
      <div className="relative w-full max-w-sm py-2">
        <div className="absolute bottom-2 left-[22px] top-2 w-px bg-white/15"/>
        <motion.div aria-label="$500 investment" style={{top}} className="absolute left-0 z-10 -translate-y-1/2 bg-coral px-2 py-1 font-mono text-xs font-bold text-white md:text-sm">$500</motion.div>
        <ol className="space-y-3 pl-16">{lifecycle.map((l,i)=><li key={l.s} className={`flex justify-between font-mono text-xs transition-opacity ${i<=step?"opacity-100":"opacity-30"}`}>
          <span className={i===step?"text-coral":""}>{l.s}</span><span className="text-white/50">{i<=step?l.t:"--:--:--"}</span></li>)}</ol>
        <div className="mt-6 pl-16 text-sm text-white/60">{step>=5&&"OrbitLayer · SAFE · Active · Ownership record confirmed (conceptual)"}</div>
      </div></div></section>}
