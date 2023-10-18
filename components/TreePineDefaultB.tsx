import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Mesh_tree_pineDefaultB: THREE.Mesh
    Mesh_tree_pineDefaultB_1: THREE.Mesh
  }
  materials: {
    leafsDark: THREE.MeshStandardMaterial
    woodBarkDark: THREE.MeshStandardMaterial
  }
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/assets/models/tree_pineDefaultB.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[3, -0.05, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.Mesh_tree_pineDefaultB.geometry} material={materials.leafsDark} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh_tree_pineDefaultB_1.geometry} material={materials.woodBarkDark} />
      </group>
    </group>
  )
}

useGLTF.preload('/assets/models/tree_pineDefaultB.glb')
