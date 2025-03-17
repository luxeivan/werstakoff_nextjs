import { useGLTF } from '@react-three/drei'
import React from 'react'

export default function Self() {
    const { nodes, scene, materials } = useGLTF("./model/self/scene.gltf")
    console.log(scene)
    // scene.scale.set([0.15, 0.15, 0.15])
    return (
        <group castShadow receiveShadow position={[1,1,1]}>
            <primitive object={scene}/>
        </group>

    )
}
