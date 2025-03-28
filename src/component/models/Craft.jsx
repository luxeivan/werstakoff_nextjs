/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 .\public\model\newCraft\craft.gltf 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Craft(props) {
  const { nodes, materials } = useGLTF('/model/newCraft/craft.gltf')
  return (
    <group >
      <mesh geometry={nodes.Plane782.geometry} material={materials.prf_toumb_blue_material} position={[0,0,0]}/>
      <mesh geometry={nodes.Plane782_1.geometry} material={materials.metal} />
      <mesh geometry={nodes.Plane782_2.geometry} material={materials.pColor_perfopanels} />
      <mesh geometry={nodes.Plane782_3.geometry} material={materials.wood_material} />
    </group>
  )
}

useGLTF.preload('/model/newCraft/craft.gltf')
