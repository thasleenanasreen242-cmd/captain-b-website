"use client";

import AircraftScene from "@/components/3d/AircraftScene";

const sections = [
  { label: "Captain B", slug: "about" },
  { label: "AI & Tech", slug: "ai" },
  { label: "Business", slug: "business" },
  { label: "Knowledge", slug: "knowledge" },
  { label: "Resources", slug: "resources" },
  { label: "Connect", slug: "connect" },
];

export default function Home() {
  return (
    <main className="min-h-[900vh] overflow-x-hidden bg-[#010409] text-white">
      <AircraftScene />

      <div className="pointer-events-none fixed inset-x-0 top-0 z-20 flex items-center justify-between px-4 py-5 sm:px-6">
        <div className="text-sm font-black tracking-tight">CAPTAIN <span className="text-cyan-300">B</span></div>
        <div className="rounded-full border border-cyan-300/20 bg-black/30 px-3 py-2 text-[8px] font-bold uppercase tracking-[0.28em] text-cyan-200 backdrop-blur-xl sm:px-4 sm:text-[9px] sm:tracking-[0.35em]">Knowledge Flight · 001</div>
      </div>

      <section className="pointer-events-none relative z-10 h-[900vh]">
        <div className="sticky top-0 flex h-screen items-end justify-center pb-24 sm:pb-20">
          <div className="rounded-full border border-white/10 bg-black/35 px-4 py-2 text-center text-[8px] font-bold uppercase tracking-[0.22em] text-slate-400 backdrop-blur-xl sm:px-5 sm:text-[9px] sm:tracking-[0.3em]">
            Scroll to fly through Captain B&apos;s world · click a hologram to enter
          </div>
        </div>
      </section>

      {/* Always-visible quick access: all sections are reachable without scrolling through the aircraft. */}
      <nav aria-label="Captain B sections" className="pointer-events-auto fixed bottom-3 left-1/2 z-50 w-[calc(100%-1rem)] max-w-5xl -translate-x-1/2 sm:bottom-5 sm:w-auto">
        <div className="flex items-center gap-1 overflow-x-auto rounded-2xl border border-cyan-300/20 bg-[#020812]/85 p-1.5 shadow-[0_0_40px_rgba(34,211,238,0.12)] backdrop-blur-2xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-1.5 sm:rounded-full sm:p-2">
          {sections.map((section, index) => (
            <a
              key={section.slug}
              href={`/explore/${section.slug}`}
              className="group flex shrink-0 items-center gap-1.5 rounded-xl border border-transparent px-3 py-2.5 text-[9px] font-bold uppercase tracking-[0.12em] text-slate-400 transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-100 sm:rounded-full sm:px-3.5 sm:py-2 sm:text-[10px]"
            >
              <span className="text-[8px] text-cyan-400/70 transition-colors group-hover:text-cyan-200">0{index + 1}</span>
              <span>{section.label}</span>
            </a>
          ))}
        </div>
      </nav>
    </main>
  );
}
