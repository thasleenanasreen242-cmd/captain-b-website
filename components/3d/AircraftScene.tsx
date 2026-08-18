"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Float, OrbitControls } from "@react-three/drei";

function Aircraft() {
  return (
    <Float speed={1} rotationIntensity={0.12} floatIntensity={0.5}>
      <group rotation={[0, -0.35, 0]}>
        <mesh scale={[3.8, 0.7, 0.7]}>
          <sphereGeometry args={[1, 64, 32]} />
          <meshStandardMaterial color="#f8fbff" metalness={0.35} roughness={0.25} />
        </mesh>
        <mesh position={[3.55, 0, 0]} scale={[1.1, 0.62, 0.62]}>
          <sphereGeometry args={[1, 48, 24]} />
          <meshStandardMaterial color="#ffffff" metalness={0.25} roughness={0.2} />
        </mesh>
        <mesh position={[0, -0.05, 0]} rotation={[0, 0, Math.PI / 2]} scale={[0.15, 2.8, 1]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#dbeafe" metalness={0.3} roughness={0.3} />
        </mesh>
        <mesh position={[-2.8, 0.35, 0]} scale={[0.9, 0.12, 1.3]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#e5f3ff" metalness={0.3} roughness={0.3} />
        </mesh>
        <mesh position={[-2.8, 0.55, 0]} scale={[0.75, 1.3, 0.15]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#d9efff" metalness={0.25} roughness={0.3} />
        </mesh>
        {[-0.9, 0.9].map((z) => (
          <group key={z} position={[0.2, -0.35, z]}>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.25, 0.32, 1.1, 32]} />
              <meshStandardMaterial color="#cbd5e1" metalness={0.7} roughness={0.2} />
            </mesh>
            <mesh position={[0, -0.57, 0]}>
              <circleGeometry args={[0.18, 32]} />
              <meshStandardMaterial color="#7dd3fc" emissive="#38bdf8" emissiveIntensity={2} />
            </mesh>
          </group>
        ))}
        {[-1.9, -1.4, -0.9, -0.4, 0.1, 0.6, 1.1, 1.6, 2.1].map((x) => (
          <mesh key={x} position={[x, 0.48, 0.48]}>
            <sphereGeometry args={[0.09, 24, 12]} />
            <meshStandardMaterial color="#7dd3fc" emissive="#38bdf8" emissiveIntensity={0.4} metalness={0.4} roughness={0.15} />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

export default function AircraftScene() {
  return (
    <div className="h-[420px] w-full">
      <Canvas camera={{ position: [6, 2.5, 7], fov: 42 }}>
        <ambientLight intensity={1.8} />
        <directionalLight position={[5, 8, 5]} intensity={3} />
        <pointLight position={[0, 2, 3]} intensity={2} color="#7dd3fc" />
        <Environment preset="city" />
        <Aircraft />
        <OrbitControls enableZoom={false} minPolarAngle={Math.PI / 2.8} maxPolarAngle={Math.PI / 2.1} />
      </Canvas>
    </div>
  );
}
