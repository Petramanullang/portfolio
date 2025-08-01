"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"

function Cube() {
  const meshRef = useRef(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color="white" wireframe={true} />
    </mesh>
  )
}

export function RotatingCube() {
  return (
    <Canvas camera={{ position: [0, 0, 3] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 1, 1]} intensity={1} />
      <Cube />
      <OrbitControls enableZoom={false} enablePan={false} />
      <Environment preset="warehouse" /> {/* Using a simple environment preset */}
    </Canvas>
  )
}
