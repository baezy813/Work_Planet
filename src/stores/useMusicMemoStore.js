import { create } from "zustand";

export const useMemoStore = create((set)=>({
    memos:[],

    addMemo: (text)=>
        set((state)=>({
            memos:[...state.memos, {id:Date.now(), text}],
        })),

    updateMemo: (id, newText)=>
        set((state)=>({
            memos: state.memos.map((m)=> 
                m.id === id ? {...m, text:newText} : m
             )
        })),

    deleteMemo : (id)=>
        set((state)=>({
            memos: state.memos.filter((m)=> m.id !==id),
        }))
}))


