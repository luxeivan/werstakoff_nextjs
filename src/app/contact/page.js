
import Title from 'antd/es/typography/Title'
import React from 'react'
import { Skeleton } from 'antd'
import Container from '@/component/global/Container'

export default function Contact() {
    return (
        <Container>
            <Title style={{ textAlign: "center" }}>Контакты</Title>
            <Skeleton />
        </Container>
    )
}
