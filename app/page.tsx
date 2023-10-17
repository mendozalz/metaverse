'use client'

import { Canvas } from "@react-three/fiber";
import { Experience } from "../components/Experience";
import { KeyboardControls, KeyboardControlsEntry } from "@react-three/drei";

export type Controls = "atras" | "adelante" | "izquierda" | "derecha"

export default function Home(){
  const map: KeyboardControlsEntry<Controls>[]=[
    {name:"adelante", keys:["ArrowUp", "KeyW"]},
    {name:"atras", keys:["ArrowDown", "KeyA"]},
    {name:"izquierda", keys:["ArrowLeft", "KeyA"]},
    {name:"derecha", keys:["ArrowRight", "KeyD"]},
  ]
  return (
  <main className="h-screen">
      <Canvas shadows camera={{position:[0,1,2]}}>
      <KeyboardControls map={map}>
      <Experience/>
      </KeyboardControls>
      </Canvas>
  </main>
  )
}