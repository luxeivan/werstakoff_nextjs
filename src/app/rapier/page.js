'use client'
import { Box, CameraControls, DragControls, Environment, OrbitControls, Sphere, Torus } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Physics, RigidBody } from '@react-three/rapier'
import React, { useState } from 'react'

export default function page() {
    const [position, setPosition] = useState([1, 1, 1])
    return (
        <>
            <div>
                <button onClick={() => setPosition(prev => ([prev[0] + 0.1, prev[1], prev[2]]))}>Right</button>
                <button onClick={() => setPosition(prev => ([prev[0] - 0.1, prev[1], prev[2]]))}>Left</button>
            </div>
            <Canvas shadows camera={{ position: [10, 0, 10], fov: 35 }}>
                <OrbitControls makeDefault />
                <ambientLight intensity={3} castShadow/>
                <directionalLight intensity={1} castShadow position={[10, 10, 10]} />

                <Physics debug>
                    <DragControls axisLock="y">
                        <RigidBody position={position}>
                            <Box castShadow receiveShadow position={[1,0,0]}>
                                <meshBasicMaterial color="red" />
                            </Box>
                        </RigidBody>
                    </DragControls>
                    <RigidBody colliders="ball" position={[1,0,2]}>
                        <Sphere castShadow receiveShadow>
                            <meshNormalMaterial />
                        </Sphere>
                    </RigidBody>
                    <RigidBody colliders="trimesh">
                        <Torus receiveShadow castShadow>
                            <meshNormalMaterial />
                        </Torus>
                    </RigidBody>
                    <RigidBody type='fixed' friction={2}>
                        <Box args={[100, 5, 100]} position={[0, -5, 0]} receiveShadow>
                            <meshBasicMaterial color="gray" />
                        </Box>
                    </RigidBody>
                </Physics>
                <Environment preset="forest" />
            </Canvas>
        </>
    )
}
