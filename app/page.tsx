import { ArrowUpRight, Atom } from "lucide-react";
import FlipText from "@/components/ui/flip-text";
import HoverOutlineBadge from "@/components/hover-outline-badge";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-[#f5f5f7] selection:bg-white selection:text-black">
      <div className="relative isolate overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_52%_22%,rgba(255,255,255,0.08),transparent_34%),linear-gradient(180deg,#000_0%,#020202_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:44px_44px] opacity-[0.08]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-36 left-1/2 h-[520px] w-[780px] -translate-x-1/2 rounded-full border border-white/20 blur-3xl"
        />

        <main className="relative mx-auto flex w-full max-w-7xl flex-col px-6 pb-20 pt-8 sm:px-10 lg:px-14">
          <header className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
              <Atom className="h-6 w-6 text-white" aria-hidden="true" />
              EduPlay
            </div>

            <nav className="hidden items-center gap-1 rounded-full border border-white/15 bg-black/70 px-2 py-2 text-sm text-[#a9a9b4] backdrop-blur md:flex">
              <a className="rounded-full px-4 py-1.5 text-white" href="#">
                Home
              </a>
              <a className="rounded-full px-4 py-1.5 transition-colors hover:text-white" href="#">
                Docs
              </a>
              <a className="rounded-full px-4 py-1.5 transition-colors hover:text-white" href="#">
                Showcase
              </a>
              <a className="rounded-full px-4 py-1.5 transition-colors hover:text-white" href="#">
                Tools
              </a>
            </nav>

            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-[#e9e9ef]"
            >
              Join Challenge
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </header>

          <section className="relative mx-auto flex min-h-[76vh] w-full max-w-5xl flex-col items-center justify-center text-center">
            <HoverOutlineBadge className="relative inline-flex items-center rounded-full px-5 py-2 text-sm text-[#d2d2dc] sm:px-6 sm:text-base">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-[3px] rounded-full border border-white/10"
              />
              <span className="relative">
                IEEE Education Week · EDSOC Kerala Chapter Initiative
              </span>
            </HoverOutlineBadge>
            <h1 className="mt-8 text-balance text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-[88px]">
              EduPlay Challenge
            </h1>
            <FlipText
              className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl"
              duration={4}
              delay={0.03}
            >
              Learn. Play. Lead.
            </FlipText>
            <p className="mt-7 max-w-3xl text-base text-[#a1a1ae] sm:text-lg">
              This IEEE Education Week, step into an interactive world of
              quizzes, mini-games, and problem-solving.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full border border-white bg-white px-10 py-3.5 text-sm font-semibold uppercase tracking-[0.08em] text-black transition-colors hover:bg-[#ececf1]"
              >
                Browse Challenges
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-black px-10 py-3.5 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:border-white/50"
              >
                Explore Challenges
              </button>
            </div>
          </section>
        </main>

        <footer className="relative border-t border-white/10 bg-black py-5">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 sm:px-10 lg:px-14 md:flex-row md:items-center md:justify-between">
            <div className="inline-flex items-center gap-2 text-base font-medium tracking-tight text-[#e6e6ee]">
              <Atom className="h-4 w-4 text-[#e6e6ee]" aria-hidden="true" />
              EduPlay
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs uppercase tracking-[0.08em] text-[#888896] sm:text-sm">
              <a className="transition-colors hover:text-white" href="#">
                Challenges
              </a>
              <a className="transition-colors hover:text-white" href="#">
                GitHub
              </a>
              <a className="transition-colors hover:text-white" href="#">
                Docs
              </a>
              <a className="transition-colors hover:text-white" href="#">
                Showcase
              </a>
              <a className="transition-colors hover:text-white" href="#">
                Sponsors
              </a>
            </div>

            <p className="text-xs uppercase tracking-[0.08em] text-[#6f6f83] sm:text-sm">© 2026 EduPlay</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
