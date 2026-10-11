import { InvestorProfile, Opportunity } from "@/data";
export function score(o:Opportunity,i:InvestorProfile):number{
  let s=40;
  if(i.preferredSectors.includes(o.sector))s+=22;
  if(i.preferredStages.includes(o.stage))s+=18;
  if(o.capitalSought<=i.capitalAvailable*5)s+=8;
  if(i.riskTolerance==="High")s+=6;else if(i.riskTolerance==="Low"&&o.stage==="Idea")s-=12;
  s+=Object.values(o.verification).filter(Boolean).length;
  return Math.max(30,Math.min(99,s));
}
