"use client";

import { motion } from "framer-motion";
import AircraftScene from "@/components/3d/AircraftScene";

const routes = [
  ["01", "ABOUT CAPTAIN B", "Meet the pilot, the story, the thinking and the mission.", "about"],
  ["02", "AI & TECHNOLOGY", "Explore AI, emerging technology, experiments and practical ideas.", "ai"],
  ["03", "BUSINESS & MARKETING", "Strategy, branding, growth, digital marketing and real-world lessons.", "business"],
  ["04", "KNOWLEDGE LOG", "Notes, lessons, case studies and discoveries from the flight.", "knowledge"],
  ["05", "RESOURCES", "Tools, templates, references and useful things worth keeping.", "resources"],
  ["06", "CONNECT", "Open a communication channel with Captain B.", "connect"],
];

export default function Home() {
  return (
    <main className="min-h-[600vh] overflow-x-hidden bg-[#02070d] text-white">
      <AircraftScene />
      <div className="relative z-10">
        <nav className="fixed left-0 right-0 top-0 z-30 flex items-center justify-between border-b border-white/10 bg-[#02070d]/55 px-6 py-5 backdrop-blur-xl">
          <a href="#cockpit" className="font-black tracking-tight">CAPTAIN <span className="text-cyan-400">B</span></a>
          <span className="hidden text-[9px] font-bold uppercase tracking-[0.4em] text-cyan-300/70 sm:block">Knowledge flight system</span>
          <a href="/explore/connect" className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-[10px] font-bold tracking-widest text-cyan-200">CONNECT</a>
        </nav>

        <section id="cockpit" className="flex min-h-screen items-center px-6 pt-20">
          <div className="mx-auto w-full max-w-6xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="max-w-2xl rounded-[2rem] border border-white/10 bg-black/35 p-7 shadow-2xl backdrop-blur-xl sm:p-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-cyan-300">Flight deck · online</p>
              <h1 className="mt-5 text-5xl font-black leading-[0.92] tracking-tight sm:text-7xl">Ideas worth<br /><span className="text-cyan-300">exploring.</span></h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-slate-300">Welcome to Captain B&apos;s knowledge aircraft — a digital space for learning, thinking and sharing ideas about AI, technology, business, marketing and more.</p>
              <a href="#destinations" className="mt-8 inline-flex rounded-full bg-cyan-400 px-6 py-3 text-xs font-black tracking-wider text-[#021019] shadow-lg shadow-cyan-400/20">BEGIN FLIGHT →</a>
            </motion.div>
          </div>
        </section>

        <section id="destinations" className="flex min-h-screen items-center px-6 py-24">
          <div className="mx-auto w-full max-w-6xl">
            <div className="mb-10 rounded-3xl border border-cyan-300/10 bg-black/35 p-7 backdrop-blur-xl">
              <p className="text-[10px] font-bold tracking-[0.4em] text-cyan-300">AIRCRAFT NAVIGATION · DESTINATIONS</p>
              <h2 className="mt-3 text-4xl font-black sm:text-5xl">Choose your <span className="text-cyan-300">destination.</span></h2>
              <p className="mt-3 max-w-2xl text-slate-400">Scroll through the aircraft to discover each part of Captain B&apos;s world. Select a destination to enter its dedicated page.</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {routes.map(([num, title, text, slug]) => (
                <motion.a key={num} href={`/explore/${slug}`} whileHover={{ y: -8, scale: 1.015 }} whileTap={{ scale: 0.98 }} className="group min-h-60 rounded-[1.8rem] border border-cyan-300/10 bg-[#07121d]/90 p-7 shadow-2xl backdrop-blur-xl transition hover:border-cyan-300/40 hover:shadow-cyan-400/10">
                  <div className="flex items-start justify-between"><span className="text-xs font-black text-cyan-400">{num}</span><span className="text-cyan-300 transition-transform group-hover:translate-x-1">↗</span></div>
                  <h3 className="mt-8 text-xl font-black">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-400">{text}</p>
                  <span className="mt-7 inline-block text-[10px] font-black tracking-[0.25em] text-cyan-300">ENTER DESTINATION →</span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        <section className="flex min-h-screen items-center px-6 py-24">
          <div className="mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur-xl"><p className="text-[10px] tracking-[0.35em] text-cyan-300">FLIGHT STATUS</p><p className="mt-5 text-4xl font-black">ONLINE</p><p className="mt-2 text-sm text-slate-500">Knowledge systems active</p></div>
            <div className="rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur-xl"><p className="text-[10px] tracking-[0.35em] text-cyan-300">ALTITUDE</p><p className="mt-5 text-4xl font-black">38,000 FT</p><p className="mt-2 text-sm text-slate-500">Cruising through ideas</p></div>
            <div className="rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur-xl"><p className="text-[10px] tracking-[0.35em] text-cyan-300">NEXT STOP</p><p className="mt-5 text-4xl font-black">EXPLORE</p><p className="mt-2 text-sm text-slate-500">Choose any destination above</p></div>
          </div>
        </section>
      </div>
    </main>
  );
}
