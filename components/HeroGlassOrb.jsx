"use client";

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment } from "@react-three/drei";
import * as THREE from "three";

function GlassOrb({ pointer }) {
  const mesh = useRef(null);
  const target = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.elapsedTime;
    target.current.x = THREE.MathUtils.lerp(target.current.x, pointer.current.x * 0.45, 0.05);
    target.current.y = THREE.MathUtils.lerp(target.current.y, pointer.current.y * 0.35, 0.05);
    mesh.current.rotation.x = t * 0.12 + target.current.y;
    mesh.current.rotation.y = t * 0.18 + target.current.x;
    mesh.current.position.x = target.current.x * 0.35;
    mesh.current.position.y = 0.05 + Math.sin(t * 0.7) * 0.08 - target.current.y * 0.2;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.55}>
      <mesh ref={mesh} scale={1.35}>
        <icosahedronGeometry args={[1, 24]} />
        <MeshDistortMaterial
          color="#7eb6ff"
          attach="material"
          distort={0.28}
          speed={1.6}
          roughness={0.12}
          metalness={0.15}
          transparent
          opacity={0.78}
          envMapIntensity={1.15}
        />
      </mesh>
      <mesh scale={1.52}>
        <icosahedronGeometry args={[1, 2]} />
        <meshBasicMaterial
          color="#22d3ee"
          wireframe
          transparent
          opacity={0.08}
        />
      </mesh>
    </Float>
  );
}

function Scene({ pointer }) {
  return (
    <>
      <ambientLight intensity={0.45} />
      <directionalLight position={[4, 5, 2]} intensity={1.1} color="#9ec5ff" />
      <directionalLight position={[-3, -2, -1]} intensity={0.35} color="#22d3ee" />
      <Environment preset="city" />
      <GlassOrb pointer={pointer} />
    </>
  );
}

function CssOrbFallback() {
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[22rem]"
      aria-hidden="true"
    >
      <div className="absolute inset-[12%] animate-float rounded-full bg-gradient-to-br from-accent-electric/35 via-accent-cyan/20 to-accent-violet/25 blur-2xl" />
      <div className="absolute inset-[18%] rounded-full border border-white/20 bg-white/[0.06] shadow-[inset_0_0_40px_rgba(255,255,255,0.12),0_0_60px_rgba(79,140,255,0.25)] backdrop-blur-xl" />
      <div className="absolute inset-[28%] rounded-full border border-cyan-300/20 bg-gradient-to-tr from-white/10 to-transparent" />
    </div>
  );
}

/**
 * Interactive glass orb — R3F on capable desktops; CSS fallback on mobile / reduced-motion.
 */
export default function HeroGlassOrb({ className = "" }) {
  const pointer = useRef({ x: 0, y: 0 });
  const [mode, setMode] = useState("fallback");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 768px)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    setMode(reduced || mobile || coarse ? "fallback" : "3d");
  }, []);

  useEffect(() => {
    if (mode !== "3d") return;
    const onMove = (e) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      pointer.current.x = nx;
      pointer.current.y = -ny;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [mode]);

  const dpr = useMemo(() => {
    if (typeof window === "undefined") return 1;
    return Math.min(window.devicePixelRatio || 1, 1.75);
  }, []);

  if (mode === "fallback") {
    return (
      <div className={className}>
        <CssOrbFallback />
      </div>
    );
  }

  return (
    <div className={`relative h-[min(52vh,28rem)] w-full ${className}`}>
      <Suspense fallback={<CssOrbFallback />}>
        <Canvas
          dpr={dpr}
          camera={{ position: [0, 0, 4.2], fov: 42 }}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          style={{ background: "transparent" }}
        >
          <Scene pointer={pointer} />
        </Canvas>
      </Suspense>
    </div>
  );
}
