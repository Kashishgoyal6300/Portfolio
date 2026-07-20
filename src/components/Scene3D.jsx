import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, MeshDistortMaterial, Sphere, Torus, Icosahedron } from '@react-three/drei';

function FloatingShape({ position, color, speed = 1, distort = 0.3, scale = 1 }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={1.8}>
      <Sphere ref={meshRef} args={[1, 48, 48]} position={position} scale={scale}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2.5}
          roughness={0.15}
          metalness={0.85}
        />
      </Sphere>
    </Float>
  );
}

function WireTorus({ position, color }) {
  const ref = useRef();
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.4;
      ref.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1}>
      <Torus ref={ref} args={[0.8, 0.25, 16, 48]} position={position}>
        <meshStandardMaterial color={color} wireframe metalness={0.9} roughness={0.1} />
      </Torus>
    </Float>
  );
}

function WireIcosahedron({ position, color }) {
  const ref = useRef();
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.5;
      ref.current.rotation.x = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={1.2}>
      <Icosahedron ref={ref} args={[0.6, 1]} position={position}>
        <meshStandardMaterial color={color} wireframe metalness={0.8} roughness={0.2} />
      </Icosahedron>
    </Float>
  );
}

function ParticleRing() {
  const count = 300;
  const particles = useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const radius = 7 + Math.random() * 5;
      arr.push({
        x: Math.cos(angle) * radius,
        y: (Math.random() - 0.5) * 8,
        z: Math.sin(angle) * radius,
        size: Math.random() * 0.035 + 0.008,
        color: i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#a855f7' : '#ec4899',
      });
    }
    return arr;
  }, []);

  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.04;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {particles.map((p, i) => (
        <mesh key={i} position={[p.x, p.y, p.z]}>
          <sphereGeometry args={[p.size, 6, 6]} />
          <meshBasicMaterial color={p.color} transparent opacity={0.55} />
        </mesh>
      ))}
    </group>
  );
}

function SceneContent() {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.pointer.x * 0.15;
      groupRef.current.rotation.x = state.pointer.y * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.25} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#06b6d4" />
      <pointLight position={[-10, -5, -10]} intensity={0.6} color="#a855f7" />
      <pointLight position={[0, -10, 5]} intensity={0.4} color="#ec4899" />
      <Stars radius={120} depth={60} count={4000} factor={4} saturation={0} fade speed={0.8} />
      <FloatingShape position={[-3.5, 1, -2]} color="#06b6d4" speed={0.8} scale={0.85} distort={0.45} />
      <FloatingShape position={[3.8, -0.5, -3]} color="#a855f7" speed={1.2} scale={0.65} distort={0.55} />
      <FloatingShape position={[0.5, 2.2, -4.5]} color="#ec4899" speed={0.6} scale={0.5} distort={0.4} />
      <WireTorus position={[-1.5, -1.5, -2]} color="#22c55e" />
      <WireIcosahedron position={[2.5, 1.5, -3]} color="#06b6d4" />
      <ParticleRing />
    </group>
  );
}

export default function Scene3D() {
  return (
    <div className="scene-3d">
      <Canvas camera={{ position: [0, 0, 7], fov: 55 }} dpr={[1, 1.5]}>
        <SceneContent />
      </Canvas>
    </div>
  );
}
