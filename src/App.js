import { Canvas } from '@react-three/fiber'
import React from 'react'
import "./style.css"
import { OrbitControls } from '@react-three/drei'
import Scene from './components/scene'

const App = () => {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight />
      <Scene />
    </Canvas>
  )
}

export default App
