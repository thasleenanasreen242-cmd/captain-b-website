"use client";

import { motion } from "framer-motion";
import AircraftScene from "@/components/3d/AircraftScene";

const panels = [
  ["01", "ABOUT CAPTAIN B", "The pilot behind the ideas."],
  ["02", "AI & TECHNOLOGY", "Explore what is changing and what matters."],
  ["03", "BUSINESS & MARKETING", "Strategy, brands, growth and experiments."],
  ["04", "KNOWLEDGE LOG", "Notes, lessons, case studies and useful discoveries."],
  ["05", "RESOURCES", "Tools, templates and things worth keeping."],
  ["06", "CONNECT", "Bring a question into the cockpit."],
];

export default function Home() {
  return (
    <main className="min-h-[600vh] overflow-x-hidden bg-[#02070d] text-white">
      <AircraftScene />

      <div className="relative z-10">
        <nav className="fixed left-0 right-0 top-0 z-30 flex items-center justify-between border-b border-white/10 bg-[#02070d]/45 px-6 py-5 backdrop-blur-xl">
          <a href="#cockpit" className="font-black tracking-tight">CAPTAIN <span className="text-cyan-400">B</span></a>
          <span className="hidden text-[9px] font-bold uppercase tracking-[0.4em] text-cyan-300/70 sm:block">Knowledge flight system</span>
          <a href="#connect" className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-[10px] font-bold tracking-widest text-cyan-200">CONNECT</a>
        </nav>

        <section id="cockpit" className="flex min-h-screen items-center px-6 pt-20">
          <div className="mx-auto w-full max-w-6xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="max-w-2xl rounded-[2rem] border border-white/10 bg-black/35 p-7 shadow-2xl backdrop-blur-xl sm:p-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-cyan-300">Cockpit display · online</p>
              <h1 className="mt-5 text-5xl font-black leading-[0.92] tracking-tight sm:text-7xl">Ideas worth<br /><span className="text-cyan-300">exploring.</span></h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-slate-300">Welcome to Captain B&apos;s knowledge cockpit — a digital space for learning, thinking and sharing ideas about AI, technology, business, marketing and more.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#captain" className="rounded-full bg-cyan-400 px-6 py-3 text-xs font-black tracking-wider text-[#021019] shadow-lg shadow-cyan-400/20">ENTER THE COCKPIT →</a>
                <a href="#knowledge" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-xs font-bold tracking-wider text-white">EXPLORE KNOWLEDGE</a>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="captain" className="flex min-h-screen items-center px-6 py-24">
          <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-[1fr_1.4fr]">
            <div className="rounded-[2rem] border border-cyan-300/15 bg-[#07121d]/80 p-8 shadow-2xl backdrop-blur-xl">
              <p className="text-[10px] font-bold tracking-[0.4em] text-cyan-300">LEFT DISPLAY · IDENTITY</p>
              <div className="mt-10 flex h-52 items-center justify-center rounded-3xl border border-cyan-300/10 bg-gradient-to-br from-cyan-400/10 to-blue-500/5">
                <div className="flex h-32 w-32 items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-300/10 text-6xl font-black text-cyan-200 shadow-[0_0_70px_rgba(34,211,238,.2)]">B</div>
              </div>
              <h2 className="mt-7 text-3xl font-black">CAPTAIN B</h2>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-slate-500">Digital avatar · Knowledge explorer</p>
            </div>
            <div className="flex items-center rounded-[2rem] border border-white/10 bg-black/35 p-8 backdrop-blur-xl sm:p-12">
              <div><p className="text-[10px] font-bold tracking-[0.4em] text-cyan-300">CAPTAIN&apos;S LOG</p><h2 className="mt-5 text-4xl font-black sm:text-6xl">Learn.<br />Think.<br /><span className="text-cyan-300">Share.</span></h2><p className="mt-7 max-w-xl text-slate-300 leading-8">Captain B turns curiosity into useful knowledge. Follow the journey through ideas, experiments, lessons and discoveries.</p></div>
            </div>
          </div>
        </section>

        <section id="knowledge" className="flex min-h-screen items-center px-6 py-24">
          <div className="mx-auto w-full max-w-6xl">
            <div className="mb-10 rounded-3xl border border-cyan-300/10 bg-black/35 p-7 backdrop-blur-xl"><p className="text-[10px] font-bold tracking-[0.4em] text-cyan-300">CENTER CONSOLE · KNOWLEDGE SYSTEM</p><h2 className="mt-3 text-4xl font-black sm:text-5xl">Choose a <span className="text-cyan-300">route.</span></h2></div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {panels.slice(1, 4).map(([num, title, text]) => <motion.article key={num} whileHover={{ y: -6 }} className="min-h-52 rounded-3xl border border-cyan-300/10 bg-[#07121d]/85 p-7 shadow-2xl backdrop-blur-xl"><span className="text-xs font-black text-cyan-400">{num}</span><h3 className="mt-6 text-xl font-black">{title}</h3><p className="mt-3 leading-7 text-slate-400">{text}</p><button className="mt-7 text-[10px] font-black tracking-widest text-cyan-300">OPEN DISPLAY →</button></motion.article>)}
            </div>
          </div>
        </section>

        <section id="log" className="flex min-h-screen items-center px-6 py-24">
          <div className="mx-auto w-full max-w-6xl rounded-[2rem] border border-white/10 bg-black/45 p-8 backdrop-blur-xl sm:p-12">
            <p className="text-[10px] font-bold tracking-[0.4em] text-cyan-300">NAVIGATION COMPUTER · KNOWLEDGE LOG</p>
            <div className="mt-5 grid gap-6 md:grid-cols-3">
              {["AI is becoming a creative co-pilot", "Building things teaches differently", "Small ideas can become systems"].map((title, i) => <article key={title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-7"><p className="text-[10px] font-bold tracking-widest text-cyan-400">LOG 00{i + 1}</p><h3 className="mt-5 text-2xl font-black">{title}</h3><p className="mt-4 text-sm leading-7 text-slate-400">A place for lessons, observations, experiments and ideas worth remembering.</p><button className="mt-7 text-[10px] font-black tracking-widest text-cyan-300">READ LOG →</button></article>)}
            </div>
          </div>
        </section>

        <section id="resources" className="flex min-h-screen items-center px-6 py-24">
          <div className="mx-auto w-full max-w-6xl rounded-[2rem] border border-cyan-300/10 bg-[#07121d]/80 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
            <p className="text-[10px] font-bold tracking-[0.4em] text-cyan-300">UTILITY PANEL · RESOURCES</p><h2 className="mt-4 text-4xl font-black sm:text-6xl">Tools for the <span className="text-cyan-300">journey.</span></h2>
            <div className="mt-10 grid gap-4 md:grid-cols-3">{["AI TOOLS", "TEMPLATES", "USEFUL RESOURCES"].map((x) => <div key={x} className="rounded-2xl border border-white/10 bg-black/30 p-7"><span className="text-sm font-black text-cyan-300">◈</span><h3 className="mt-5 font-black">{x}</h3><p className="mt-2 text-sm text-slate-500">Curated resources from Captain B&apos;s journey.</p></div>)}</div>
          </div>
        </section>

        <section id="connect" className="flex min-h-screen items-center justify-center px-6 py-24 text-center">
          <div className="max-w-3xl rounded-[2rem] border border-cyan-300/15 bg-black/45 p-10 shadow-2xl backdrop-blur-xl sm:p-16"><p className="text-[10px] font-bold tracking-[0.5em] text-cyan-300">COMMUNICATION CHANNEL · OPEN</p><h2 className="mt-5 text-5xl font-black sm:text-7xl">Let&apos;s explore<br /><span className="text-cyan-300">something new.</span></h2><p className="mx-auto mt-7 max-w-xl leading-8 text-slate-400">Have a question, idea or topic worth exploring? Bring it into the cockpit.</p><button className="mt-9 rounded-full bg-cyan-400 px-9 py-4 text-xs font-black tracking-widest text-[#021019] shadow-xl shadow-cyan-400/20">START A CONVERSATION →</button></div>
        </section>
      </div>
    </main>
  );
}
