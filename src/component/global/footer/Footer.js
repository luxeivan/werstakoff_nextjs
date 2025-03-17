import { Divider, Flex, Image } from 'antd'
import React from 'react'
import Container from '../Container'
import Text from 'antd/es/typography/Text'
import cardsImage from '@/img/footer/cards.webp'
import dayjs from 'dayjs'

export default function Footer() {
  return (
    <Container>
      <Divider style={{margin:0}}/>
      <Flex justify='space-between' style={{ padding: 20 }}>
        <Flex gap={50}>
          <Text>Москва ©{dayjs().format('YYYY')} Верстакофф ®</Text>
          <Text>Разработка сайта — Шишкин Иван</Text>
        </Flex>
        <div>
          <Image src={cardsImage.src} alt="logo" style={{ height: 29 }} />
        </div>
      </Flex>

    </Container>
  )
}
