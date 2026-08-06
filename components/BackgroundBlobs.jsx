"use client";

/** Soft warm ambient fields — restrained so hero/skills own the drama. */
export default function BackgroundBlobs() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute -top-40 -left-28 h-[26rem] w-[26rem] rounded-full bg-accent-coral/18 blur-[130px] animate-blob-drift animate-pulse-glow" />
      <div className="absolute top-[42%] -right-24 h-[22rem] w-[22rem] rounded-full bg-accent-gold/12 blur-[120px] animate-blob-drift-slow" />
      <div className="absolute bottom-[-4rem] left-[28%] h-[20rem] w-[20rem] rounded-full bg-[#6b4c7a]/20 blur-[110px] animate-blob-drift" />
    </div>
  );
}
