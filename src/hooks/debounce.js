import { useRef } from 'react'

const useDebounce = () => {
    const timeoutRef =useRef()
    const debounce = (func, delay=300)=>{
        clearTimeout(timeoutRef.current)
        console.log(delay);
        timeoutRef.current = setTimeout(() => {
            func()
        }, delay);
    }
  return debounce
}

export default useDebounce