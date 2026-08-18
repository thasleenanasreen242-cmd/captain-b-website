"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";

const data: Record<string, { code: string; title: string; intro: string; items: string[] }> = {
  about: { code: "FLIGHT 01", title: "ABOUT CAPTAIN B", intro: "Meet the pilot behind the ideas, experiments and knowledge shared throughout the journey.", items: ["Captain B identity", "Story & journey", "Mission & philosophy", "Current direction"] },
  ai: { code: "FLIGHT 02", title: "AI & TECHNOLOGY", intro: "A practical route through artificial intelligence, emerging technology and the tools changing how we create.", items: ["AI discoveries", "Technology notes", "Experiments", "Practical workflows"] },
  business: { code: "FLIGHT 03", title: "BUSINESS & MARKETING", intro: "Strategy, branding, digital marketing, growth and lessons from building real projects.", items: ["Brand strategy", "Digital marketing", "Growth ideas", "Case studies"] },
  knowledge: { code: "FLIGHT 04", title: "KNOWLEDGE LOG", intro: "The Captain's ongoing flight log: observations, lessons, notes and ideas worth remembering.", items: ["Latest logs", "Lessons learned", "Deep dives", "Experiments"] },
  resources: { code: "FLIGHT 05", title: "RESOURCES", intro: "A curated compartment of tools, templates, references and useful resources.", items: ["AI tools", "Templates", "Recommended resources", "Useful links"] },
  connect: { code: "FLIGHT 06", title: "CONNECT", intro: "Open a communication channel with Captain B and bring your next question or idea into the cockpit.", items: ["Send a message", "Collaborate", "Ask a question", "Follow the journey"] },
};

export default function DestinationPage() {
  const { slug } = useParams<{ slug: string }>();
  const page = data[slug] ?? data.about;
  return <main className="min-h-screen bg-[#02070d] px-6 py-8 text-white">
    <div className="mx-auto max-w-6xl">
      <Link href="/" className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/5 px-5 py-2 text-[10px] font-black tracking-widest text-cyan-300">← RETURN TO AIRCRAFT</Link>
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="mt-16 rounded-[2rem] border border-cyan-300/15 bg-[#07121d]/80 p-8 shadow-2xl backdrop-blur-xl sm:p-14">
        <p className="text-[10px] font-black tracking-[0.5em] text-cyan-300">{page.code} · CAPTAIN B KNOWLEDGE SYSTEM</p>
        <h1 className="mt-5 text-5xl font-black tracking-tight sm:text-7xl">{page.title}</h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">{page.intro}</p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {page.items.map((item, i) => <motion.div key={item} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * .08 }} className="rounded-2xl border border-white/10 bg-black/25 p-6"><span className="text-xs font-black text-cyan-400">0{i + 1}</span><h2 className="mt-4 text-xl font-black">{item}</h2><p className="mt-2 text-sm leading-6 text-slate-500">Captain B content for this destination will appear here.</p></motion.div>)}
        </div>
      </motion.div>
    </div>
  </main>;
}
