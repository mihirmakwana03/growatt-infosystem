import React from 'react'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

const Scene = () => {
    let tex = useTexture("./image.jpg")
    return (
            <mesh>
                <cylinderGeometry args={[1, 1, 1, 30, 30, true]} />
                <meshStandardMaterial map={tex} side={THREE.DoubleSide} />
            </mesh>
    )
}

export default Scene
