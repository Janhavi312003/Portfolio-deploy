"use client";

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

/** Low-poly network cluster — nodes + edges, tilts toward cursor. Not a glass sphere. */
function NetworkCluster({ pointer }) {
  const group = useRef(null);
  const nodes = useMemo(() => {
    const pts = [
      [0, 0, 0],
      [1.1, 0.4, 0.2],
      [-0.9, 0.55, -0.3],
      [0.35, -0.95, 0.55],
      [-0.55, -0.7, -0.75],
      [0.85, 0.15, -0.9],
      [-1.05, -0.1, 0.65],
      [0.15, 0.95, -0.45],
    ];
    return pts.map((p) => new THREE.Vector3(...p));
  }, []);

  const edges = useMemo(
    () => [
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
      [1, 5],
      [1, 7],
      [2, 4],
      [2, 6],
      [3, 6],
      [4, 5],
      [5, 7],
      [6, 3],
    ],
    []
  );

  const lineGeo = useMemo(() => {
    const positions = [];
    edges.forEach(([a, b]) => {
      positions.push(nodes[a].x, nodes[a].y, nodes[a].z);
      positions.push(nodes[b].x, nodes[b].y, nodes[b].z);
    });
    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
    return geo;
  }, [edges, nodes]);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    const tx = pointer.current.x * 0.55;
    const ty = pointer.current.y * 0.4;
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      t * 0.18 + tx,
      0.06
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      ty * 0.65 + Math.sin(t * 0.5) * 0.08,
      0.06
    );
    group.current.position.y = Math.sin(t * 0.7) * 0.08;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.35}>
      <group ref={group} scale={1.15}>
        <lineSegments geometry={lineGeo}>
          <lineBasicMaterial
            color="#FFC65C"
            transparent
            opacity={0.55}
            linewidth={1}
          />
        </lineSegments>

        {nodes.map((n, i) => (
          <mesh key={i} position={n} scale={i === 0 ? 1.15 : 0.85}>
            <icosahedronGeometry args={[0.18, 0]} />
            <meshStandardMaterial
              color={i === 0 ? "#FF7A59" : "#F5F0EA"}
              roughness={0.35}
              metalness={0.25}
              emissive={i === 0 ? "#FF7A59" : "#FFC65C"}
              emissiveIntensity={i === 0 ? 0.35 : 0.08}
            />
          </mesh>
        ))}

        <mesh rotation={[0.4, 0.6, 0.2]} scale={1.05}>
          <octahedronGeometry args={[0.95, 0]} />
          <meshStandardMaterial
            color="#FF7A59"
            wireframe
            transparent
            opacity={0.14}
          />
        </mesh>
      </group>
    </Float>
  );
}

function Scene({ pointer }) {
  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[3, 4, 2]} intensity={1.15} color="#FFE0C8" />
      <pointLight position={[-2, -1, 2]} intensity={0.55} color="#FF7A59" />
      <NetworkCluster pointer={pointer} />
    </>
  );
}

function CssNetworkFallback() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[22rem]" aria-hidden="true">
      <div className="absolute inset-[10%] animate-float rounded-[2rem] bg-gradient-to-br from-accent-coral/30 via-transparent to-accent-gold/25 blur-2xl" />
      <svg viewBox="0 0 200 200" className="relative h-full w-full">
        <defs>
          <linearGradient id="edge" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF7A59" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FFC65C" stopOpacity="0.7" />
          </linearGradient>
        </defs>
        <g stroke="url(#edge)" strokeWidth="1.2" fill="none" opacity="0.7">
          <path d="M100 100 L150 80 L140 40 L100 100 L60 70 L45 120 L100 100 L120 150 L70 155" />
          <path d="M150 80 L165 130 L120 150" />
          <path d="M60 70 L40 50 L45 120" />
        </g>
        {[
          [100, 100],
          [150, 80],
          [140, 40],
          [60, 70],
          [45, 120],
          [120, 150],
          [165, 130],
          [40, 50],
          [70, 155],
        ].map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={i === 0 ? 7 : 4.5}
            fill={i === 0 ? "#FF7A59" : "#F5F0EA"}
          />
        ))}
      </svg>
    </div>
  );
}

export default function HeroNetworkForm({ className = "" }) {
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
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
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
        <CssNetworkFallback />
      </div>
    );
  }

  return (
    <div className={`relative h-[min(52vh,28rem)] w-full ${className}`}>
      <Suspense fallback={<CssNetworkFallback />}>
        <Canvas
          dpr={dpr}
          camera={{ position: [0, 0, 4.4], fov: 42 }}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          style={{ background: "transparent" }}
        >
          <Scene pointer={pointer} />
        </Canvas>
      </Suspense>
    </div>
  );
}
