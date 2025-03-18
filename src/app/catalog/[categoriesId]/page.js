import React from 'react'
import { strapi } from '@strapi/client';
import Title from 'antd/es/typography/Title';
import { Flex } from 'antd';
import Container from '@/component/global/Container';
import Categories from './Categories';
import Products from './Products';
import axios from 'axios';
import Filter from './Filter';
// import Image from 'next/image';

export const revalidate = 60

export const metadata = {
    title: "Верстакофф - каталог",
    description: "Верстакофф - производитель металлической мебели и верстаков. Официальный сайт в г. Москва",
};

const filtering = (arr, obj) => {
    if(!Object.keys(obj).length) return arr
    const filterConditions = obj;
    // console.log("obj", obj);
    // console.log("arr", arr);

    const filteredData = arr.filter(item => {
        // console.log(item.properties)
        let temp = false
        for (let key in filterConditions) {
            if(filterConditions[key].includes('|')){
                const tempArr = filterConditions[key].split('|')
                tempArr.forEach(tempItem=>{
                    if(item.properties[key]===tempItem){
                        temp = true
                        return 
                    }
                })
            }else if (item.properties[key] === filterConditions[key]) {
                temp = true
                break
            }
        }
        return temp
    }
    );
    return filteredData
}
export default async function Catalog({ params, searchParams }) {
    let { categoriesId } = await params

    if (categoriesId === "main") categoriesId = null
    const categoryList = await axios(`${process.env.WERSTAKOFF_SERVER}/api/catalogs.php?category=${categoriesId || "0"}`)
    const productList = await axios(`${process.env.WERSTAKOFF_SERVER}/api/products.php?category=${categoriesId || "0"}`)
    const searchObj = await searchParams
    // console.log("searchObj", searchObj);
    const filteringProductList = filtering(productList.data, searchObj)
    console.log("filteringProductList", filteringProductList);
    const filterData = []
    productList.data.forEach(element => {
        for (let key in element.properties) {
            // console.log(key)
            if (
                key === 'Артикул' ||
                key === "Цена (временно)" ||
                key === "Ссылка на 3D" ||
                key === "Видео-обзор (ссылка)" ||
                key === "Видео с рутуба" ||
                key === "Ссылка"
            ) continue
            if (element.properties.hasOwnProperty(key) && !Array.isArray(element.properties[key]) && typeof element.properties[key] !== 'object') {
                let indexInFilter = filterData.findIndex(item => item.label === key)
                if (indexInFilter === -1) {
                    filterData.push({
                        label: key,
                        value: new Set([element.properties[key]])
                    })
                } else {
                    filterData[indexInFilter].value.add(element.properties[key])
                }
            }


        }

    });

    return (
        <Container>
            <Title level={1} style={{ textAlign: "center" }}>Каталог</Title>

            <Categories categoryList={categoryList} />
            <Flex gap={20}>
                <div style={{ flex: 1, minWidth: "25%" }} >
                    <Filter filterData={filterData} />
                </div>
                <div style={{ flex: 1, minWidth: "75%" }}>
                    <Products productList={filteringProductList} />
                </div>
            </Flex>

        </Container >
    )
}
