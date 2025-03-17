import React from 'react'
import { strapi } from '@strapi/client';
import Title from 'antd/es/typography/Title';
import { Card, Divider, Flex, Image } from 'antd';
import Meta from 'antd/es/card/Meta';
import Container from '@/component/global/Container';
import Link from 'next/link';
// import Image from 'next/image';

export const revalidate = 60

export const metadata = {
    title: "Верстакофф - каталог",
    description: "Верстакофф - производитель металлической мебели и верстаков. Официальный сайт в г. Москва",
};


export default async function Catalog({ params }) {
    let { categoriesId } = await params
    if (categoriesId === "main") categoriesId = null
    // console.log("categoriesId", categoriesId)

    const client = strapi({ baseURL: process.env.BACK_SERVER + '/api' });
    const categories = client.collection('categories');
    const categoryList = await categories.find({
        sort: 'sort',
        populate: '*',
        filters: {
            parentCategory: {
                $null: categoriesId ? undefined : true,
                documentId: categoriesId ? {
                    $eq: categoriesId,
                } : undefined
            }

        }

    });

    const products = client.collection('products');
    const productList = await products.find({
        sort: 'sort',
        populate: '*',
        filters: {
            categories: {
                documentId: {
                    $in: categoriesId,
                }
            }
        }

    });
    console.log("categoryList", categoryList)
    return (
        <Container>
            <Title level={1} style={{textAlign:"center"}}>Каталог</Title>
            <Title level={1}>Категории</Title>
            <Flex wrap="wrap" style={{ width: "calc(100% + 30px)" }}>
                {categoryList.data.map(item =>
                    <Link
                        href={`/catalog/${item.documentId}`}
                        style={{ display: "block", margin: "0 15px 30px 15px", width: item.bigCard ? "calc(50% - 30px)" : "calc(25% - 30px)", }}
                        key={item.id}
                    >
                        <Card
                            hoverable
                            styles={{ cover: { padding: 20, display: "flex", justifyContent: "center" } }}
                            style={{
                                // width: 300,
                                height: "100%",
                                // maxHeight: 300,
                                backgroundColor: item.backgroundColor || "#3A75D3",
                                color: "#fff"
                            }}
                            cover={
                                <div style={{ height: 300, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center", backgroundImage: `url(${item.image ? process.env.BACK_SERVER + item.image?.url : 'https://avatars.mds.yandex.net/get-mpic/3927667/2a000001901c8fe9c83b5edca1a9fe1319b4/orig'})` }}>

                                    {/* <img
                                    preview={false}
                                    style={{ textAlign: "center", }}
                                    // width={300}
                                    // height={300}
                                    alt="example"
                                    src={item.image ? `${process.env.BACK_SERVER}${item.image?.url}` : 'https://avatars.mds.yandex.net/get-mpic/3927667/2a000001901c8fe9c83b5edca1a9fe1319b4/orig'} /> */}
                                </div>
                            }
                        >
                            <Title style={{ color: "#fff" }} level={2} >{item.name}</Title>
                            {/* <Meta style={{ color: "#fff" }} title={item.name} description={item.shortDescription} /> */}
                        </Card>
                    </Link>
                )}

            </Flex>
            {productList.data.length > 0 &&
                <>
                    <Divider />
                    <Title level={1}>Продукция</Title>
                    <Flex gap={20} wrap="wrap">
                        {productList.data.map(item =>
                            <Link
                                href={`/product/${item.documentId}`}
                                key={item.id}
                                style={{ display: "block", width: item.bigCard ? "calc(50% - 10px)" : "calc(25% - 10px)", }}
                            >
                                <Card
                                    hoverable
                                    style={{
                                        // width: "calc(25% - 10px)",
                                    }}
                                    cover={
                                        <div style={{ height: 300, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center", backgroundImage: `url(${item.images ? process.env.BACK_SERVER + item.images[0].url : 'https://avatars.mds.yandex.net/get-mpic/3927667/2a000001901c8fe9c83b5edca1a9fe1319b4/orig'})` }}>

                                            {/* <img
                                        preview={false}
                                        style={{ textAlign: "center", }}
                                        // width={300}
                                        // height={300}
                                        alt="example"
                                        src={item.image ? `${process.env.BACK_SERVER}${item.image?.url}` : 'https://avatars.mds.yandex.net/get-mpic/3927667/2a000001901c8fe9c83b5edca1a9fe1319b4/orig'} /> */}
                                        </div>
                                        // <img alt="example" src={item.images ? `${process.env.BACK_SERVER}${item.images[0]?.formats?.small?.url}` : 'https://avatars.mds.yandex.net/get-mpic/3927667/2a000001901c8fe9c83b5edca1a9fe1319b4/orig'} />
                                    }
                                >
                                    <Meta title={item.name} description={item.shortDescription} />
                                </Card>
                            </Link>
                        )}

                    </Flex>
                </>
            }
        </Container>
    )
}
