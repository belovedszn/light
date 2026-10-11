"use client";
import { motion } from "framer-motion";
import { fmt, portfolio } from "@/data";
import { Mono, Status } from "./Shared";
const updates=[["OrbitLayer","Product update","Developer analytics dashboard shipped.","+340 beta developers"],["LedgerLoop","Growth update","100 businesses now paying.","100 paying businesses"]];
export default function Portfolio(){
  return <section className="mx-auto max-w-[1300px] px-5 py-28">
    <Mono className="text-coral">EARLY PORTFOLIO</Mono>
    <h2 className="mt-3 font-display text-4xl font-bold leading-none md:text-7xl">Early conviction, in one place.</h2>
    <div className="mt-8 flex flex-wrap gap-x-10 gap-y-2 font-mono text-sm"><span>$2,000 deployed</span><span>4 opportunities</span><span>3 sectors</span><span>2 countries</span></div>
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{portfolio.map((c,i)=><motion.div key={c.id} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}} className="border border-ink/12 bg-white p-5">
      <p className="font-medium">{c.name}</p><p className="mt-3 font-display text-3xl font-bold">{fmt(c.amount)}</p><div className="mt-3"><Status v="ACTIVE"/></div></motion.div>)}</div>
    <div className="mt-10 grid gap-4 md:grid-cols-2">{updates.map(([n,t,b,m],i)=><motion.article key={n} initial={{opacity:0,x:-16}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:.2+i*.1}} className="border-l-2 border-coral bg-white p-5">
      <Mono className="text-mute">{n.toUpperCase()} · {t.toUpperCase()}</Mono><p className="mt-2">{b}</p><p className="mt-3 font-mono text-sm text-ok">{m}</p></motion.article>)}</div>
    <p className="mt-8 font-mono text-[11px] text-mute">Conceptual production interface. Not investment advice; no returns are implied.</p>
  </section>}
