import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

export function Scene() {
  const groupRef = useRef(null);
  const sphereRef = useRef(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.1;
    }

    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(time * 0.5) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={100} />
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere ref={sphereRef} args={[2, 64, 64]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#22b7bb"
            attach="material"
            distort={0.3}
            speed={2}
            roughness={0}
            metalness={0.9}
          />
        </Sphere>
      </Float>
    </group>
  );
}