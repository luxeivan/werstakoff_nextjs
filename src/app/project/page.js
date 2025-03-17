
import Title from 'antd/es/typography/Title'
import React from 'react'
import { Skeleton } from 'antd'
import Container from '@/component/global/Container'

export default function Project() {
    return (
        <Container>
            <Title style={{ textAlign: "center" }}>Проекты</Title>
            <Skeleton />
        </Container>
    )
}
