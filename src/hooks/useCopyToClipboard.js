import { useState } from 'react'

export const useCopyToClipboard = ()=>{
    const [copied, setCopied] = useState(false)

    const copy = async(text)=>{
        try{
        await navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(()=>{
            setCopied(false)
        }, 2500)
        }catch(err){
            console.err('복사 실패', err)
        }
    }
    return {copied, copy}
        
}