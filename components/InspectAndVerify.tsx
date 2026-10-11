"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Opportunity, fmt } from "@/data";
import { useSceneProgress, useStep } from "@/lib/motion";
import { Mono, Status } from "./Shared";
const LAYERS=[["IDENTITY","founder","VERIFIED"],["COMPANY","company","VERIFIED"],["PRODUCT","product","VERIFIED"],["TRACTION","traction","REVIEWED"],["DOCUMENTS","documents","REVIEWED"]] as const;
export default function InspectAndVerify({o}:{o:Opportunity}){
  const ref=useRef<HTMLElement>(null);const p=useSceneProgress(ref);
  const step=useStep(p,10); // 0-3 inspect reveal, 4-9 verification
  const rows:[string,string][]=[["Stage",o.stage],["Seeking",fmt(o.capitalSought)],["Traction",o.traction],["Sector",o.sector]];
  const verifying=step>=4;const resolved=(i:number)=>step>=5+i;
  return <section id="trust" ref={ref} className="relative bg-night text-paper motion-safe:h-[400vh]">
    <div className="sticky top-0 flex h-screen flex-col items-center justify-center gap-8 px-5 md:flex-row md:gap-16">
      <div className="max-w-md"><Mono className="text-coral">{verifying?"TRUST":"ONE OPPORTUNITY"}</Mono>
        <h2 className="mt-3 font-display text-4xl font-bold leading-none md:text-6xl">{verifying?"Know what has been checked.":o.name}</h2>
        <p className="mt-4 text-white/60">{verifying?"Verification does not make a startup safe. It makes uncertainty visible.":o.description}</p></div>
      <div className="w-full max-w-sm dline bg-white/[.03] p-6" aria-live="polite">
        <div className="flex justify-between"><Mono className="font-bold">{o.name.toUpperCase()}</Mono><Mono className="text-white/50">OPP-0841</Mono></div>
        {!verifying?<dl className="mt-6 space-y-4">{rows.map(([k,v],i)=><motion.div key={k} initial={false} animate={{opacity:step>=i?1:0,y:step>=i?0:10}} className="flex justify-between border-b border-white/10 pb-3">
          <dt className="text-sm text-white/50">{k}</dt><dd className="font-mono text-sm">{v}</dd></motion.div>)}</dl>
        :<ul className="mt-6 space-y-3">{LAYERS.map(([l,key,done],i)=><motion.li key={l} initial={false} animate={{x:resolved(i)?0:6,opacity:step>=4+i?1:.3}} className="flex justify-between dline px-4 py-3">
          <Mono>{l}</Mono>{resolved(i)?(o.verification[key]?<Status v={done} dark/>:<Status v="PENDING"/>):<Status v="CHECKING..."/>}</motion.li>)}</ul>}
      </div></div></section>}
