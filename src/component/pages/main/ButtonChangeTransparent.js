'use client'
import useGlobal from '@/store/global'
import { Button } from 'antd'
import React from 'react'

export default function ButtonChangeTransparent() {
    const { transparent, setTransparent } = useGlobal(store => store)
    const handlerChangeTransparent = () => {
        setTransparent(!transparent)
    }
    return (
        <Button onClick={handlerChangeTransparent}>Изменить прозрачность</Button>
    )
}
