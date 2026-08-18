"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, RoundedBox, Text } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const content = [
  { title: "CAPTAIN B", sub: "PERSONAL BRAND · STORY · MISSION", body: "Meet Captain B — a knowledge-sharing personal brand built around ideas, technology, creativity and practical learning.", slug: "about", position: [-2.35, 1.45, -5.2] as [number,number,number], width: 3.0 },
  { title: "AI & TECHNOLOGY", sub: "AI · FUTURE TECH · EXPERIMENTS", body: "AI tools, emerging technology, experiments, workflows and practical ways to turn technology into outcomes.", slug: "ai", position: [2.35, 1.45, -2.0] as [number,number,number], width: 3.0 },
  { title: "BUSINESS & MARKETING", sub: "BRANDING · STRATEGY · GROWTH", body: "Branding, digital marketing, business ideas, positioning, growth and digital experiences.", slug: "business", position: [-2.35, 1.45, 1.25] as [number,number,number], width: 3.0 },
  { title: "KNOWLEDGE LOG", sub: "INSIGHTS · CASES · LESSONS", body: "A living flight log of lessons, observations, experiments, case studies and ideas worth sharing.", slug: "knowledge", position: [2.35, 1.45, 4.5] as [number,number,number], width: 2.95 },
  { title: "RESOURCES", sub: "TOOLS · TEMPLATES · REFERENCES", body: "Useful tools, templates, references and systems collected to make learning and creating easier.", slug: "resources", position: [-2.35, 1.45, 7.75] as [number,number,number], width: 2.95 },
  { title: "CONNECT", sub: "OPEN A COMMUNICATION CHANNEL", body: "Connect with Captain B, collaborate, start a conversation or follow the next flight.", slug: "connect", position: [2.35, 1.45, 10.8] as [number,number,number], width: 2.8 },
] as const;

function FloatingContent({ item }: { item: typeof content[number] }) {
  const ref = useRef<THREE.Group>(null);
  const [hover, setHover] = useState(false);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.position.y = item.position[1] + Math.sin(clock.elapsedTime * 0.7 + item.position[2]) * 0.07;
    ref.current.rotation.y = Math.sin(clock.elapsedTime * 0.4 + item.position[2]) * 0.018;
    const s = hover ? 1.045 : 1;
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
    <mesh position={[0, 3.75, 1.5]}><cylinderGeometry args={[4.65, 4.65, 27, 64, 1, true, Math.PI / 2, Math.PI]} /><meshStandardMaterial color="#05080d" metalness={0.9} roughness={0.18} side={THREE.DoubleSide} /></mesh>
    <mesh position={[0, -2.2, 1.5]}><boxGeometry args={[7.9, 0.18, 27]} /><meshStandardMaterial color="#060a10" metalness={0.75} roughness={0.24} /></mesh>
    {[-4, 4].map((x) => <mesh key={x} position={[x, 0.6, 1.5]} rotation={[0, 0, x < 0 ? -0.16 : 0.16]}><boxGeometry args={[0.25, 5.5, 27]} /><meshStandardMaterial color="#080d14" metalness={0.78} roughness={0.2} /></mesh>)}
    {[-3.45, 3.45].map((x) => <mesh key={x} position={[x, 2.8, 1.5]}><boxGeometry args={[0.055, 0.055, 27]} /><meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={1.6} /></mesh>)}
  </group>;
}

function Windows() {
  return <group>{[-8, -4.8, -1.6, 1.6, 4.8, 8, 11].map((z) => <group key={z} position={[0, 0.65, z]}>{[-3.72, 3.72].map((x) => <group key={x} position={[x, 0, 0]}>
    <RoundedBox args={[0.16, 2.35, 1.7]} radius={0.2} smoothness={5}><meshStandardMaterial color="#05090f" metalness={0.82} roughness={0.14} /></RoundedBox>
    <RoundedBox position={[x < 0 ? 0.08 : -0.08, 0, 0]} args={[0.08, 1.95, 1.35]} radius={0.18} smoothness={5}><meshStandardMaterial color="#06243b" emissive="#075985" emissiveIntensity={0.28} transparent opacity={0.94} roughness={0.05} /></RoundedBox>
  </group>)}</group>)}</group>;
}

function Seat({ x, z }: { x: number; z: number }) {
  return <group position={[x, -1.35, z]}>
    <RoundedBox args={[1.4, 0.46, 1.5]} radius={0.18} smoothness={5}><meshStandardMaterial color="#111923" roughness={0.18} metalness={0.55} /></RoundedBox>
    <RoundedBox position={[0, 0.88, 0.38]} args={[1.4, 1.62, 0.43]} radius={0.2} smoothness={5}><meshStandardMaterial color="#080f18" roughness={0.16} metalness={0.6} /></RoundedBox>
    <mesh position={[0, 0.04, 0.78]}><boxGeometry args={[0.95, 0.035, 0.035]} /><meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={1.8} /></mesh>
  </group>;
}

function Cockpit() {
  return <group position={[0, 0, -8.5]}>
    <RoundedBox position={[0, 1.15, -0.7]} args={[8.3, 4.35, 0.24]} radius={0.42} smoothness={7}><meshStandardMaterial color="#02050a" metalness={0.94} roughness={0.12} /></RoundedBox>
    <RoundedBox position={[0, 1.15, -0.52]} args={[7.55, 3.6, 0.08]} radius={0.32} smoothness={7}><meshStandardMaterial color="#061d31" emissive="#075985" emissiveIntensity={0.34} transparent opacity={0.92} roughness={0.035} /></RoundedBox>
    {[-2.7, 0, 2.7].map((x) => <RoundedBox key={x} position={[x, 1.15, -0.42]} args={[2.25, 1.28, 0.07]} radius={0.12} smoothness={5}><meshStandardMaterial color="#020b13" emissive="#0ea5e9" emissiveIntensity={0.35} metalness={0.7} roughness={0.08} /></RoundedBox>)}
    <RoundedBox position={[0, -0.72, 0]} args={[8.7, 1.45, 1.25]} radius={0.24} smoothness={6}><meshStandardMaterial color="#080e16" metalness={0.88} roughness={0.15} /></RoundedBox>
    <Text position={[0, 2.65, -0.45]} fontSize={0.18} color="#67e8f9" anchorX="center">CAPTAIN B · FLIGHT DECK</Text>
  </group>;
}

function PilotPlaceholder() {
  return <group position={[0, -0.08, -7.25]}><RoundedBox args={[1.65, 1.85, 0.52]} radius={0.3} smoothness={5}><meshStandardMaterial color="#0a1520" metalness={0.58} roughness={0.18} /></RoundedBox><mesh position={[0, 1.25, 0]}><sphereGeometry args={[0.59, 28, 18]} /><meshStandardMaterial color="#9c684b" roughness={0.55} /></mesh><RoundedBox position={[0, 1.65, 0]} args={[1.3, 0.25, 0.68]} radius={0.08} smoothness={4}><meshStandardMaterial color="#07111b" metalness={0.78} roughness={0.14} /></RoundedBox><mesh position={[0, 1.78, 0]}><boxGeometry args={[1.34, 0.04, 0.72]} /><meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={2} /></mesh><Text position={[0, -1.38, 0]} fontSize={0.13} color="#67e8f9" anchorX="center">CAPTAIN B · PILOT</Text></group>;
}

function OutsideWorld() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => { if (ref.current) { ref.current.position.z += delta * 0.75; if (ref.current.position.z > 6) ref.current.position.z = -28; } });
  return <group ref={ref} position={[0, 5, -22]}>{Array.from({ length: 42 }).map((_, i) => <mesh key={i} position={[((i * 37) % 20) - 10, ((i * 19) % 7) - 1.5, -i * 1.35]}><sphereGeometry args={[0.72 + (i % 4) * 0.45, 16, 10]} /><meshStandardMaterial color="#e7f5ff" roughness={1} /></mesh>)}</group>;
}

function CameraMotion() {
  const [scroll, setScroll] = useState(0);
  useEffect(() => { const handler = () => { const max = document.documentElement.scrollHeight - window.innerHeight; setScroll(max > 0 ? window.scrollY / max : 0); }; handler(); window.addEventListener("scroll", handler, { passive: true }); return () => window.removeEventListener("scroll", handler); }, []);
  useFrame((state) => {
    const p = THREE.MathUtils.smoothstep(scroll, 0, 1);
    const z = THREE.MathUtils.lerp(7.8, 11.0, p);
    const y = THREE.MathUtils.lerp(0.35, 0.8, p);
    const x = Math.sin(p * Math.PI * 4) * 0.18;
    const targetZ = THREE.MathUtils.lerp(-8.2, 10.2, p);
    state.camera.position.lerp(new THREE.Vector3(x, y, z), 0.07);
    state.camera.lookAt(0, 0.9, targetZ);
  });
  return null;
}

export default function AircraftScene() {
  return <div className="fixed inset-0 z-0 h-screen w-full"><Canvas camera={{ position: [0, 0.35, 7.8], fov: 58 }} dpr={[1, 1.5]}><color attach="background" args={["#010409"]} /><fog attach="fog" args={["#020812", 8, 38]} /><ambientLight intensity={0.4} /><directionalLight position={[0, 8, -8]} intensity={1.7} color="#d8f3ff" /><pointLight position={[0, 1, -7]} intensity={7} distance={20} color="#0ea5e9" /><pointLight position={[0, 2, 6]} intensity={2.4} distance={16} color="#22d3ee" /><Environment preset="night" /><OutsideWorld /><AircraftShell /><Windows /><Cockpit /><PilotPlaceholder />{[-1.85, 1.85].map((x) => <Seat key={`a-${x}`} x={x} z={-2.1} />)}{[-1.85, 1.85].map((x) => <Seat key={`b-${x}`} x={x} z={2.4} />)}{[-1.85, 1.85].map((x) => <Seat key={`c-${x}`} x={x} z={6.8} />)}{content.map((item) => <FloatingContent key={item.title} item={item} />)}<CameraMotion /></Canvas></div>;
}
