"use client";
import { useEffect, useState } from "react";
export default function Nav(){
  const [s,setS]=useState(false);
  useEffect(()=>{const f=()=>setS(window.scrollY>40);f();window.addEventListener("scroll",f,{passive:true});return()=>window.removeEventListener("scroll",f)},[]);
  return <header className={`fixed inset-x-0 top-0 z-50 transition-all ${s?"h-12 bg-paper/85 backdrop-blur border-b border-ink/10":"h-16"}`}>
    <nav aria-label="Primary" className="mx-auto flex h-full max-w-[1300px] items-center justify-between px-5">
      <a href="#top" className="font-display text-lg font-bold tracking-tight">FIRSTLIGHT</a>
      <div className="hidden gap-7 text-sm text-mute md:flex">{[["Discover","#discover"],["Verification","#trust"],["Matching","#matching"],["How it works","#lifecycle"]].map(([l,h])=><a key={h} href={h} className="hover:text-ink">{l}</a>)}</div>
      <a href="#join" className="bg-ink px-4 py-2 text-sm text-paper transition hover:-translate-y-0.5">Join the network</a>
    </nav></header>}
