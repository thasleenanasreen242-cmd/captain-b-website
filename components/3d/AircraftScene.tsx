"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, OrbitControls } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

function CabinShell() {
  return (
    <group>
      <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[3.8, 3.8, 13, 64, 1, true, Math.PI / 2, Math.PI]} />
        <meshPhysicalMaterial color="#f8fbff" transparent opacity={0.16} roughness={0.22} metalness={0.08} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0, 0, -6.2]} rotation={[Math.PI / 2, 0, 0]}>
        <circleGeometry args={[3.75, 64]} />
        <meshStandardMaterial color="#eaf7ff" metalness={0.1} roughness={0.35} />
      </mesh>
      {[-4.8, -2.4, 0, 2.4, 4.8].map((x) => (
        <mesh key={x} position={[x, 0, 3.62]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.72, 0.08, 16, 48]} />
          <meshStandardMaterial color="#d8f2ff" emissive="#7dd3fc" emissiveIntensity={0.18} metalness={0.35} roughness={0.22} />
        </mesh>
      ))}
      {[-4.5, -2.25, 0, 2.25, 4.5].map((x) => (
        <mesh key={`win-${x}`} position={[x, 0.02, 3.64]} rotation={[Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.58, 32]} />
          <meshStandardMaterial color="#9edfff" emissive="#38bdf8" emissiveIntensity={0.28} roughness={0.12} metalness={0.1} />
        </mesh>
      ))}
    </group>
  );
}

function Cockpit({ progress }: { progress: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, progress < 0.18 ? 0.15 : -0.5, delta * 2);
  });
  return (
    <group ref={ref} position={[0, 0.2, 5.4]}>
      <mesh position={[0, -1.15, 0]}>
        <boxGeometry args={[5.4, 0.18, 1.2]} />
        <meshStandardMaterial color="#dbeafe" metalness={0.5} roughness={0.2} />
      </mesh>
      {[-1.7, 0, 1.7].map((x) => (
        <mesh key={x} position={[x, -0.55, -0.2]} rotation={[-0.18, 0, 0]}>
          <boxGeometry args={[1.35, 0.85, 0.12]} />
          <meshStandardMaterial color="#0f2740" emissive="#075985" emissiveIntensity={0.7} metalness={0.4} roughness={0.2} />
        </mesh>
      ))}
      <mesh position={[0, 0.7, -0.5]} rotation={[0.18, 0, 0]}>
        <boxGeometry args={[6, 2.8, 0.12]} />
        <meshPhysicalMaterial color="#b9e9ff" transparent opacity={0.25} roughness={0.05} transmission={0.4} />
      </mesh>
    </group>
  );
}

function ScrollCamera() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useFrame((state) => {
    const p = progress;
    const targetZ = THREE.MathUtils.lerp(8.5, -8.5, p);
    const targetY = THREE.MathUtils.lerp(2.4, 1.1, p);
    state.camera.position.lerp(new THREE.Vector3(0, targetY, targetZ), 0.045);
    state.camera.lookAt(0, 0.2, THREE.MathUtils.lerp(2.5, -2, p));
  });
  return <Cockpit progress={progress} />;
}

function AircraftEnvironment() {
  return (
    <>
      <CabinShell />
      <Float speed={0.55} rotationIntensity={0.015} floatIntensity={0.18}>
        <Cockpit progress={0} />
      </Float>
      <ScrollCamera />
    </>
  );
}

export default function AircraftScene() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 hidden h-screen w-full lg:block">
      <Canvas camera={{ position: [0, 2.4, 8.5], fov: 48 }} dpr={[1, 1.5]}>
        <ambientLight intensity={1.7} />
        <directionalLight position={[4, 8, 6]} intensity={3.2} />
        <pointLight position={[0, 1, 4]} intensity={2.5} color="#7dd3fc" />
        <Environment preset="city" />
        <AircraftEnvironment />
      </Canvas>
    </div>
  );
}
