"use client";
import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { InvestorProfile, investor, opportunities } from "@/data";
import { score } from "@/lib/matching";
import { useSceneProgress, useStep } from "@/lib/motion";
import { Mono } from "./Shared";
const INPUTS=["Capital","Sector","Stage","Risk","Geography"];
const toggle=(a:string[],v:string)=>a.includes(v)?a.filter(x=>x!==v):[...a,v];
export default function Matching(){
  const ref=useRef<HTMLElement>(null);const p=useSceneProgress(ref);const step=useStep(p,4);
  const [inv,setInv]=useState<InvestorProfile>(investor);
  const ranked=useMemo(()=>opportunities.map(o=>({o,s:score(o,inv)})).sort((a,b)=>b.s-a.s).slice(0,4),[inv]);
  const chip=(on:boolean)=>`border px-2.5 py-1 text-xs ${on?"bg-ink text-paper border-ink":"border-ink/15"}`;
  return <section id="matching" ref={ref} className="relative motion-safe:h-[300vh]">
    <div className="sticky top-0 flex h-screen flex-col items-center justify-center gap-8 px-5 md:flex-row md:gap-14">
      <div className="w-full max-w-sm border border-ink/12 bg-white p-6">
        <Mono className="text-coral">INVESTOR PROFILE</Mono>
        <Mono className="mt-4 block text-mute">CAPITAL AVAILABLE</Mono><p className="font-display text-3xl font-bold">$2,000</p>
        <Mono className="mt-4 block text-mute">SECTORS</Mono>
        <div className="mt-1 flex flex-wrap gap-1.5">{["AI","SaaS","Developer Tools","Fintech","Games"].map(s=><button key={s} aria-pressed={inv.preferredSectors.includes(s)} className={chip(inv.preferredSectors.includes(s))} onClick={()=>setInv(i=>({...i,preferredSectors:toggle(i.preferredSectors,s)}))}>{s}</button>)}</div>
        <Mono className="mt-4 block text-mute">STAGE</Mono>
        <div className="mt-1 flex flex-wrap gap-1.5">{["Idea","Prototype","MVP","Early traction","Revenue"].map(s=><button key={s} aria-pressed={inv.preferredStages.includes(s)} className={chip(inv.preferredStages.includes(s))} onClick={()=>setInv(i=>({...i,preferredStages:toggle(i.preferredStages,s)}))}>{s}</button>)}</div>
        <div className="mt-4 flex justify-between text-sm"><span>Typical check $250–$750</span><span>Risk: {inv.riskTolerance}</span></div></div>
      <div className="w-full max-w-md">
        <h2 className="font-display text-4xl font-bold leading-none md:text-5xl">Matched on what you actually want.</h2>
        <div className="mt-6 flex flex-wrap gap-2" aria-hidden>{INPUTS.map((t,i)=><motion.span key={t} animate={{opacity:step>=1?1:.3,scale:step>=2?.92:1}} transition={{delay:i*.05}} className="border border-ink/20 px-2 py-1 font-mono text-[11px]">{t}</motion.span>)}</div>
        <motion.div animate={{opacity:step>=2?1:.2}} className="my-4 bg-coral px-3 py-1.5 font-mono text-xs text-white inline-block">MATCH</motion.div>
        <ol className="space-y-2" aria-live="polite">{ranked.map(({o,s})=><motion.li layout key={o.id} animate={{opacity:step>=3?1:.15}} className="flex justify-between border border-ink/12 bg-white px-4 py-3">
          <span className="font-medium">{o.name}</span><Mono className="text-coral">{s}%</Mono></motion.li>)}</ol>
      </div></div></section>}
