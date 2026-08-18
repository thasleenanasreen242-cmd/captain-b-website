"use client";

import { motion } from "framer-motion";
import AircraftScene from "@/components/3d/AircraftScene";

const topics = [
  ["01", "AI & Technology", "What is changing, what matters, and how to use it intelligently."],
  ["02", "Digital Marketing", "Practical lessons on brands, content, growth and digital strategy."],
  ["03", "Business", "Ideas, experiments, systems and lessons from building things."],
  ["04", "Branding", "How memorable brands are shaped through strategy and experience."],
  ["05", "Law & Career", "Learning notes, professional development and useful frameworks."],
  ["06", "Productivity", "Simple systems for learning, creating and getting things done."],
];

const log = [
  ["Knowledge Note 001", "The things I am learning right now", "A running collection of ideas, observations and useful lessons."],
  ["Knowledge Note 002", "AI is becoming a creative co-pilot", "How I think about using AI without losing the human part of the work."],
  ["Knowledge Note 003", "Building in public", "Experiments, mistakes and the lessons that come from actually making things."],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900">
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-sky-300 via-sky-100 to-white">
        <div className="absolute -left-24 top-24 h-56 w-[55%] rounded-full bg-white/70 blur-3xl" />
        <div className="absolute -right-32 top-72 h-64 w-[55%] rounded-full bg-white/70 blur-3xl" />
        <motion.div
          animate={{ x: [0, 80, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-16 left-0 h-44 w-[65%] rounded-full bg-white/60 blur-3xl"
        />

        <nav className="relative z-30 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <a href="#top" className="leading-none">
            <span className="text-xl font-black tracking-tight">CAPTAIN <span className="text-sky-600">B</span></span>
            <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.35em] text-slate-500">Knowledge cockpit</span>
          </a>
          <div className="hidden gap-7 text-sm font-semibold text-slate-600 md:flex">
            <a href="#captain" className="hover:text-sky-600">Captain</a>
            <a href="#topics" className="hover:text-sky-600">Explore</a>
            <a href="#log" className="hover:text-sky-600">Knowledge Log</a>
            <a href="#contact" className="hover:text-sky-600">Connect</a>
          </div>
          <a href="#topics" className="rounded-full border border-white/80 bg-white/60 px-5 py-2.5 text-xs font-bold uppercase tracking-wider shadow-lg backdrop-blur-xl hover:bg-white">Explore</a>
        </nav>

        <div id="top" className="relative z-10 mx-auto flex min-h-[calc(100vh-88px)] max-w-7xl flex-col items-center justify-center px-6 pb-10 text-center">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/50 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-sky-700 shadow-lg backdrop-blur-xl">
              <span className="h-2 w-2 animate-pulse rounded-full bg-sky-500" /> Knowledge in flight
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.45em] text-sky-700">Welcome to Captain B&apos;s world</p>
            <h1 className="mt-4 text-5xl font-black leading-[0.92] tracking-tight sm:text-7xl md:text-8xl">
              Ideas worth
              <br />
              <span className="text-sky-600">exploring.</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              A personal knowledge space where Captain B shares what he learns about AI, technology, marketing, business, branding, career and creative thinking.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 70, scale: 0.88 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.25 }}
            className="w-full max-w-5xl"
          >
            <AircraftScene />
          </motion.div>

          <motion.a
            href="#captain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="-mt-4 rounded-full bg-sky-600 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-sky-300/40 transition hover:scale-105 hover:bg-sky-700"
          >
            ENTER THE COCKPIT →
          </motion.a>
        </div>
      </section>

      <section id="captain" className="bg-white px-6 py-28 md:py-36">
        <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-sky-600">The Captain</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">Learn. Think.<br /><span className="text-sky-600">Share.</span></h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              Captain B is a digital avatar and knowledge-sharing identity built around curiosity. The goal is simple: take complicated ideas, explore them, and make them easier to understand and use.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {["LEARN", "CREATE", "SHARE"].map((item) => <div key={item} className="rounded-2xl border border-sky-100 bg-sky-50 p-4 text-center text-xs font-bold tracking-wider text-sky-700">{item}</div>)}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-[2rem] bg-gradient-to-br from-sky-100 to-white p-6 shadow-2xl">
            <div className="flex aspect-square items-center justify-center rounded-[1.5rem] border border-white bg-white/50 shadow-inner backdrop-blur-xl">
              <div className="text-center">
                <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-sky-700 text-5xl font-black text-white shadow-2xl">B</div>
                <p className="mt-6 text-2xl font-black">CAPTAIN B</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.3em] text-slate-400">Your knowledge co-pilot</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="topics" className="bg-sky-50 px-6 py-28 md:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-sky-600">Navigation panel</p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">Choose your <span className="text-sky-600">route.</span></h2>
            <p className="mt-5 text-lg leading-8 text-slate-500">Explore the subjects Captain B is learning, researching and sharing.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map(([number, title, text]) => (
              <motion.article key={number} whileHover={{ y: -7 }} className="rounded-3xl border border-white bg-white/80 p-7 shadow-lg backdrop-blur-xl">
                <span className="text-xs font-black tracking-widest text-sky-500">{number}</span>
                <h3 className="mt-5 text-xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-slate-500">{text}</p>
                <button className="mt-6 text-sm font-bold text-sky-600">EXPLORE →</button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="log" className="bg-white px-6 py-28 md:py-36">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-sky-600">Knowledge log</p>
          <div className="mt-4 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="text-4xl font-black sm:text-5xl">Notes from the <span className="text-sky-600">journey.</span></h2>
            <button className="text-sm font-bold text-sky-600">VIEW ALL NOTES →</button>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {log.map(([label, title, text]) => (
              <article key={label} className="group rounded-[2rem] border border-slate-100 bg-slate-50 p-7 shadow-lg transition hover:-translate-y-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-sky-500">{label}</p>
                <h3 className="mt-5 text-2xl font-black">{title}</h3>
                <p className="mt-4 leading-7 text-slate-500">{text}</p>
                <button className="mt-7 text-sm font-bold text-sky-600">READ NOTE →</button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-sky-100 px-6 py-36 text-center">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-white/60 blur-3xl" />
        <div className="relative mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-sky-600">Observation deck</p>
          <h2 className="mt-5 text-5xl font-black leading-tight sm:text-7xl">Stay curious.<br /><span className="text-sky-600">Go further.</span></h2>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-600">The destination is always changing. The best part is learning something new along the way.</p>
        </div>
      </section>

      <section id="contact" className="bg-white px-6 py-28 text-center md:py-36">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-sky-600">Communication panel</p>
        <h2 className="mt-5 text-5xl font-black sm:text-7xl">Let&apos;s <span className="text-sky-600">connect.</span></h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-500">Have an idea, question or topic worth exploring? Send it to Captain B.</p>
        <button className="mt-9 rounded-full bg-sky-600 px-9 py-4 font-bold text-white shadow-xl shadow-sky-300/30 transition hover:scale-105 hover:bg-sky-700">START A CONVERSATION →</button>
      </section>

      <footer className="border-t border-slate-100 bg-slate-50 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
          <div><p className="font-black">CAPTAIN <span className="text-sky-600">B</span></p><p className="text-xs text-slate-400">A personal space for ideas, learning and sharing.</p></div>
          <p className="text-xs text-slate-400">© 2026 Captain B</p>
        </div>
      </footer>
    </main>
  );
}
