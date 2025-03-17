import Container from '@/component/global/Container';
import { strapi } from '@strapi/client';
import { Button, Descriptions, Flex, Image } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
import Text from 'antd/es/typography/Text';
import Title from 'antd/es/typography/Title';
import axios from 'axios';
import React from 'react'

export const revalidate = 60
const products = strapi({ baseURL: process.env.BACK_SERVER + '/api' }).collection('products');
const getProduct = async (productId) => {
    return await products.findOne(productId, {
        populate: '*'
    });
}

export const metadata = {
    title: "Верстакофф - ",
    description: "Верстакофф - производитель металлической мебели и верстаков. Официальный сайт в г. Москва",
};


export default async function page({ params }) {
    const { productId } = await params
    if (!productId) {
        return false
    }
    // const client = strapi({ baseURL: process.env.BACK_SERVER + '/api' });
    // const products = client.collection('products');
    // const product = (await getProduct(productId)).data
    // const product = await products.findOne(productId, {
    //     populate: '*'
    // });
    const product = (await axios(`${process.env.WERSTAKOFF_SERVER}/api/product.php?product=${productId || "0"}`))?.data
    const productProperties = []
    for (let key in product.properties) {
        
        if (product.properties.hasOwnProperty(key)) {
            console.log(typeof product.properties[key]);
            if (typeof product.properties[key] !== 'object' && !Array.isArray(product.properties[key])) {
                productProperties.push({ label: key, value: product.properties[key] })
            }
        }
    }
    console.log("productProperties", productProperties);
    return (
        <Container>
            <div>
                <Title level={1} style={{ textAlign: "center" }}>Продукция</Title>
                <Title level={2}>{product?.NAME}</Title>
                <Text s>Артикул: {product.properties['Артикул']}</Text>
                <Flex style={{ width: "100%" }} gap={20} justify='space-between' wrap='wrap'>
                    <Flex gap={20}>
                        <Flex gap={10} vertical>
                            {product.properties['Галерея изображений']?.map((item, index) =>
                                <Image key={index} width={100} src={item} />
                            )}
                        </Flex>
                        <Image width={400} src={product.properties['Галерея изображений'][0]} />
                    </Flex>
                    <div style={{ flex: 1 }}>
                        <Title level={3}><span style={{ fontSize: 14, color: "#888" }}>Цена:</span> {product.CATALOG_PRICE_1} {product.CATALOG_CURRENCY_1}</Title>
                        <Button type='primary'>В корзину</Button>
                        <Descriptions title="Свойства" column={1} bordered>
                            {productProperties.map((item, index) =>
                                <Descriptions.Item key={index} label={item.label}>{item.value}</Descriptions.Item>
                            )}
                        </Descriptions>
                    </div>
                    <Paragraph>{product.DETAIL_TEXT}</Paragraph>
                </Flex>
            </div>
        </Container>
    )
}
