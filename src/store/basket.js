import { create } from 'zustand'

const useBasket = create((set) => ({
    basket: [],
    addBasket: (productId) => set((state) => ({ basket: [...state.basket, productId] })),
    deleteItemBasket: (productId)=>{

    }
}))
export default useBasket