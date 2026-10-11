"use client";
import { useEffect, useState } from "react";
import Lenis from "lenis";
import { opportunities } from "@/data";
import Nav from "./Nav";import Hero from "./Hero";import Convergence from "./Convergence";import Feed from "./Feed";
import InspectAndVerify from "./InspectAndVerify";import Matching from "./Matching";import Lifecycle from "./Lifecycle";import Portfolio from "./Portfolio";import Cta from "./Cta";
export default function Experience(){
  const [sel,setSel]=useState("orbitlayer");
  useEffect(()=>{
    if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
    const l=new Lenis();let id=requestAnimationFrame(function r(t){l.raf(t);id=requestAnimationFrame(r)});
    return()=>{cancelAnimationFrame(id);l.destroy()}},[]);
  return <main><Nav/><Hero/><Convergence/><Feed selected={sel} onSelect={setSel}/>
    <InspectAndVerify o={opportunities.find(o=>o.id===sel)??opportunities[0]}/><Matching/><Lifecycle/><Portfolio/><Cta/></main>}
