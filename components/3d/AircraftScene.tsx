"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, RoundedBox, Text } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const content = [
  { title: "CAPTAIN B", sub: "PERSONAL BRAND · STORY · MISSION", body: "Meet Captain B — a knowledge-sharing personal brand built around ideas, technology, creativity and practical learning.", slug: "about", position: [-2.35, 1.5, -5.0] as [number,number,number], width: 3.0 },
  { title: "AI & TECHNOLOGY", sub: "AI · FUTURE TECH · EXPERIMENTS", body: "AI tools, emerging technology, experiments, workflows and practical ways to turn technology into outcomes.", slug: "ai", position: [2.35, 1.5, -1.7] as [number,number,number], width: 3.0 },
  { title: "BUSINESS & MARKETING", sub: "BRANDING · STRATEGY · GROWTH", body: "Branding, digital marketing, business ideas, positioning, growth and digital experiences.", slug: "business", position: [-2.35, 1.5, 1.8] as [number,number,number], width: 3.0 },
  { title: "KNOWLEDGE LOG", sub: "INSIGHTS · CASES · LESSONS", body: "A living flight log of lessons, observations, experiments, case studies and ideas worth sharing.", slug: "knowledge", position: [2.35, 1.5, 5.3] as [number,number,number], width: 2.95 },
  { title: "RESOURCES", sub: "TOOLS · TEMPLATES · REFERENCES", body: "Useful tools, templates, references and systems collected to make learning and creating easier.", slug: "resources", position: [-2.35, 1.5, 8.8] as [number,number,number], width: 2.95 },
  { title: "CONNECT", sub: "OPEN A COMMUNICATION CHANNEL", body: "Connect with Captain B, collaborate, start a conversation or follow the next flight.", slug: "connect", position: [2.35, 1.5, 12.3] as [number,number,number], width: 2.8 },
] as const;

function FloatingContent({ item }: { item: typeof content[number] }) {
  const ref = useRef<THREE.Group>(null);
  const [hover, setHover] = useState(false);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.position.y = item.position[1] + Math.sin(clock.elapsedTime * 0.7 + item.position[2]) * 0.06;
    ref.current.rotation.y = Math.sin(clock.elapsedTime * 0.4 + item.position[2]) * 0.015;
    const s = hover ? 1.05 : 1;
    ref.current.scale.lerp(new THREE.Vector3(s, s, s), 0.12);
  });
  return <group ref={ref} position={item.position} onClick={() => { window.location.href = `/explore/${item.slug}`; }} onPointerOver={(e) => { e.stopPropagation(); setHover(true); document.body.style.cursor = "pointer"; }} onPointerOut={() => { setHover(false); document.body.style.cursor = "default"; }}>
    <RoundedBox args={[item.width, 1.55, 0.09]} radius={0.14} smoothness={6}><meshStandardMaterial color={hover ? "#07304a" : "#03111b"} emissive="#0369a1" emissiveIntensity={hover ? 1.1 : 0.55} transparent opacity={0.94} metalness={0.5} roughness={0.08} /></RoundedBox>
    <mesh position={[0, -0.57, 0.075]}><boxGeometry args={[item.width * 0.68, 0.025, 0.025]} /><meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={2.8} /></mesh>
    <Text position={[0, 0.3, 0.08]} fontSize={0.155} color="#e5fbff" anchorX="center" anchorY="middle" maxWidth={item.width - 0.25}>{item.title}</Text>
    <Text position={[0, 0.02, 0.08]} fontSize={0.073} color="#67e8f9" anchorX="center" anchorY="middle" maxWidth={item.width - 0.22}>{item.sub}</Text>
    <Text position={[0, -0.29, 0.08]} fontSize={0.058} color="#d4e7ef" anchorX="center" anchorY="middle" maxWidth={item.width - 0.28}>{item.body}</Text>
    <Text position={[0, -0.56, 0.08]} fontSize={0.058} color="#a5f3fc" anchorX="center" anchorY="middle">CLICK · ENTER →</Text>
  </group>;
}

function AircraftShell() {
  return <group>
    <mesh position={[0, 3.8, 2]}><cylinderGeometry args={[4.75, 4.75, 31, 64, 1, true, Math.PI / 2, Math.PI]} /><meshStandardMaterial color="#05070c" metalness={0.94} roughness={0.16} side={THREE.DoubleSide} /></mesh>
    <mesh position={[0, -2.25, 2]}><boxGeometry args={[8, 0.18, 31]} /><meshStandardMaterial color="#05090f" metalness={0.82} roughness={0.2} /></mesh>
    {[-4.05, 4.05].map((x) => <mesh key={x} position={[x, 0.55, 2]} rotation={[0, 0, x < 0 ? -0.15 : 0.15]}><boxGeometry args={[0.23, 5.6, 31]} /><meshStandardMaterial color="#090d14" metalness={0.8} roughness={0.18} /></mesh>)}
    {[-3.48, 3.48].map((x) => <mesh key={x} position={[x, 2.85, 2]}><boxGeometry args={[0.045, 0.045, 31]} /><meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={1.5} /></mesh>)}
    <RoundedBox position={[0, 3.35, 2]} args={[7.4, 0.32, 31]} radius={0.12} smoothness={5}><meshStandardMaterial color="#090d14" metalness={0.82} roughness={0.18} /></RoundedBox>
  </group>;
}

function Windows() {
  return <group>{[-8.5, -5.2, -1.9, 1.4, 4.7, 8, 11.3, 14.6].map((z) => <group key={z} position={[0, 0.7, z]}>{[-3.76, 3.76].map((x) => <group key={x} position={[x, 0, 0]}>
    <RoundedBox args={[0.2, 2.5, 1.8]} radius={0.2} smoothness={5}><meshStandardMaterial color="#05090f" metalness={0.86} roughness={0.12} /></RoundedBox>
    <RoundedBox position={[x < 0 ? 0.1 : -0.1, 0, 0]} args={[0.075, 2.08, 1.42]} radius={0.18} smoothness={5}><meshStandardMaterial color="#061f35" emissive="#075985" emissiveIntensity={0.3} transparent opacity={0.95} roughness={0.04} /></RoundedBox>
  </group>)}</group>)}</group>;
}

function LuxurySeat({ x, z, pilot = false }: { x: number; z: number; pilot?: boolean }) {
  return <group position={[x, -1.25, z]}>
    <RoundedBox args={[1.55, 0.48, 1.7]} radius={0.22} smoothness={6}><meshStandardMaterial color="#151c25" roughness={0.15} metalness={0.5} /></RoundedBox>
    <RoundedBox position={[0, 0.9, 0.38]} args={[1.55, 1.72, 0.5]} radius={0.24} smoothness={6}><meshStandardMaterial color="#0b121b" roughness={0.14} metalness={0.58} /></RoundedBox>
    <RoundedBox position={[0, 0.55, 0.73]} args={[1.18, 0.08, 0.08]} radius={0.03} smoothness={3}><meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={1.8} /></RoundedBox>
    {pilot && <>
      <RoundedBox position={[0, 1.48, 0.15]} args={[1.32, 0.16, 0.48]} radius={0.06} smoothness={4}><meshStandardMaterial color="#050a10" metalness={0.82} roughness={0.12} /></RoundedBox>
      <mesh position={[0, 1.57, 0.18]}><boxGeometry args={[1.18, 0.025, 0.38]} /><meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={2.4} /></mesh>
    </>}
  </group>;
}

function Cockpit() {
  return <group position={[0, 0, -9.2]}>
    <RoundedBox position={[0, 2.25, -0.9]} args={[9.2, 5.2, 0.28]} radius={0.48} smoothness={8}><meshStandardMaterial color="#010408" metalness={0.96} roughness={0.1} /></RoundedBox>
    <RoundedBox position={[0, 2.25, -0.7]} args={[8.5, 4.55, 0.07]} radius={0.38} smoothness={8}><meshStandardMaterial color="#031b2d" emissive="#075985" emissiveIntensity={0.25} transparent opacity={0.94} roughness={0.025} /></RoundedBox>
    <mesh position={[0, 2.25, -0.63]}><boxGeometry args={[0.05, 4.2, 0.03]} /><meshStandardMaterial color="#0f3550" metalness={0.8} /></mesh>
    {[-3.15, -1.05, 1.05, 3.15].map((x, i) => <RoundedBox key={x} position={[x, 2.05 + (i % 2) * 0.12, -0.58]} args={[1.7, 1.38, 0.08]} radius={0.14} smoothness={5}><meshStandardMaterial color="#020910" emissive="#0369a1" emissiveIntensity={0.28} metalness={0.78} roughness={0.06} /></RoundedBox>)}
    <RoundedBox position={[0, 0.05, -0.2]} args={[8.9, 1.55, 1.55]} radius={0.3} smoothness={7}><meshStandardMaterial color="#090f17" metalness={0.9} roughness={0.12} /></RoundedBox>
    <RoundedBox position={[0, 0.45, -0.85]} args={[5.6, 0.55, 0.65]} radius={0.15} smoothness={5}><meshStandardMaterial color="#02070d" metalness={0.86} roughness={0.1} /></RoundedBox>
    {[-2.3, -0.75, 0.75, 2.3].map((x) => <mesh key={x} position={[x, 0.74, -0.88]} rotation={[0.18, 0, 0]}><cylinderGeometry args={[0.09, 0.12, 0.32, 20]} /><meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={2.5} metalness={0.7} /></mesh>)}
    <RoundedBox position={[-2.15, -0.72, -0.55]} args={[1.9, 0.35, 1.0]} radius={0.1} smoothness={4}><meshStandardMaterial color="#03080d" metalness={0.9} roughness={0.1} /></RoundedBox>
    <RoundedBox position={[2.15, -0.72, -0.55]} args={[1.9, 0.35, 1.0]} radius={0.1} smoothness={4}><meshStandardMaterial color="#03080d" metalness={0.9} roughness={0.1} /></RoundedBox>
    <Text position={[0, 4.75, -0.62]} fontSize={0.2} color="#67e8f9" anchorX="center">CAPTAIN B · PRIVATE FLIGHT DECK</Text>
  </group>;
}

function Pilot({ x }: { x: number }) {
  return <group position={[x, 0.0, -7.75]}><LuxurySeat x={0} z={0} pilot /><mesh position={[0, 1.95, 0]}><sphereGeometry args={[0.52, 28, 18]} /><meshStandardMaterial color="#9c684b" roughness={0.5} /></mesh><RoundedBox position={[0, 2.32, 0]} args={[1.15, 0.22, 0.6]} radius={0.06} smoothness={4}><meshStandardMaterial color="#050a10" metalness={0.85} roughness={0.1} /></RoundedBox></group>;
}

function OutsideWorld() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => { if (ref.current) { ref.current.position.z += delta * 0.7; if (ref.current.position.z > 7) ref.current.position.z = -31; } });
  return <group ref={ref} position={[0, 5.5, -24]}>{Array.from({ length: 48 }).map((_, i) => <mesh key={i} position={[((i * 37) % 22) - 11, ((i * 19) % 7) - 1.4, -i * 1.45]}><sphereGeometry args={[0.7 + (i % 4) * 0.48, 16, 10]} /><meshStandardMaterial color="#edf8ff" roughness={1} /></mesh>)}</group>;
}

function CameraMotion() {
  const [scroll, setScroll] = useState(0);
  useEffect(() => { const handler = () => { const max = document.documentElement.scrollHeight - window.innerHeight; setScroll(max > 0 ? window.scrollY / max : 0); }; handler(); window.addEventListener("scroll", handler, { passive: true }); return () => window.removeEventListener("scroll", handler); }, []);
  useFrame((state) => {
    const p = THREE.MathUtils.smootherstep(scroll, 0, 1);
    const z = THREE.MathUtils.lerp(7.7, 13.2, p);
    const y = THREE.MathUtils.lerp(0.3, 0.85, p);
    const x = Math.sin(p * Math.PI * 5) * 0.2;
    const targetZ = THREE.MathUtils.lerp(-8.8, 12.2, p);
    state.camera.position.lerp(new THREE.Vector3(x, y, z), 0.075);
    state.camera.lookAt(0, 1.0, targetZ);
  });
  return null;
}

export default function AircraftScene() {
  return <div className="fixed inset-0 z-0 h-screen w-full"><Canvas camera={{ position: [0, 0.3, 7.7], fov: 56 }} dpr={[1, 1.5]}><color attach="background" args={["#010409"]} /><fog attach="fog" args={["#020812", 8, 42]} /><ambientLight intensity={0.34} /><directionalLight position={[0, 9, -9]} intensity={1.9} color="#dff7ff" /><pointLight position={[0, 1, -8]} intensity={8} distance={22} color="#0ea5e9" /><pointLight position={[0, 2.5, 4]} intensity={2.8} distance={18} color="#22d3ee" /><Environment preset="night" /><OutsideWorld /><AircraftShell /><Windows /><Cockpit /><Pilot x={-2.05} /><Pilot x={2.05} />{[-1.85, 1.85].map((x) => <LuxurySeat key={`a-${x}`} x={x} z={-2.2} />)}{[-1.85, 1.85].map((x) => <LuxurySeat key={`b-${x}`} x={x} z={2.2} />)}{[-1.85, 1.85].map((x) => <LuxurySeat key={`c-${x}`} x={x} z={6.6} />)}{content.map((item) => <FloatingContent key={item.title} item={item} />)}<CameraMotion /></Canvas></div>;
}
