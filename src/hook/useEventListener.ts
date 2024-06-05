import { useEffect, useRef } from "react";

function useEventListener(eventType:string, callback:(e:Event)=>void, element:Document) {
    const callbackRef = useRef(callback)
    
    useEffect(()=>{
        callbackRef.current = callback
    }, [callback])
    useEffect(()=>{
        if (element == null) return
        const handler = (e:Event) => callbackRef.current(e)
        element.addEventListener(eventType, handler)
    }, [eventType, element])
}

export default useEventListener