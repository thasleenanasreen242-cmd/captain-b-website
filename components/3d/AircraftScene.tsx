"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, RoundedBox, Text } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const content = [
  ["CAPTAIN B", "DIGITAL CREATOR · KNOWLEDGE SHARER", [-2.2, 1.35, -5.5] as [number,number,number], 2.9],
  ["AI & TECHNOLOGY", "AI · FUTURE TECH · EXPERIMENTS", [2.2, 1.35, -3.0] as [number,number,number], 3.0],
  ["BUSINESS & MARKETING", "BRANDING · STRATEGY · GROWTH", [-2.2, 1.35, -0.4] as [number,number,number], 3.0],
  ["KNOWLEDGE LOG", "INSIGHTS · CASES · LESSONS", [2.2, 1.35, 2.3] as [number,number,number], 2.9],
  ["RESOURCES", "TOOLS · TEMPLATES · REFERENCES", [-2.2, 1.35, 5.0] as [number,number,number], 2.9],
  ["CONNECT", "OPEN A COMMUNICATION CHANNEL", [2.2, 1.35, 7.4] as [number,number,number], 2.7],
] as const;

function FloatingContent({ title, sub, position, width }: { title: string; sub: string; position: [number,number,number]; width: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.position.y = position[1] + Math.sin(clock.elapsedTime * 0.75 + position[2]) * 0.07;
    ref.current.rotation.y = Math.sin(clock.elapsedTime * 0.45 + position[2]) * 0.025;
  });
  return <group ref={ref} position={position}>
    <RoundedBox args={[width, 1.38, 0.08]} radius={0.13} smoothness={5}>
      <meshStandardMaterial color="#04131e" emissive="#0369a1" emissiveIntensity={0.65} transparent opacity={0.91} metalness={0.35} roughness={0.1} />
    </RoundedBox>
    <mesh position={[0, -0.51, 0.075]}><boxGeometry args={[width * 0.68, 0.025, 0.025]} /><meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={2.4} /></mesh>
    <Text position={[0, 0.23, 0.075]} fontSize={0.16} color="#e5fbff" anchorX="center" anchorY="middle" maxWidth={width - 0.25}>{title}</Text>
    <Text position={[0, -0.13, 0.075]} fontSize={0.082} color="#67e8f9" anchorX="center" anchorY="middle" maxWidth={width - 0.25}>{sub}</Text>
    <Text position={[0, -0.39, 0.075]} fontSize={0.065} color="#94a3b8" anchorX="center" anchorY="middle">CLICK TO EXPLORE →</Text>
  </group>;
}

function AircraftShell() {
  return <group>
    <mesh position={[0, 3.65, 0]}><cylinderGeometry args={[4.7, 4.7, 24, 64, 1, true, Math.PI / 2, Math.PI]} /><meshStandardMaterial color="#05090f" metalness={0.85} roughness={0.2} side={THREE.DoubleSide} /></mesh>
    <mesh position={[0, -2.15, 0]}><boxGeometry args={[7.8, 0.18, 24]} /><meshStandardMaterial color="#070b11" metalness={0.7} roughness={0.27} /></mesh>
    {[-4, 4].map((x) => <mesh key={x} position={[x, 0.65, 0]} rotation={[0, 0, x < 0 ? -0.18 : 0.18]}><boxGeometry args={[0.28, 5.5, 24]} /><meshStandardMaterial color="#080e16" metalness={0.75} roughness={0.22} /></mesh>)}
    {[-3.45, 3.45].map((x) => <mesh key={x} position={[x, 2.8, 0]}><boxGeometry args={[0.06, 0.06, 24]} /><meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={1.7} /></mesh>)}
  </group>;
}

function Windows() {
  return <group>{[-8, -4.8, -1.6, 1.6, 4.8, 8].map((z) => <group key={z} position={[0, 0.65, z]}>{[-3.72, 3.72].map((x) => <group key={x} position={[x, 0, 0]}>
    <RoundedBox args={[0.16, 2.35, 1.7]} radius={0.2} smoothness={5}><meshStandardMaterial color="#050a11" metalness={0.8} roughness={0.15} /></RoundedBox>
    <RoundedBox position={[x < 0 ? 0.08 : -0.08, 0, 0]} args={[0.08, 1.95, 1.35]} radius={0.18} smoothness={5}><meshStandardMaterial color="#06243b" emissive="#075985" emissiveIntensity={0.24} transparent opacity={0.94} roughness={0.05} /></RoundedBox>
  </group>)}</group>)}</group>;
}

function Cockpit() {
  return <group position={[0, 0, -8.5]}>
    <RoundedBox position={[0, 1.2, -0.7]} args={[7.8, 4.2, 0.22]} radius={0.38} smoothness={6}><meshStandardMaterial color="#02060b" metalness={0.9} roughness={0.13} /></RoundedBox>
    <RoundedBox position={[0, 1.2, -0.53]} args={[7.05, 3.45, 0.08]} radius={0.3} smoothness={6}><meshStandardMaterial color="#06223a" emissive="#075985" emissiveIntensity={0.3} transparent opacity={0.9} roughness={0.04} /></RoundedBox>
    <RoundedBox position={[0, -0.65, 0]} args={[8.5, 1.35, 1.2]} radius={0.22} smoothness={5}><meshStandardMaterial color="#080e16" metalness={0.85} roughness={0.17} /></RoundedBox>
    <Text position={[0, 2.72, -0.48]} fontSize={0.19} color="#67e8f9" anchorX="center">CAPTAIN B · KNOWLEDGE FLIGHT SYSTEM</Text>
  </group>;
}

function PilotPlaceholder() {
  return <group position={[0, -0.1, -7.35]}>
    <RoundedBox args={[1.55, 1.8, 0.5]} radius={0.3} smoothness={5}><meshStandardMaterial color="#0a1520" metalness={0.55} roughness={0.2} /></RoundedBox>
    <mesh position={[0, 1.22, 0]}><sphereGeometry args={[0.58, 24, 16]} /><meshStandardMaterial color="#9c684b" roughness={0.55} /></mesh>
    <RoundedBox position={[0, 1.62, 0]} args={[1.25, 0.24, 0.65]} radius={0.08} smoothness={4}><meshStandardMaterial color="#07111b" metalness={0.75} roughness={0.15} /></RoundedBox>
    <mesh position={[0, 1.75, 0]}><boxGeometry args={[1.3, 0.04, 0.7]} /><meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={2} /></mesh>
    <Text position={[0, -1.35, 0]} fontSize={0.14} color="#67e8f9" anchorX="center">CAPTAIN B · PILOT</Text>
  </group>;
}

function OutsideWorld() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => { if (ref.current) { ref.current.position.z += delta * 0.9; if (ref.current.position.z > 5) ref.current.position.z = -22; } });
  return <group ref={ref} position={[0, 5, -20]}>{Array.from({ length: 34 }).map((_, i) => <mesh key={i} position={[((i * 37) % 18) - 9, ((i * 19) % 6) - 1.5, -i * 1.25]}><sphereGeometry args={[0.75 + (i % 4) * 0.42, 16, 10]} /><meshStandardMaterial color="#e7f5ff" roughness={1} /></mesh>)}</group>;
}

function CameraMotion() {
  const [scroll, setScroll] = useState(0);
  useEffect(() => { const handler = () => { const max = document.documentElement.scrollHeight - window.innerHeight; setScroll(max > 0 ? window.scrollY / max : 0); }; handler(); window.addEventListener("scroll", handler, { passive: true }); return () => window.removeEventListener("scroll", handler); }, []);
  useFrame((state) => { const p = THREE.MathUtils.smoothstep(scroll, 0, 1); const z = THREE.MathUtils.lerp(6.8, 8.2, p); const y = THREE.MathUtils.lerp(0.2, 0.75, p); const x = Math.sin(p * Math.PI * 5) * 0.32; state.camera.position.lerp(new THREE.Vector3(x, y, z), 0.045); state.camera.lookAt(0, 0.7, THREE.MathUtils.lerp(-7.5, 5.5, p)); });
  return null;
}

export default function AircraftScene() {
  return <div className="pointer-events-none fixed inset-0 z-0 h-screen w-full"><Canvas camera={{ position: [0, 0.2, 6.8], fov: 64 }} dpr={[1, 1.5]}><color attach="background" args={["#010409"]} /><fog attach="fog" args={["#020812", 7, 34]} /><ambientLight intensity={0.42} /><directionalLight position={[0, 7, -6]} intensity={1.6} color="#d8f3ff" /><pointLight position={[0, 1, -7]} intensity={6} distance={18} color="#0ea5e9" /><pointLight position={[0, 2, 5]} intensity={2.2} distance={13} color="#22d3ee" /><Environment preset="night" /><OutsideWorld /><AircraftShell /><Windows /><Cockpit /><PilotPlaceholder />{content.map(([title, sub, position, width]) => <FloatingContent key={title} title={title} sub={sub} position={position} width={width} />)}<CameraMotion /></Canvas></div>;
}
