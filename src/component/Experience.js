'use client'
import { MeshReflectorMaterial, OrbitControls, PresentationControls, Stage } from '@react-three/drei'
import Proffi1 from './models/Proffi1.jsx'

export default function Experience() {
    return (
        <>
        
            <Stage adjustCamera intensity={0.5} shadows="contact" environment="city">
                <mesh />
            </Stage>
            {/* <mesh position={[0, 0, 0]} castShadow receiveShadow>
                <boxGeometry args={[1, 1, 1]} />
                <meshNormalMaterial />
            </mesh> */}

            {/* <OrbitControls enablePan={true} maxPolarAngle={1.5} dampingFactor={0.2} minDistance={2} maxDistance={100}/>
            <mesh position={[10,5,10]} castShadow receiveShadow>
            <sphereGeometry args={[5,32,32]} />
            <meshStandardMaterial />
            </mesh> */}
            <Proffi1 />
            {/* <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                <planeGeometry args={[170, 170]} />
                <MeshReflectorMaterial
                    // blur={[300, 100]}
                    // resolution={2048}
                    // mixBlur={1}
                    // mixStrength={40}
                    // roughness={1}
                    // depthScale={1.2}
                    // minDepthThreshold={0.4}
                    // maxDepthThreshold={1.4}
                    color={"#101010"}
                // metalness={0.5}
                />
            </mesh> */}
        
        </>

    )
}
