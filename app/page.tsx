"use client";

import AircraftScene from "@/components/3d/AircraftScene";

export default function Home() {
  return (
    <main className="min-h-[900vh] overflow-x-hidden bg-[#010409] text-white">
      <AircraftScene />
      <div className="pointer-events-none fixed inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-5">
        <div className="text-sm font-black tracking-tight">CAPTAIN <span className="text-cyan-300">B</span></div>
        <div className="rounded-full border border-cyan-300/20 bg-black/30 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.35em] text-cyan-200 backdrop-blur-xl">Knowledge Flight · 001</div>
      </div>
      <section className="pointer-events-none relative z-10 h-[900vh]">
        <div className="sticky top-0 flex h-screen items-end justify-center pb-8">
          <div className="rounded-full border border-white/10 bg-black/35 px-5 py-2 text-[9px] font-bold uppercase tracking-[0.3em] text-slate-400 backdrop-blur-xl">Scroll to fly through Captain B&apos;s world · click a hologram to enter</div>
        </div>
      </section>
    </main>
  );
}
