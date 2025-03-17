'use client'
import { Craft } from "@/component/models/Craft";
import Experience from "@/component/Experience";
import Proffi1 from "@/component/models/Proffi1";
import ProffiNew from "@/component/models/ProffiNew";
import { AccumulativeShadows, Box, CameraControls, DragControls, Environment, Grid, Line, MeshReflectorMaterial, OrbitControls, PivotControls, RandomizedLight, Select, Text, Text3D, Trail, TransformControls, useIntersect, useSelect } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";
import { useEffect, useRef, useState } from "react";
import useGlobal from "../../store/global";
import { CuboidCollider, MeshCollider, Physics, RigidBody } from "@react-three/rapier";
import Self from "@/component/models/Self";

export default function App() {
    const { test, removeAllBears, increasePopulation } = useGlobal(store => store)
    const box = useRef()
    // const box = useIntersect((visible)=>{console.log(visible)})
    const [selectObject, setSelectObject] = useState(null)
    const selected = useSelect()
    const [cameraControlEnable, setCameraControlEnable] = useState(true)
    const [dragControlEnable, setDragControlEnable] = useState(true)

    useEffect(() => {
        // console.log("selectObject: ", selectObject)
        // console.log("selected: ", selected)
    }, [selectObject, selected])
    useEffect(() => {
        // console.log("box: ", box)
    }, [box])
    return (
        <>

            <Canvas shadows camera={{ position: [10, 0, 10], fov: 35 }}>
                {/* <fog near={0.2} far={2} /> */}

                <OrbitControls
                    maxPolarAngle={1.5}
                    enabled={cameraControlEnable}
                    makeDefault
                />
                {/* <Grid/> */}
                <ambientLight intensity={3} />
                <directionalLight intensity={1} castShadow position={[10, 10, 10]} />
                {/* <Select
                onChange={(select) => setSelectObject(select)}
                box
                > */}
                <Physics debug>


                    <DragControls axisLock="y">
                        <RigidBody type="fixed" onCollisionEnter={event => console.log(event)} colliders="cuboid">
                            <Box position={[2, 0.5, 3]} >
                                <meshNormalMaterial />
                            </Box>
                            <CuboidCollider args={[1, 1, 1]} sensor onIntersectionEnter={(event) => console.log(event)} />
                        </RigidBody>
                    </DragControls>



                    <DragControls axisLock="y">
                        <RigidBody type="fixed" onCollisionEnter={event => console.log(event)} colliders="cuboid">
                            <Box position={[0, 0.5, 3]} >

                                <meshStandardMaterial />
                            </Box>
                            <CuboidCollider args={[1, 1, 1]} sensor onIntersectionEnter={(event) => console.log(event)} />
                        </RigidBody>
                    </DragControls>
                </Physics>


                {/* <ProffiNew/>   */}
                {/* <Line
                points={[[0, 0, 0], [2, 2, 2]]}       // Array of points, Array<Vector3 | Vector2 | [number, number, number] | [number, number] | number>
                color="black"                   // Default
                lineWidth={3}                   // In pixels (default)
                segments                        // If true, renders a THREE.LineSegments2. Otherwise, renders a THREE.Line2
                dashed={false}                  // Default
            // vertexColors={[[0, 0, 0], ...]} // Optional array of RGB values for each point
            
            /> */}
                <PivotControls axisLock="y">

                    <Proffi1 position={[0, 0, -5]} />

                </PivotControls>
                {/* <DragControls>
                        <Self />
                    </DragControls> */}
                {/* <Text3D font="https://drei.pmnd.rs/fonts/helvetiker_regular.typeface.json" smooth={1} lineHeight={0.5} letterSpacing={-0.025} position={[0,2,0]}>{`hello\nworld`} <meshNormalMaterial/></Text3D> */}

                {/* <DragControls axisLock="y" onDragStart={() => setCameraControlEnable(false)} onDragEnd={() => setCameraControlEnable(true)} >
                    <Proffi1 />
                    </DragControls> */}
                {/* <PivotControls
                    disableScaling
                    activeAxes={[true, false, true]}
                    >
                    <Craft />
                    </PivotControls> */}


                {/* <TransformControls mode="rotate" axis="xzy" showX={false} showZ={false} position={[0, 0.5, 3]}>
                </TransformControls> */}
                {/* </Select> */}
                {/* <Text3D color="black" anchorX="center" anchorY="bottom"  rotateY={90}>
                Верстакофф
                <meshNormalMaterial />
                </Text3D> */}



                <Box args={[170, 10, 170]} position={[0, -5, 0]} receiveShadow>

                    <MeshReflectorMaterial
                        blur={[300, 100]}
                        resolution={1024}
                        // mixBlur={1}
                        // mixStrength={40}
                        // roughness={1}
                        depthScale={1.2}
                        // minDepthThreshold={0.4}
                        // maxDepthThreshold={1.4}
                        color={"#101010"}
                        transparent={.1}
                        metalness={0}
                    />
                </Box>

                <Environment preset="city" />
            </Canvas>
        </>
    )
}