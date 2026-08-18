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
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#05070a] px-5 py-6 text-white sm:px-8 sm:py-8">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_18%,rgba(31,161,255,.09),transparent_38%),linear-gradient(to_bottom,rgba(5,7,10,.2),rgba(5,7,10,.7))]" />
      <header className="relative z-10 flex items-center justify-between"><Link href="/" className="font-mono text-[10px] font-bold uppercase tracking-[.3em] text-white/80">CAPTAIN <span className="text-cyan-300">B</span></Link><span className="rounded-full border border-cyan-300/20 bg-black/25 px-3 py-2 font-mono text-[7px] uppercase tracking-[.28em] text-cyan-200/70 backdrop-blur-xl">PRIVATE FLIGHT · 001</span></header>
      <div className="relative z-10 mx-auto max-w-6xl">
        <Link href="/" className="mt-10 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/[.045] px-5 py-2 font-mono text-[9px] uppercase tracking-[.25em] text-cyan-200 transition hover:border-cyan-300/45 hover:bg-cyan-300/10">← Return to aircraft</Link>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="mt-10 border-y border-cyan-300/10 bg-white/[.018] px-1 py-10 sm:mt-14 sm:py-14">
          <p className="font-mono text-[8px] uppercase tracking-[.45em] text-cyan-300">{page.code} · CAPTAIN B KNOWLEDGE SYSTEM</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-.04em] sm:text-6xl md:text-7xl">{page.title}</h1>
          <p className="mt-6 max-w-3xl text-sm leading-7 text-white/50 sm:text-base">{page.intro}</p>
          <div className="mt-12 grid gap-3 sm:grid-cols-2">
            {page.items.map((item, i) => <motion.div key={item} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * .07 }} className="group rounded-2xl border border-white/10 bg-black/[.18] p-5 backdrop-blur-md transition hover:border-cyan-300/25 hover:bg-cyan-300/[.035]"><div className="flex items-center justify-between"><span className="font-mono text-[8px] text-cyan-300/70">0{i + 1}</span><span className="text-white/20 transition group-hover:text-cyan-200">↗</span></div><h2 className="mt-5 text-base font-medium">{item}</h2><p className="mt-2 text-xs leading-6 text-white/30">Captain B content for this destination will appear here.</p></motion.div>)}
          </div>
        </motion.div>
        <div className="mt-10 flex flex-wrap gap-2 pb-12">{Object.entries(data).map(([key, value]) => <Link key={key} href={`/explore/${key}`} className={`rounded-full border px-3 py-2 font-mono text-[7px] uppercase tracking-[.16em] transition ${key === slug ? "border-cyan-300/35 bg-cyan-300/10 text-cyan-100" : "border-white/10 bg-white/[.025] text-white/35 hover:border-cyan-300/25 hover:text-cyan-100"}`}>{value.title}</Link>)}</div>
      </div>
    </main>
  );
}
