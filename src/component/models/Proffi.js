import { useGLTF } from '@react-three/drei'
import React from 'react'

export default function Proffi() {
    const { nodes, scene, materials } = useGLTF("./model/proffi/scene.gltf")
    
    scene.scale.set([0.15, 0.15, 0.15])
    return (
        <group castShadow receiveShadow>
            <primitive object={scene} />
        </group>
       
    )
}
