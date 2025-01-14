import { Canvas } from '@react-three/fiber'
import React from 'react'
import "./style.css"
import { OrbitControls } from '@react-three/drei'
import Scene from './components/scene'
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'

const App = () => {
  return (
    <>
      <Canvas flat camera={{ fov: 60 }}>
        {/* <OrbitControls /> */}
        <ambientLight />
        <Scene />
        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={7.0}
            luminanceThreshold={0}
            luminanceSmoothing={0}
          />
          {/* <ToneMapping adaptive /> */}
        </EffectComposer>
      </Canvas>
      <div className='div w-full bg-black py-32'>
        <h1 className='text-white text-center'>Hello World!</h1>
      </div>
    </>
  )
}

export default App
