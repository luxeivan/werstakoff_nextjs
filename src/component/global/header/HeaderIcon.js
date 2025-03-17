'use client'
import useGlobal from '@/store/global'
import { Flex, Input } from 'antd'
import Link from 'next/link'
import React, { useEffect } from 'react'
import styles from './header.module.css'

export default function HeaderIcon() {
    const { transparent } = useGlobal(store => store)
    useEffect(() => {
        console.log(transparent)
    }, [transparent])
    // console.log(styles)
    return (
        <Flex justify='space-between' align='center' gap={20}>
            <Input placeholder="Поиск" />
            <Link href={'#'}>
                <svg className={transparent ? styles.icon_transparent : styles.icon} width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.1837 18.345V16.6493V16.6493C16.1837 14.7763 14.6652 13.2578 12.7922 13.2578C11.4315 13.2578 10.0934 13.2578 9.70902 13.2578C9.16664 13.2578 7.89795 13.2578 6.62598 13.2578C4.75289 13.2578 3.23438 14.7762 3.23438 16.6493V16.6493V18.345" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9.71388 9.86108C11.5018 9.86108 12.9512 8.34267 12.9512 6.4696C12.9512 4.59654 11.5018 3.07812 9.71388 3.07812C7.92596 3.07812 6.47656 4.59654 6.47656 6.4696C6.47656 8.34267 7.92596 9.86108 9.71388 9.86108Z" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </Link>
            <Link href={'#'}>
                <svg className={transparent ? styles.icon_transparent : styles.icon} width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.56765 16.8459C7.16083 14.4391 2.03125 10.9357 2.03125 7.09541C2.03125 4.79445 3.53159 3.03229 5.65598 3.03229C7.4086 3.03229 8.44424 4.1069 9.56766 5.45279C10.6912 4.1068 11.7269 3.03125 13.4796 3.03125C15.6042 3.03125 17.1046 4.79354 17.1046 7.09467C17.1046 10.9352 11.9747 14.4389 9.56765 16.8459Z" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </Link>
            <Link href={'#'}>
                <svg className={transparent ? styles.icon_transparent : styles.icon} width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_200_7678)">
                        <path d="M7.01345 17.3316C7.44371 17.3316 7.79252 16.9828 7.79252 16.5525C7.79252 16.1222 7.44371 15.7734 7.01345 15.7734C6.58318 15.7734 6.23438 16.1222 6.23438 16.5525C6.23438 16.9828 6.58318 17.3316 7.01345 17.3316Z" fill="#D9D9D9" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15.5838 17.3316C16.014 17.3316 16.3628 16.9828 16.3628 16.5525C16.3628 16.1222 16.014 15.7734 15.5838 15.7734C15.1535 15.7734 14.8047 16.1222 14.8047 16.5525C14.8047 16.9828 15.1535 17.3316 15.5838 17.3316Z" fill="#D9D9D9" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M0.78125 0.96875H3.89753L5.98544 11.4005C6.05668 11.7592 6.25181 12.0814 6.53667 12.3107C6.82153 12.54 7.17796 12.6618 7.54358 12.6548H15.1161C15.4818 12.6618 15.8382 12.54 16.1231 12.3107C16.4079 12.0814 16.603 11.7592 16.6743 11.4005L17.9208 4.8641H4.6766" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_200_7678">
                            <rect width="18.6977" height="18.6977" transform="translate(0 0.1875)" />
                        </clipPath>
                    </defs>
                </svg>
            </Link>
        </Flex>
    )
}
