"use client";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { Opportunity, SECTORS, STAGES, fmt, opportunities } from "@/data";
import { Mono } from "./Shared";
export function OpportunityCard({o,selected,watched,onSelect,onWatch}:{o:Opportunity;selected:boolean;watched:boolean;onSelect:()=>void;onWatch:()=>void}){
  return <motion.article layout initial={{opacity:0,y:24}} animate={{opacity:selected?1:.8,y:0}} exit={{opacity:0}} whileHover={{y:-3}}
    className={`border bg-white p-5 text-left ${selected?"border-coral":"border-ink/12"}`}>
    <button onClick={onSelect} aria-pressed={selected} className="block w-full text-left">
      <div className="flex justify-between"><Mono className="font-bold">{o.name.toUpperCase()}</Mono><Mono className="text-coral">{o.matchScore}%</Mono></div>
      <p className="mt-3 min-h-[3rem] text-[15px]">{o.description}</p>
      <div className="mt-4 flex justify-between"><Mono className="text-mute">{o.stage} · {o.sector}</Mono><Mono>{fmt(o.capitalSought)} seeking</Mono></div>
      <Mono className="mt-2 block text-mute">{o.traction}</Mono></button>
    <button onClick={onWatch} aria-pressed={watched} className="mt-4 flex items-center gap-1.5 text-xs text-mute hover:text-ink">
      {watched?<EyeOff size={14}/>:<Eye size={14}/>}{watched?"WATCHING":"Watch"}</button></motion.article>}
export default function Feed({selected,onSelect}:{selected:string;onSelect:(id:string)=>void}){
  const [sector,setSector]=useState("All");const [stage,setStage]=useState<string|null>(null);const [watch,setWatch]=useState<Set<string>>(new Set());
  const list=useMemo(()=>opportunities.filter(o=>(sector==="All"||o.sector===sector)&&(!stage||o.stage===stage)),[sector,stage]);
  const chip=(on:boolean)=>`px-3 py-1.5 text-sm border transition ${on?"bg-ink text-paper border-ink":"border-ink/15 hover:border-ink"}`;
  return <section id="discover" className="mx-auto max-w-[1300px] px-5 py-28">
    <h2 className="max-w-3xl font-display text-4xl font-bold leading-none md:text-7xl">Find what is being built before everyone else does.</h2>
    <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Sector filter">{SECTORS.map(s=><button key={s} className={chip(sector===s)} aria-pressed={sector===s} onClick={()=>setSector(s)}>{s}</button>)}</div>
    <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label="Stage filter">{STAGES.map(s=><button key={s} className={chip(stage===s)} aria-pressed={stage===s} onClick={()=>setStage(stage===s?null:s)}>{s}</button>)}</div>
    <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-md:auto-cols-[80%] max-md:grid-flow-col max-md:grid-cols-none max-md:overflow-x-auto">
      <AnimatePresence mode="popLayout">{list.map(o=><OpportunityCard key={o.id} o={o} selected={selected===o.id} watched={watch.has(o.id)} onSelect={()=>onSelect(o.id)}
        onWatch={()=>setWatch(w=>{const n=new Set(w);n.has(o.id)?n.delete(o.id):n.add(o.id);return n})}/>)}</AnimatePresence></div>
    {!list.length&&<p className="mt-8 text-mute">No opportunities match these filters.</p>}
  </section>}
