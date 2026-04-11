"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { collection, getCountFromServer, query, where } from "firebase/firestore";
import DotGrid from "@/components/DotGrid";
import ShapeGrid from "@/components/ShapeGrid";
import { db } from "@/lib/firebase";

export default function ParticipantCountPage() {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadCount() {
      setLoading(true);
      setError("");
      try {
        const participantsQuery = query(
          collection(db, "leaderboard"),
          where("totalPoints", ">", 0)
        );
        const snapshot = await getCountFromServer(participantsQuery);
        setCount(snapshot.data().count);
      } catch (err) {
        console.error("Failed to load participant count", err);
        setError("Unable to fetch participant count right now.");
      } finally {
        setLoading(false);
      }
    }

    void loadCount();
  }, []);

  return (
    <div className="min-h-screen bg-black text-[#f5f5f7] selection:bg-white selection:text-black">
      <div className="relative isolate flex min-h-screen flex-col overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 h-full w-full sm:hidden">
          <ShapeGrid
            direction="diagonal"
            speed={0.25}
            borderColor="#2b2b2b"
            squareSize={34}
            hoverFillColor="#141414"
            shape="square"
            hoverTrailAmount={0}
            className="h-full w-full"
          />
        </div>
        <div className="pointer-events-auto absolute inset-0 -z-10 hidden h-full w-full sm:block">
          <DotGrid
            dotSize={3}
            gap={30}
            baseColor="#2a2a2a"
            activeColor="#f47a20"
            className="h-full w-full"
            style={{}}
          />
        </div>

        <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-4xl items-center justify-center px-6 py-12">
          <section className="w-full rounded-2xl border border-[#f47a20]/35 bg-[#0b0b0b]/75 p-6 text-center sm:p-10">
            <p className="text-xs uppercase tracking-[0.1em] text-white/60">Education Week</p>
            <h1 className="mt-2 text-3xl font-semibold text-[#f47a20] sm:text-4xl">Participant Count</h1>
            <p className="mt-3 text-sm text-white/70">
              Total users who atleast attended one event and earned points in the challenge.
            </p>

            <div className="mt-6 rounded-xl border border-white/10 bg-[#111111] p-6 sm:p-8">
              {loading ? (
                <p className="text-xl text-white/70">Loading...</p>
              ) : error ? (
                <p className="text-base text-rose-300">{error}</p>
              ) : (
                <>
                  <p className="text-xs uppercase tracking-[0.1em] text-white/50">Total Participants</p>
                  <p className="mt-2 text-5xl font-semibold text-[#f47a20] sm:text-6xl">{count ?? 0}</p>
                </>
              )}
            </div>

            <div className="mt-6 flex items-center justify-center gap-3">
              <Link
                href="/leaderboard"
                className="rounded-full border border-[#f47a20] px-5 py-2 text-sm text-[#f47a20] hover:bg-[#f47a20]/10"
              >
                Leaderboard
              </Link>
              <Link
                href="/dashboard"
                className="rounded-full border border-white/20 px-5 py-2 text-sm hover:bg-white/5"
              >
                Dashboard
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
