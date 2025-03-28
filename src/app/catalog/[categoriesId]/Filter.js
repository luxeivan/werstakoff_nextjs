'use client'
import { Button, Form, Checkbox } from 'antd';
// import Checkbox from 'antd/es/checkbox/Checkbox';
// import Radio from 'antd/es/radio/radio';
import React from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const { Group } = Checkbox
const { Item } = Form

export default function Filter({ filterData }) {
    const pathname = usePathname();
    const { replace } = useRouter();
    // const searchParams = useSearchParams();
    // console.log(filterData)
    const onFinish = (values) => {
        const params = new URLSearchParams();
        // console.log(values);
        for (let key in values) {
            if (values[key] && values[key].length > 0) {
                params.set(key, Array.isArray(values[key]) ? values[key].join('|') : values[key])
            }
        }
        replace(`${pathname}?${params.toString()}`);
    }
    return (
        <Form
            name="filter"
            onFinish={onFinish}
            style={{
                width: "100%",
            }}
            layout='vertical'
        >
            <Item>
                <Button type='primary' htmlType='submit'>Показать</Button>
            </Item>
            {filterData.map((item, index) =>
                <Item key={index} name={item.label} label={item.label}>
                    <Group options={Array.from(item.value)} />
                    {/* {Array.from(item.value).map((val, index) =>
                            <Checkbox
                                key={index}
                                value={val}
                                style={{
                                    lineHeight: '32px',
                                }}
                            >
                                {val}
                            </Checkbox>
                        )} */}

                </Item>)}
            <Item>
                <Button type='primary' htmlType='submit'>Показать</Button>
            </Item>
        </Form>
    )
}
