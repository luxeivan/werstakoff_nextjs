import { Card, Flex, Spin } from 'antd'
import React from 'react'
import Title from 'antd/es/typography/Title';
import Container from '@/component/global/Container';
import { LoadingOutlined } from '@ant-design/icons';

export default function loading() {
    return (
        <Container>
            <Title level={1} style={{ textAlign: "center" }}>Каталог</Title>
            <Flex gap={20} style={{ width: "100%" }} justify='center'>
                {/* {[1, 2, 3, 4].map(item =>
                    <Card
                        style={{ flex: 1 }}
                        key={item}
                        loading={true}
                    ></Card>
                )} */}
                <Spin indicator={<LoadingOutlined style={{ fontSize: 48, }} spin />
                }
                />
            </Flex>
        </Container>
    )
}
