"use client";

import { motion } from "framer-motion";
import AircraftScene from "@/components/3d/AircraftScene";

const sections = [
  { n: "01", label: "About Captain B", slug: "about", eyebrow: "THE CAPTAIN", title: "Ideas from the cockpit.", text: "A digital knowledge identity for exploring ideas, technology, creativity and the lessons behind building things." },
  { n: "02", label: "AI & Technology", slug: "ai", eyebrow: "FLIGHT SYSTEMS", title: "Understand the technology shaping tomorrow.", text: "AI, emerging tools, experiments, workflows and practical ways to turn new technology into useful work." },
  { n: "03", label: "Business", slug: "business", eyebrow: "BUSINESS CLASS", title: "Think in brands, systems and opportunities.", text: "Business ideas, digital strategy, marketing, positioning and lessons from building in the real world." },
  { n: "04", label: "Knowledge", slug: "knowledge", eyebrow: "FLIGHT LOG", title: "Notes worth taking with you.", text: "Observations, research, lessons and simple explanations collected along the journey." },
  { n: "05", label: "Resources", slug: "resources", eyebrow: "ONBOARD LIBRARY", title: "Tools for your next move.", text: "Useful references, frameworks, tools and practical resources gathered in one place." },
  { n: "06", label: "Connect", slug: "connect", eyebrow: "OPEN CHANNEL", title: "Let's continue the conversation.", text: "Have an idea, question or collaboration? Open the channel and connect with Captain B." },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#05070a] text-white selection:bg-cyan-300 selection:text-black">
      <AircraftScene />
      <div className="pointer-events-none fixed inset-0 z-[1] bg-[radial-gradient(circle_at_50%_20%,rgba(31,161,255,.09),transparent_38%),linear-gradient(to_bottom,transparent_45%,rgba(0,0,0,.5))]" />

      <header className="pointer-events-none fixed inset-x-0 top-0 z-40 flex items-center justify-between px-5 py-5 sm:px-8 sm:py-7">
        <div className="pointer-events-auto">
          <a href="#home" className="font-mono text-[11px] font-bold uppercase tracking-[.3em] text-white/90">CAPTAIN <span className="text-cyan-300">B</span></a>
          <div className="mt-1 text-[7px] uppercase tracking-[.42em] text-white/35">Knowledge · Technology · Ideas</div>
        </div>
        <div className="rounded-full border border-cyan-300/20 bg-black/30 px-3 py-2 font-mono text-[7px] uppercase tracking-[.28em] text-cyan-200/80 backdrop-blur-xl sm:px-4 sm:text-[8px]">PRIVATE FLIGHT · 001</div>
      </header>

      <section id="home" className="relative z-10 flex min-h-screen items-center justify-center px-6 pt-16 text-center">
        <div className="max-w-2xl">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="font-mono text-[8px] uppercase tracking-[.5em] text-cyan-300/80 sm:text-[10px]">PRIVATE FLIGHT · 001</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .12 }} className="mt-5 text-5xl font-semibold tracking-[-.045em] sm:text-7xl md:text-8xl">CAPTAIN <span className="text-cyan-300">B</span></motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .3 }} className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/55 sm:text-base">Ideas, knowledge and technology — shared from the cockpit.</motion.p>
          <motion.a initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .45 }} href="/explore/about" className="mt-8 inline-flex items-center gap-3 rounded-full border border-cyan-300/35 bg-cyan-300/[.07] px-6 py-3 font-mono text-[9px] uppercase tracking-[.3em] text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/[.14] hover:shadow-[0_0_35px_rgba(34,211,238,.15)]">Enter Flight <span>↓</span></motion.a>
          <div className="mt-20 font-mono text-[7px] uppercase tracking-[.4em] text-white/25">Scroll to explore · tap a destination</div>
        </div>
      </section>

      <section id="explore" className="relative z-10 px-5 pb-28 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-end justify-between gap-6 border-b border-white/10 pb-5">
            <div><p className="font-mono text-[8px] uppercase tracking-[.4em] text-cyan-300">Navigation panel</p><h2 className="mt-2 text-2xl font-medium tracking-tight sm:text-4xl">Choose your destination.</h2></div>
            <span className="hidden font-mono text-[8px] uppercase tracking-[.3em] text-white/25 sm:block">06 destinations</span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((s, i) => (
              <motion.a key={s.slug} href={`/explore/${s.slug}`} whileHover={{ y: -4 }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[.035] p-5 backdrop-blur-md transition hover:border-cyan-300/35 hover:bg-cyan-300/[.055]">
                <div className="flex items-center justify-between"><span className="font-mono text-[8px] text-cyan-300/75">{s.n}</span><span className="text-white/20 transition group-hover:translate-x-1 group-hover:text-cyan-200">↗</span></div>
                <p className="mt-7 font-mono text-[7px] uppercase tracking-[.32em] text-white/35">{s.eyebrow}</p>
                <h3 className="mt-2 text-lg font-medium">{s.label}</h3>
                <p className="mt-2 text-xs leading-6 text-white/40">{s.text}</p>
                <div className="mt-5 h-px w-10 bg-cyan-300/50 transition-all group-hover:w-20" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 border-y border-white/10 bg-black/20 px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <div><p className="font-mono text-[8px] uppercase tracking-[.42em] text-cyan-300">Captain B · Flight Log</p><h2 className="mt-5 max-w-3xl text-4xl font-medium leading-tight tracking-[-.035em] sm:text-6xl">A place to learn something useful before the next flight.</h2></div>
          <p className="max-w-md text-sm leading-7 text-white/45">The website is designed as a personal knowledge cockpit: enter through the aircraft, discover a topic, and go directly to the page that matters to you.</p>
        </div>
      </section>

      <section className="relative z-10 px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto max-w-6xl rounded-3xl border border-cyan-300/15 bg-gradient-to-br from-cyan-300/[.07] to-transparent p-8 sm:p-12">
          <p className="font-mono text-[8px] uppercase tracking-[.42em] text-cyan-300">Open channel</p>
          <div className="mt-5 flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><h2 className="text-4xl font-medium tracking-tight sm:text-6xl">Ready to explore?</h2><p className="mt-4 max-w-xl text-sm leading-7 text-white/45">Choose a destination or start with Captain B and follow the journey.</p></div><a href="/explore/connect" className="inline-flex w-fit rounded-full border border-cyan-300/35 px-6 py-3 font-mono text-[9px] uppercase tracking-[.28em] text-cyan-100 transition hover:bg-cyan-300/10">Open Channel →</a></div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-5 py-8 sm:px-8"><div className="mx-auto flex max-w-6xl flex-col gap-3 text-[8px] font-mono uppercase tracking-[.28em] text-white/25 sm:flex-row sm:items-center sm:justify-between"><span>CAPTAIN B · PRIVATE FLIGHT 001</span><span>Ideas · Knowledge · Technology</span></div></footer>

      <nav aria-label="Quick access" className="pointer-events-auto fixed bottom-3 left-1/2 z-50 w-[calc(100%-1rem)] max-w-5xl -translate-x-1/2 sm:bottom-5 sm:w-auto">
        <div className="flex items-center gap-1 overflow-x-auto rounded-2xl border border-cyan-300/20 bg-[#050b12]/90 p-1.5 shadow-[0_0_40px_rgba(34,211,238,.1)] backdrop-blur-2xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:rounded-full sm:p-2">
          {sections.map(s => <a key={s.slug} href={`/explore/${s.slug}`} className="shrink-0 rounded-xl px-3 py-2.5 font-mono text-[8px] uppercase tracking-[.16em] text-white/45 transition hover:bg-cyan-300/10 hover:text-cyan-100 sm:rounded-full">{s.label}</a>)}
        </div>
      </nav>
    </main>
  );
}
