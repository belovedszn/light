"use client";
import { useRef } from "react";
import { motion, useTransform } from "framer-motion";
import { useIsMobile, useSceneProgress } from "@/lib/motion";
import { Mono } from "./Shared";
export default function Convergence(){
  const ref=useRef<HTMLElement>(null);const p=useSceneProgress(ref);const m=useIsMobile();
  const a=useTransform(p,[0,.6],m?["-38vh","-14vh"]:["-34vw","-13vw"]);
  const b=useTransform(p,[0,.6],m?["38vh","14vh"]:["34vw","13vw"]);
  const line=useTransform(p,[.5,.75],[0,1]);const match=useTransform(p,[.7,.85],[0,1]);const sc=useTransform(p,[.7,.85],[.9,1]);
  const pos=m?{y:a}:{x:a};const pos2=m?{y:b}:{x:b};
  return <section id="converge" ref={ref} className="relative motion-safe:h-[300vh]">
    <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
      <p className="absolute top-20 max-w-xl px-5 text-center font-display text-2xl font-bold md:text-4xl">Great builders are everywhere. Early conviction isn’t.</p>
      <motion.div style={pos} className="absolute w-[260px] border border-ink/15 bg-white p-5 md:w-[300px]">
        <Mono className="text-coral">BUILDER</Mono><p className="mt-2 font-display text-xl font-bold">I have something worth building.</p>
        <div className="mt-4 flex justify-between text-sm"><span>OrbitLayer · MVP</span><span className="font-mono">Seeking $7,500</span></div></motion.div>
      <motion.div style={pos2} className="absolute w-[260px] bg-ink p-5 text-paper md:w-[300px]">
        <Mono className="text-coral">INVESTOR</Mono><p className="mt-2 font-display text-xl font-bold">I have capital worth deploying.</p>
        <div className="mt-4 flex justify-between text-sm"><span>Available $2,000</span><span className="font-mono">$250–$750</span></div></motion.div>
      <motion.div aria-hidden style={{scaleX:m?1:line,scaleY:m?line:1}} className={`absolute bg-coral ${m?"h-24 w-px":"h-px w-[18vw]"}`}/>
      <motion.div style={{opacity:match,scale:sc}} className="absolute z-10 bg-coral px-5 py-3 font-display text-3xl font-bold text-white md:text-5xl" role="status">94% MATCH</motion.div>
    </div></section>}
