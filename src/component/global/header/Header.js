import { Carousel, Divider, Flex, Input } from 'antd'
import React from 'react'
import logo from '@/img/header/logo_new.svg'
import Text from 'antd/es/typography/Text'
import Container from '../Container'
import Link from 'next/link'
import styles from './header.module.css'
import HeaderIcon from './HeaderIcon'
// const { Text } = Typography
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
}
const menu = [
    {
        title: "Компания",
        url: "/about"
    },
    {
        title: "Проекты",
        url: "/project"
    },
    {
        title: "Производство",
        url: "/production"
    },
    {
        title: "Видео",
        url: "/video"
    },
    {
        title: "Новости",
        url: "/news"
    },
    {
        title: "Контакты",
        url: "/contact"
    }
]
export default function Header() {  
    
    return (
        <Container>
            <Flex justify='space-between' align='center' gap={20} style={{ padding: 10, width: "100%" }}>
                <Link href={'/'} style={{display:"flex"}}>
                <img src={logo.src} width={177} />
                </Link>
                <HeaderIcon/>
                <Flex justify='space-between' align='center' gap={20}>
                    <a href='#'><Text>Москва</Text></a>
                    <a href='tel:74951501809'><Text>+7 (495) 150-18-09</Text></a>
                </Flex>
            </Flex>
            <Divider style={{ marginBottom: 5, marginTop: 5 }} />
            <Flex justify='space-between' style={{ padding: 10, width: "100%" }}>
                <Flex justify='space-between' gap={20}>
                    <Link href={'/catalog/main'}><Text>Каталог</Text></Link>
                    <Link href={'/configurator'}><Text>Конфигуратор</Text></Link>
                </Flex>
                <Flex justify='space-between' gap={20}>
                    {menu.map((item, index) => <Link key={index} href={item.url}><Text>{item.title}</Text></Link>)}
                </Flex>
            </Flex>
        </Container>
    )
}
