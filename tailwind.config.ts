import type { Config } from "tailwindcss";
export default { content:["./app/**/*.tsx","./components/**/*.tsx"],
theme:{extend:{colors:{paper:"#F4F3EE",ink:"#101114",mute:"#656870",night:"#0D0E10",coral:"#FF4B5C",ok:"#1B8F68",warn:"#C98A22"},
fontFamily:{display:["var(--font-display)"],sans:["var(--font-sans)"],mono:["var(--font-mono)"]}}},plugins:[]} satisfies Config;
