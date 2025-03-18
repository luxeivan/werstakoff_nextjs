import React from 'react'
import { Button, Card, Divider, Flex, Image } from 'antd';
import axios from 'axios';
import Title from 'antd/es/typography/Title';
import Text from 'antd/es/typography/Text';
import Link from 'next/link';



export default async function Categories({categoryList}) {
  
  if (categoryList.data.length > 0) {

    return (
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
                  height: "100%",
                  backgroundColor: item.backgroundColor || "#3A75D3",
                  color: "#fff"
                }}
                cover={
                  <div style={{ height: 300, backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: "center", backgroundImage: `url(${item.PREVIEW_PICTURE ? item.PREVIEW_PICTURE : 'https://avatars.mds.yandex.net/get-mpic/3927667/2a000001901c8fe9c83b5edca1a9fe1319b4/orig'})` }}>
                  </div>
                }
              >
                <Title style={{ color: "#fff" }} level={2} >{item.NAME}</Title>
              </Card>
            </Link>
          )}
        </Flex>
      </>
    )
  } else {
    return false
  }
}