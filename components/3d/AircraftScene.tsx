"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, RoundedBox, Text } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

function HoloPanel({ position, title, sub, width = 2.4 }: { position: [number, number, number]; title: string; sub: string; width?: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ clock }) => { if (ref.current) ref.current.rotation.y = Math.sin(clock.elapsedTime * 0.5 + position[2]) * 0.025; });
  return <group ref={ref} position={position}>
    <RoundedBox args={[width, 1.45, 0.08]} radius={0.08} smoothness={4}><meshStandardMaterial color="#03121c" emissive="#0369a1" emissiveIntensity={0.5} transparent opacity={0.9} metalness={0.35} roughness={0.12} /></RoundedBox>
    <mesh position={[0, -0.52, 0.07]}><boxGeometry args={[width * 0.7, 0.025, 0.025]} /><meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={2.2} /></mesh>
    <Text position={[0, 0.22, 0.07]} fontSize={0.17} color="#d9fbff" anchorX="center" anchorY="middle">{title}</Text>
    <Text position={[0, -0.13, 0.07]} fontSize={0.095} color="#67e8f9" anchorX="center" anchorY="middle">{sub}</Text>
  </group>;
}

function Seat({ x, z }: { x: number; z: number }) {
  return <group position={[x, -1.35, z]}>
    <RoundedBox args={[1.35, 0.45, 1.45]} radius={0.18} smoothness={4}><meshStandardMaterial color="#101923" roughness={0.2} metalness={0.5} /></RoundedBox>
    <RoundedBox position={[0, 0.85, 0.38]} args={[1.35, 1.55, 0.42]} radius={0.2} smoothness={4}><meshStandardMaterial color="#080f18" roughness={0.18} metalness={0.55} /></RoundedBox>
    <mesh position={[0, 0.02, 0.76]}><boxGeometry args={[0.95, 0.035, 0.035]} /><meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={1.8} /></mesh>
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
    {[-2.7, -1.35, 0, 1.35, 2.7].map((x, i) => <HoloPanel key={x} position={[x, 0.05, -0.65]} title={["ALTITUDE", "AI", "NAV", "IDEAS", "LOG"][i]} sub={["38,000 FT", "ONLINE", "CRUISE", "EXPLORE", "FLIGHT 001"][i]} width={1.05} />)}
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

function CompartmentSystems() {
  return <group>
    <HoloPanel position={[-2.1, 1.25, -5.4]} title="CAPTAIN B" sub="IDENTITY / JOURNEY" width={2.7} />
    <HoloPanel position={[2.1, 1.25, -3.4]} title="NAVIGATION" sub="AI · BUSINESS · MARKETING" width={2.9} />
    <HoloPanel position={[-2.15, 1.25, -0.8]} title="KNOWLEDGE LOG" sub="NOTES / INSIGHTS / CASES" width={2.9} />
    <HoloPanel position={[2.15, 1.25, 1.9]} title="RESOURCES" sub="TOOLS / TEMPLATES / LINKS" width={2.9} />
    <HoloPanel position={[-2.1, 1.25, 4.7]} title="PROJECT LOUNGE" sub="BUILDS / EXPERIMENTS" width={2.8} />
    <HoloPanel position={[2.1, 1.25, 7.1]} title="COMMUNICATION" sub="OPEN CHANNEL" width={2.8} />
    {[-2.7, 2.7].map((x) => <group key={x} position={[x, 2.35, 2.5]}><RoundedBox args={[1.5, 0.16, 0.9]} radius={0.08} smoothness={4}><meshStandardMaterial color="#080e15" metalness={0.85} roughness={0.18} /></RoundedBox><Text position={[0, 0.18, 0]} fontSize={0.08} color="#67e8f9" anchorX="center">OPEN</Text></group>)}
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
  return <div className="pointer-events-none fixed inset-0 z-0 h-screen w-full"><Canvas camera={{ position: [0, 0.2, 6.8], fov: 64 }} dpr={[1, 1.5]}><color attach="background" args={["#010409"]} /><fog attach="fog" args={["#020812", 7, 34]} /><ambientLight intensity={0.42} /><directionalLight position={[0, 7, -6]} intensity={1.6} color="#d8f3ff" /><pointLight position={[0, 1, -7]} intensity={6} distance={18} color="#0ea5e9" /><pointLight position={[0, 2, 5]} intensity={2.2} distance={13} color="#22d3ee" /><Environment preset="night" /><OutsideWorld /><AircraftShell /><Windows /><Cockpit /><PilotPlaceholder /><CompartmentSystems /><CameraMotion /></Canvas></div>;
}
