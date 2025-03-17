import { DragControls, Gltf, useSelect } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'

export default function ProffiNew() {
    const selected = useSelect()
    const ref = useRef()
    useEffect(() => {
        console.log("selected", selected);
        console.log("ref", ref);
    }, [selected])
    return (
        <DragControls axisLock="y" >
            <Gltf ref={ref} src='/model/proffi/scene.gltf' />
        </DragControls>
    )
}
