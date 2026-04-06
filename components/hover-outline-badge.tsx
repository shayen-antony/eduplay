"use client";

import { useEffect, useRef } from "react";

type HoverOutlineBadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export default function HoverOutlineBadge({
  children,
  className = "",
}: HoverOutlineBadgeProps) {
  const badgeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let rafId = 0;

    const animate = (time: number) => {
      const el = badgeRef.current;
      if (!el) {
        rafId = requestAnimationFrame(animate);
        return;
      }

      const rect = el.getBoundingClientRect();
      const cx = rect.width / 2;
      const cy = rect.height / 2;

      // Move along an ellipse so the glow appears to travel around the pill border.
      const rx = Math.max(rect.width * 0.48, 1);
      const ry = Math.max(rect.height * 0.42, 1);
      const angle = (time * 0.0015) % (Math.PI * 2);

      const x = cx + rx * Math.cos(angle);
      const y = cy + ry * Math.sin(angle);

      el.style.setProperty("--active", "1");
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <span
      ref={badgeRef}
      className={`badge-oval-glow ${className}`.trim()}
      style={{
        ["--active" as string]: 1,
        ["--mx" as string]: "50%",
        ["--my" as string]: "50%",
      }}
    >
      {children}
    </span>
  );
}
