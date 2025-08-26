import { create } from 'zustand'

export const useSlideStore = create((set)=>({
    currentIndex: 0,
    totalItems: 6,

    next:()=>set((state)=>({
        currentIndex: (state.currentIndex + 1) % state.totalItems
    })),
    prev:()=> set((state)=>({
        currentIndex:(state.currentIndex -1 + state.totalItems)% state.totalItems
    }))
}))


