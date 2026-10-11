"use client";
import { RefObject, useEffect, useState } from "react";
import { MotionValue, motionValue, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
/** 0→1 progress through a tall scroll container. Reduced motion → resolved (1). */
export function useSceneProgress(ref:RefObject<HTMLElement>):MotionValue<number>{
  const reduce=useReducedMotion();
  const {scrollYProgress}=useScroll({target:ref,offset:["start start","end end"]});
  const [done]=useState(()=>motionValue(1));
  return reduce?done:scrollYProgress;
}
/** Discrete step (0..n-1) from progress; only re-renders when step changes. */
export function useStep(p:MotionValue<number>,n:number,from=0,to=1){
  const [step,setStep]=useState(0);
  const calc=(v:number)=>Math.max(0,Math.min(n-1,Math.floor(((v-from)/(to-from))*n)));
  useEffect(()=>setStep(calc(p.get())),[]); // eslint-disable-line
  useMotionValueEvent(p,"change",v=>{const s=calc(v);setStep(c=>c===s?c:s)});
  return step;
}
export function useIsMobile(){const [m,s]=useState(false);useEffect(()=>{const f=()=>s(window.innerWidth<768);f();window.addEventListener("resize",f);return()=>window.removeEventListener("resize",f)},[]);return m}
