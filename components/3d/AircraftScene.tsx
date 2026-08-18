"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, RoundedBox, Text } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

function Seat({ x, z }: { x: number; z: number }) {
  return (
    <group position={[x, -1.35, z]}>
      <RoundedBox args={[1.35, 0.45, 1.45]} radius={0.18} smoothness={4}><meshStandardMaterial color="#111923" roughness={0.24} metalness={0.38} /></RoundedBox>
      <RoundedBox position={[0, 0.85, 0.38]} args={[1.35, 1.55, 0.42]} radius={0.2} smoothness={4}><meshStandardMaterial color="#0b121b" roughness={0.2} metalness={0.45} /></RoundedBox>
      <mesh position={[0, 0.02, 0.76]}><boxGeometry args={[0.95, 0.035, 0.035]} /><meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={1.8} /></mesh>
    </group>
  );
}

function Window({ x }: { x: number }) {
  return <group position={[x, 0.55, -1.2]}>
    <RoundedBox args={[1.7, 2.35, 0.16]} radius={0.22} smoothness={5}><meshStandardMaterial color="#050a11" metalness={0.75} roughness={0.16} /></RoundedBox>
    <RoundedBox position={[0, 0, 0.11]} args={[1.35, 1.95, 0.08]} radius={0.2} smoothness={5}><meshStandardMaterial color="#071a2d" emissive="#075985" emissiveIntensity={0.25} transparent opacity={0.95} roughness={0.08} /></RoundedBox>
  </group>;
}

function CockpitDashboard() {
  return <group position={[0, -0.65, -8.4]}>
    <RoundedBox args={[8.5, 1.35, 1.2]} radius={0.22} smoothness={5}><meshStandardMaterial color="#080e16" metalness={0.8} roughness={0.2} /></RoundedBox>
    {[-2.7, -1.35, 0, 1.35, 2.7].map((x) => <group key={x} position={[x, 0.2, -0.65]}>
      <RoundedBox args={[1.05, 0.72, 0.12]} radius={0.08} smoothness={4}><meshStandardMaterial color="#04131d" emissive="#0369a1" emissiveIntensity={0.9} metalness={0.3} roughness={0.18} /></RoundedBox>
      <mesh position={[0, -0.05, -0.08]}><boxGeometry args={[0.65, 0.018, 0.018]} /><meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={2} /></mesh>
    </group>)}
    <Text position={[0, 0.72, -0.65]} fontSize={0.22} color="#67e8f9" anchorX="center" anchorY="middle">CAPTAIN B // KNOWLEDGE FLIGHT SYSTEM</Text>
  </group>;
}

function CockpitSeats() {
  return <group position={[0, 0, -6.3]}>
    <Seat x={-1.55} z={0} /><Seat x={1.55} z={0} />
    <mesh position={[0, -0.82, 0.15]}><boxGeometry args={[0.5, 0.18, 1.25]} /><meshStandardMaterial color="#070c13" metalness={0.8} roughness={0.18} /></mesh>
  </group>;
}

function AircraftInterior() {
  const lights = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (lights.current) lights.current.children.forEach((child, i) => {
      const material = (child as THREE.Mesh).material as THREE.MeshStandardMaterial;
      if (material?.emissiveIntensity !== undefined) material.emissiveIntensity = 1.5 + Math.sin(clock.elapsedTime * 1.4 + i) * 0.35;
    });
  });
  return <group>
    <mesh position={[0, 3.65, 0]}><cylinderGeometry args={[4.7, 4.7, 19, 64, 1, true, Math.PI / 2, Math.PI]} /><meshStandardMaterial color="#05090f" metalness={0.82} roughness={0.22} side={THREE.DoubleSide} /></mesh>
    <mesh position={[0, -2.15, 0]}><boxGeometry args={[7.8, 0.18, 20]} /><meshStandardMaterial color="#070b11" metalness={0.65} roughness={0.3} /></mesh>
    {[-4, 4].map((x) => <mesh key={x} position={[x, 0.65, 0]} rotation={[0, 0, x < 0 ? -0.18 : 0.18]}><boxGeometry args={[0.28, 5.5, 20]} /><meshStandardMaterial color="#080e16" metalness={0.7} roughness={0.25} /></mesh>)}
    <group ref={lights}>{[-3.45, 3.45].map((x, i) => <mesh key={x} position={[x, 2.8, 0]}><boxGeometry args={[0.06, 0.06, 19]} /><meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={1.8 + i * 0.2} /></mesh>)}</group>
    {[-6.5, -3.3, 0, 3.3, 6.5].map((z) => <group key={z} position={[0, 0, z]}><Window x={-3.72} /><Window x={3.72} /></group>)}
    {[-4.3, -1.7, 1, 3.7].map((z) => <group key={z}><Seat x={-1.45} z={z} /><Seat x={1.45} z={z} /></group>)}
    <CockpitSeats /><CockpitDashboard />
    <group position={[0, 1.15, -9.25]}>
      <RoundedBox args={[7.7, 4.1, 0.2]} radius={0.35} smoothness={5}><meshStandardMaterial color="#02060b" metalness={0.85} roughness={0.15} /></RoundedBox>
      <RoundedBox position={[0, 0, 0.14]} args={[6.9, 3.25, 0.08]} radius={0.28} smoothness={5}><meshStandardMaterial color="#05233a" emissive="#0369a1" emissiveIntensity={0.22} transparent opacity={0.92} roughness={0.06} /></RoundedBox>
    </group>
  </group>;
}

function OutsideWorld() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => { if (ref.current) { ref.current.position.z += delta * 0.8; if (ref.current.position.z > 5) ref.current.position.z = -18; } });
  return <group ref={ref} position={[0, 4.8, -18]}>{Array.from({ length: 28 }).map((_, i) => <mesh key={i} position={[((i * 37) % 17) - 8, ((i * 19) % 7) - 1, -i * 1.4]}><sphereGeometry args={[0.8 + (i % 3) * 0.45, 16, 10]} /><meshStandardMaterial color="#f3f8ff" roughness={0.95} /></mesh>)}</group>;
}

function CameraMotion() {
  const [scroll, setScroll] = useState(0);
  useEffect(() => { const handler = () => { const max = document.documentElement.scrollHeight - window.innerHeight; setScroll(max > 0 ? window.scrollY / max : 0); }; handler(); window.addEventListener("scroll", handler, { passive: true }); return () => window.removeEventListener("scroll", handler); }, []);
  useFrame((state) => { const p = THREE.MathUtils.smoothstep(scroll, 0, 1); const z = THREE.MathUtils.lerp(6.8, -7.2, p); const y = THREE.MathUtils.lerp(0.3, 0.7, p); state.camera.position.lerp(new THREE.Vector3(0, y, z), 0.035); state.camera.lookAt(0, 0.25, THREE.MathUtils.lerp(-7, 1, p)); });
  return null;
}

export default function AircraftScene() {
  return <div className="pointer-events-none fixed inset-0 z-0 h-screen w-full"><Canvas camera={{ position: [0, 0.3, 6.8], fov: 66 }} dpr={[1, 1.5]}><color attach="background" args={["#010409"]} /><fog attach="fog" args={["#020812", 7, 30]} /><ambientLight intensity={0.45} /><directionalLight position={[0, 7, -5]} intensity={1.4} color="#d8f3ff" /><pointLight position={[0, 1, -7]} intensity={5} distance={15} color="#0ea5e9" /><pointLight position={[0, 2, 5]} intensity={2} distance={12} color="#22d3ee" /><Environment preset="night" /><OutsideWorld /><AircraftInterior /><CameraMotion /></Canvas></div>;
}
