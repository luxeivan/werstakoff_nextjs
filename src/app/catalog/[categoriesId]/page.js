import React, { Suspense } from 'react'
import { strapi } from '@strapi/client';
// import { redirect } from 'next/navigation'
import Title from 'antd/es/typography/Title';
import Text from 'antd/es/typography/Text';
import { Button, Card, Divider, Flex, Image } from 'antd';
import Meta from 'antd/es/card/Meta';
import Container from '@/component/global/Container';
import Link from 'next/link';
import axios from 'axios';
import ButtonAddBasket from '@/component/ui/catalog/ButtonAddBasket';
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
    const categoryList = await axios(`${process.env.WERSTAKOFF_SERVER}/api/catalogs.php?category=${categoriesId || "0"}`)
    // const client = strapi({ baseURL: process.env.WERSTAKOFF_SERVER + '/api' });
    // const categories = client.collection('categories');
    // const categoryList = await categories.find({
    //     sort: 'sort',
    //     populate: '*',
    //     filters: {
    //         parentCategory: {
    //             $null: categoriesId ? undefined : true,
    //             documentId: categoriesId ? {
    //                 $eq: categoriesId,
    //             } : undefined
    //         }

    //     }

    // });
    const productList = await axios(`${process.env.WERSTAKOFF_SERVER}/api/products.php?category=${categoriesId || "0"}`)

    // const products = client.collection('products');
    // const productList = await products.find({
    //     sort: 'sort',
    //     populate: '*',
    //     filters: {
    //         categories: {
    //             documentId: {
    //                 $in: categoriesId,
    //             }
    //         }
    //     }

    // });
    // console.log("productList", productList)
    return (
        <Container>
            <Title level={1} style={{ textAlign: "center" }}>Каталог</Title>
            <Suspense fallback={<div>Loading...</div>}>
                {categoryList.data.length > 0 &&
                    <>
                        <Title level={1}>Категории</Title>
                        <Flex wrap="wrap" style={{ width: "calc(100% + 30px)" }}>
                            {categoryList.data.map(item =>
                                <Link
                                    href={`/catalog/${item.ID}`}
                                    style={{ display: "block", margin: "0 15px 30px 15px", width: item.bigCard ? "calc(50% - 30px)" : "calc(25% - 30px)", }}
                                    key={item.ID}
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
                                            <div style={{ height: 300, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center", backgroundImage: `url(${item.PREVIEW_PICTURE ? item.PREVIEW_PICTURE : 'https://avatars.mds.yandex.net/get-mpic/3927667/2a000001901c8fe9c83b5edca1a9fe1319b4/orig'})` }}>

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
                                        <Title style={{ color: "#fff" }} level={2} >{item.NAME}</Title>
                                        {/* <Meta style={{ color: "#fff" }} title={item.name} description={item.shortDescription} /> */}
                                    </Card>
                                </Link>
                            )}
                        </Flex>
                    </>
                }
            </Suspense>
            {categoryList.data.length > 0 && productList.data.length > 0 && <Divider />}
            {productList.data.length > 0 &&
                <>
                    <Title level={1}>Продукция</Title>
                    <Flex gap={20} wrap="wrap">
                        {productList.data.map(item =>
                            <Link
                                href={`/product/${item.ID}`}
                                key={item.ID}
                                style={{ display: "block", width: item.bigCard ? "calc(50% - 10px)" : "calc(25% - 10px)", }}
                            >
                                <Card
                                    key={item.ID}
                                    hoverable
                                    style={{ backgroundColor: "#f4f4f4" }}
                                    cover={
                                        <div style={{ height: 300, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center", backgroundImage: `url(${item.PREVIEW_PICTURE ? item.PREVIEW_PICTURE : 'https://avatars.mds.yandex.net/get-mpic/3927667/2a000001901c8fe9c83b5edca1a9fe1319b4/orig'})` }}>
                                        </div>
                                    }

                                >
                                    <Flex vertical gap={10}>

                                        <Text style={{ fontWeight: 700, fontSize: 16 }}>{item.CATALOG_PRICE_1} {item.CATALOG_CURRENCY_1}</Text>
                                        <Meta title={item.NAME} description={item.shortDescription} />
                                        <ButtonAddBasket id={item.ID} />
                                    </Flex>
                                </Card>
                            </Link>
                        )}

                    </Flex>
                </>
            }
            {categoryList.data.length == 0 && productList.data.length == 0 && <Text>Чтото пошло не так...</Text>}
        </Container >
    )
}
