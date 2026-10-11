export type Verification={founder:boolean;company:boolean;product:boolean;traction:boolean;documents:boolean};
export type Opportunity={id:string;name:string;description:string;sector:string;stage:string;capitalSought:number;traction:string;country:string;matchScore:number;verification:Verification};
export type InvestorProfile={capitalAvailable:number;preferredSectors:string[];preferredStages:string[];typicalCheck:[number,number];riskTolerance:string};
export const SECTORS=["All","AI","SaaS","Fintech","Developer Tools","Consumer","Games"];
export const STAGES=["Idea","Prototype","MVP","Early traction","Revenue"];
const v={founder:true,company:true,product:true,traction:true,documents:true};
export const opportunities:Opportunity[]=[
{id:"orbitlayer",name:"OrbitLayer",description:"Developer infrastructure for African APIs.",sector:"Developer Tools",stage:"MVP",capitalSought:7500,traction:"1,800 beta developers",country:"Nigeria",matchScore:94,verification:v},
{id:"ledgerloop",name:"LedgerLoop",description:"Financial operations for African SMEs.",sector:"Fintech",stage:"Revenue",capitalSought:12000,traction:"$2,400 MRR",country:"Kenya",matchScore:91,verification:v},
{id:"frameforge",name:"FrameForge",description:"Infrastructure for independent game developers.",sector:"Games",stage:"Prototype",capitalSought:3500,traction:"40 studios waitlisted",country:"Nigeria",matchScore:88,verification:{...v,traction:false}},
{id:"kora",name:"Kora Systems",description:"Workflow automation for logistics teams.",sector:"SaaS",stage:"Early traction",capitalSought:9000,traction:"12 pilot customers",country:"Ghana",matchScore:84,verification:{...v,documents:false}},
{id:"tidepool",name:"Tidepool",description:"Social savings circles for young earners.",sector:"Consumer",stage:"Idea",capitalSought:2000,traction:"Interviews: 60",country:"Nigeria",matchScore:61,verification:{...v,traction:false,documents:false,product:false}},
{id:"lumen",name:"Lumen Notes",description:"AI meeting memory for small teams.",sector:"AI",stage:"MVP",capitalSought:5000,traction:"900 weekly users",country:"Kenya",matchScore:79,verification:v}];
export const investor:InvestorProfile={capitalAvailable:2000,preferredSectors:["AI","SaaS","Developer Tools"],preferredStages:["Idea","Prototype","MVP"],typicalCheck:[250,750],riskTolerance:"High"};
export const portfolio=[{id:"orbitlayer",name:"OrbitLayer",amount:500},{id:"ledgerloop",name:"LedgerLoop",amount:500},{id:"frameforge",name:"FrameForge",amount:250},{id:"kora",name:"Kora Systems",amount:750}];
export const lifecycle=[{s:"INTEREST",t:"09:41:02"},{s:"DUE DILIGENCE",t:"09:48:17"},{s:"OFFERING",t:"10:02:44"},{s:"CUSTODY",t:"10:07:30"},{s:"LEGAL INSTRUMENT",t:"10:11:09"},{s:"OWNERSHIP RECORD",t:"10:14:51"},{s:"PORTFOLIO",t:"10:14:52"}];
export const fmt=(n:number)=>"$"+n.toLocaleString("en-US");
