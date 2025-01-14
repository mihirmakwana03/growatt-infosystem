import React, { useRef } from 'react'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

const Scene = () => {
    let tex = useTexture("./image.jpg")
    let cyl = useRef(null)
    useFrame((state, delta) => {
        cyl.current.rotation.y += delta;
    })
    return (
        <group rotation={[0, 1.5, 0.5]}>
            <mesh ref={cyl}>
                <cylinderGeometry args={[2, 2, 2, 60, 60, true]} />
                <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
            </mesh>
        </group>
    )
}

export default Scene
