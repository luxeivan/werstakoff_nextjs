'use client'
import { Button, Modal } from 'antd'
import React, { useState } from 'react'

export default function ButtonAddBasket({ id }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handlerOpenCloseModal = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsModalOpen(!isModalOpen)
        return false
    }
    return (
        <>
            <Button type='primary' onClick={handlerOpenCloseModal}>В корзину</Button>
            <Modal title="Корзина" open={isModalOpen} onOk={handlerOpenCloseModal} onCancel={handlerOpenCloseModal}>
                Товар с ID: <span style={{fontWeight:700}}>{id}</span> добавлен в корзину
            </Modal>
        </>
    )
}
