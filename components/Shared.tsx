"use client";
import { ReactNode } from "react";
export const Mono=({children,className=""}:{children:ReactNode;className?:string})=><span className={`font-mono text-[11px] tracking-wider ${className}`}>{children}</span>;
export function Status({v,dark}:{v:"VERIFIED"|"REVIEWED"|"CHECKING..."|"PENDING"|"ACTIVE"|"WATCHING"|"MATCHED";dark?:boolean}){
  const c=v==="VERIFIED"||v==="ACTIVE"||v==="REVIEWED"?"text-ok":v==="PENDING"||v==="CHECKING..."?"text-warn":"text-coral";
  return <Mono className={`${c} font-medium`}>{v}</Mono>}
export const Disclosure=({dark}:{dark?:boolean})=><p className={`font-mono text-[11px] ${dark?"text-white/50":"text-mute"}`}>Conceptual production interface. No real investment is processed.</p>;
