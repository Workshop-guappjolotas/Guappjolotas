import {useState} from 'react'

export const useCounter = (inicial=1) => {

    const [state, setstate] = useState(inicial) //10

    const incremento =()=>{
        setstate(state + 1 )
    }

    const decremento =()=>{
        if(state > 1){
            setstate(state - 1 )
        }
    }

    const reset =()=>{
        setstate(inicial)
    }

    return{
        state,
        incremento,
        decremento,
        reset
    }
   
}
