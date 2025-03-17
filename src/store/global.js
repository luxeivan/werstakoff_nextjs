import { create } from 'zustand'

const useGlobal = create((set) => ({
  transparent: false,
  setTransparent: (transparent) => set({ transparent }),
}))
export default useGlobal