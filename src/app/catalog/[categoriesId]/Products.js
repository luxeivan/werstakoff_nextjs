import React from 'react'
import { Button, Card, Divider, Flex, Image } from 'antd';
import axios from 'axios';
import Title from 'antd/es/typography/Title';
import Link from 'next/link';
import Text from 'antd/es/typography/Text';
import Meta from 'antd/es/card/Meta';
import ButtonAddBasket from '@/component/ui/catalog/ButtonAddBasket';

export default async function Products({productList}) {
    
    if (productList.length > 0) {

        return (
            <>
                <Title level={1}>Продукция</Title>
                <Flex gap={20} wrap="wrap">
                    {productList.map(item =>
                        <Link
                            href={`/product/${item.ID}`}
                            key={item.ID}
                            style={{ display: "block", width: item.bigCard ? "calc(50% - 20px)" : "calc(25% - 20px)", }}
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
        )
    }
}
