"use client"
import { useCallback, useRef, useEffect, MouseEventHandler } from "react"
import { useRouter } from "next/navigation"

export default function Modal({children}:{children:React.ReactNode}) {
    const overlay = useRef(null) 
    const wrapper = useRef(null)
    const router = useRouter()
    const onDismiss = useCallback(() => {
        router.back()
    },[router])
    const onClick: MouseEventHandler = useCallback((e)=>{
        if (e.target === overlay.current || e.target === wrapper.current){
            if(onDismiss) onDismiss()
        }
    },[onDismiss, overlay, wrapper])
    return(
        <div onClick={onDismiss}
             style={{backgroundColor:"rgba(0,0,0,0.5)",width:"100%",minHeight:"100%", position:"absolute",top:"0px", display:"flex", justifyContent:"center", cursor:"pointer"}}>
            <div style={{width:"500px", alignSelf:"center"}}>{children}</div>
        </div>
    )
};
