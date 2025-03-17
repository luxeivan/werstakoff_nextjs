
import Title from 'antd/es/typography/Title'
import React from 'react'
import { Skeleton } from 'antd'
import Container from '@/component/global/Container'

export default function About() {
    return (
        <Container>
            <Title style={{ textAlign: "center" }}>Компания</Title>
            <Skeleton />
        </Container>
    )
}
