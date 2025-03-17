
import Title from 'antd/es/typography/Title'
import React from 'react'
import { Skeleton } from 'antd'
import Container from '@/component/global/Container'
import Paragraph from 'antd/es/typography/Paragraph'

export default function Configurator() {
    return (
        <Container>
            <Title style={{ textAlign: "center" }}>Конфигуратор</Title>
            <Paragraph>
                Здесь будет ваш конфигуратор...
            </Paragraph>
        </Container>
    )
}
