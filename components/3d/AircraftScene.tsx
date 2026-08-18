"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, RoundedBox, Text } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Screen({ position, size = [1.7, 0.95, 0.08] as [number, number, number], label }: { position: [number, number, number]; size?: [number, number, number]; label: string }) {
  return <group position={position}>
    <RoundedBox args={[size[0] + 0.18, size[1] + 0.18, 0.12]} radius={0.08} smoothness={4}>
      <meshStandardMaterial color="#050a10" metalness={0.9} roughness={0.18} />
    </RoundedBox>
    <RoundedBox position={[0, 0, 0.08]} args={size} radius={0.06} smoothness={4}>
      <meshStandardMaterial color="#06233a" emissive="#087ea4" emissiveIntensity={0.65} roughness={0.12} metalness={0.25} />
    </RoundedBox>
    <Text position={[0, 0, 0.14]} fontSize={0.13} color="#9ff7ff" anchorX="center" anchorY="middle">{label}</Text>
  </group>;
}

function CaptainB() {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.position.y = Math.sin(clock.elapsedTime * 0.8) * 0.025;
  });
  return <group ref={ref} position={[0, -0.25, -3.25]}>
    <RoundedBox args={[1.65, 2.05, 0.55]} radius={0.3} smoothness={5}>
      <meshStandardMaterial color="#0b1621" metalness={0.55} roughness={0.2} />
    </RoundedBox>
    <mesh position={[0, 1.35, 0]}>
      <sphereGeometry args={[0.65, 32, 20]} />
      <meshStandardMaterial color="#9c684b" roughness={0.55} />
    </mesh>
    <RoundedBox position={[0, 1.78, 0]} args={[1.42, 0.26, 0.72]} radius={0.08} smoothness={4}>
      <meshStandardMaterial color="#07111b" metalness={0.7} roughness={0.16} />
    </RoundedBox>
    <mesh position={[0, 1.92, 0]}>
      <boxGeometry args={[1.5, 0.05, 0.78]} />
      <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={2.2} />
    </mesh>
    <mesh position={[-0.23, 1.39, 0.58]}>
      <sphereGeometry args={[0.08, 16, 12]} />
      <meshStandardMaterial color="#dffcff" emissive="#67e8f9" emissiveIntensity={2} />
    </mesh>
    <mesh position={[0.23, 1.39, 0.58]}>
      <sphereGeometry args={[0.08, 16, 12]} />
      <meshStandardMaterial color="#dffcff" emissive="#67e8f9" emissiveIntensity={2} />
    </mesh>
    <Text position={[0, -1.45, 0]} fontSize={0.17} color="#67e8f9" anchorX="center">CAPTAIN B · PILOT</Text>
  </group>;
}

function AircraftFront() {
  return <group>
    <mesh position={[0, 0.3, -7]} rotation={[0, 0, 0]}>
      <cylinderGeometry args={[5.2, 3.4, 8, 64, 1, true, Math.PI / 2, Math.PI]} />
      <meshStandardMaterial color="#070d15" metalness={0.82} roughness={0.2} side={THREE.DoubleSide} />
    </mesh>
    <RoundedBox position={[0, 2.45, -6.2]} args={[8.5, 0.28, 4.2]} radius={0.35} smoothness={5}>
      <meshStandardMaterial color="#050a10" metalness={0.9} roughness={0.16} />
    </RoundedBox>
    <RoundedBox position={[0, 1.25, -6.75]} args={[8.0, 4.2, 0.22]} radius={0.42} smoothness={6}>
      <meshStandardMaterial color="#02070d" metalness={0.92} roughness={0.13} />
    </RoundedBox>
    <RoundedBox position={[0, 1.25, -6.58]} args={[7.25, 3.45, 0.08]} radius={0.34} smoothness={6}>
      <meshStandardMaterial color="#061b2c" emissive="#075985" emissiveIntensity={0.32} transparent opacity={0.9} roughness={0.04} />
    </RoundedBox>
    <mesh position={[-3.62, 1.3, -6.45]} rotation={[0, 0, 0.06]}><boxGeometry args={[0.07, 3.2, 0.1]} /><meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={2.2} /></mesh>
    <mesh position={[3.62, 1.3, -6.45]} rotation={[0, 0, -0.06]}><boxGeometry args={[0.07, 3.2, 0.1]} /><meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={2.2} /></mesh>
    <Text position={[0, 2.72, -6.42]} fontSize={0.19} color="#67e8f9" anchorX="center">CAPTAIN B // FLIGHT MODE · KNOWLEDGE CRUISE</Text>
  </group>;
}

function Controls() {
  return <group position={[0, -1.6, -2.2]}>
    <RoundedBox args={[7.2, 0.65, 1.7]} radius={0.22} smoothness={5}>
      <meshStandardMaterial color="#070d14" metalness={0.88} roughness={0.17} />
    </RoundedBox>
    {[-2.55, -1.25, 0, 1.25, 2.55].map((x, i) => <Screen key={x} position={[x, 0.08, -0.88]} size={[0.92, 0.48, 0.06]} label={["ALT", "AI", "NAV", "IDEAS", "LOG"][i]} />)}
    <mesh position={[0, 0.22, 0.72]}><torusGeometry args={[0.42, 0.08, 16, 40]} /><meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={1.8} metalness={0.6} roughness={0.2} /></mesh>
  </group>;
}

function FlightMotion() {
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    state.camera.position.x = Math.sin(t * 0.12) * 0.08;
    state.camera.position.y = 0.15 + Math.sin(t * 0.55) * 0.025;
    state.camera.lookAt(0, 0.35, -5.1);
  });
  return null;
}

function Clouds() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.position.z += delta * 0.55;
    if (ref.current.position.z > 8) ref.current.position.z = -28;
  });
  return <group ref={ref} position={[0, 5, -20]}>
    {Array.from({ length: 22 }).map((_, i) => <mesh key={i} position={[((i * 41) % 19) - 9, ((i * 17) % 5) - 1.5, -i * 1.8]}>
      <sphereGeometry args={[0.9 + (i % 4) * 0.45, 18, 12]} />
      <meshStandardMaterial color="#dceeff" roughness={1} />
    </mesh>)}
  </group>;
}

export default function AircraftScene() {
  return <div className="pointer-events-none fixed inset-0 z-0 h-screen w-full">
    <Canvas camera={{ position: [0, 0.15, 4.8], fov: 58 }} dpr={[1, 1.5]}>
      <color attach="background" args={["#010307"]} />
      <fog attach="fog" args={["#020812", 9, 34]} />
      <ambientLight intensity={0.32} />
      <directionalLight position={[0, 6, -8]} intensity={2} color="#d8f7ff" />
      <pointLight position={[0, 1, -5]} intensity={7} distance={18} color="#0891b2" />
      <pointLight position={[0, -1, 2]} intensity={2.5} distance={10} color="#22d3ee" />
      <Environment preset="night" />
      <Clouds />
      <AircraftFront />
      <Controls />
      <CaptainB />
      <FlightMotion />
    </Canvas>
  </div>;
}
