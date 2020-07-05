import {useState}from 'react'

function useCounter() {
    const [count, setcount] = useState(0)

    const increament = ()=>{
        setcount(preCount=>preCount+1)
    }
    const decreament = ()=>{
        setcount(preCount=>preCount-1)
    }
return [count, increament,decreament]
}

export default useCounter
