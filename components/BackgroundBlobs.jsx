"use client";

export default function BackgroundBlobs() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-accent-violet/30 blur-[120px] animate-blob-drift animate-pulse-glow" />
      <div className="absolute top-1/3 -right-20 h-[24rem] w-[24rem] rounded-full bg-accent-blue/25 blur-[110px] animate-blob-drift-slow" />
      <div className="absolute bottom-0 left-1/3 h-[22rem] w-[22rem] rounded-full bg-accent-cyan/20 blur-[100px] animate-blob-drift" />
    </div>
  );
}
