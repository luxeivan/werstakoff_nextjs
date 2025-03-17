'use client'
import useBasket from '@/store/basket';
import { Button, Modal } from 'antd'
import React, { useEffect, useState } from 'react'

export default function ButtonAddBasket({ id }) {
    const { basket, addBasket } = useBasket(state => state)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [countInBasket, setCountInBasket] = useState(false);
     
    useEffect(()=>{
        setCountInBasket(basket.filter(item=>item === id).length)
    },[basket])
    const addToBasket = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsModalOpen(true)
        addBasket(id)
        return false
    }
    const handlerOpenCloseModal = (e) => {
        setIsModalOpen(false)
    }
    return (
        <>
            <Button disabled={countInBasket} type='primary' onClick={addToBasket}>{countInBasket?"В корзинe":"В корзину"}</Button>
            <Modal title="Корзина" open={isModalOpen} onOk={handlerOpenCloseModal} onCancel={handlerOpenCloseModal}>
                Товар с ID: <span style={{ fontWeight: 700 }}>{id}</span> добавлен в корзину
            </Modal>
        </>
    )
}
