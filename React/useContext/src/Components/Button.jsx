import React, { useContext } from 'react'
import Component1 from './Component1';
import { counterContext } from '../Context/Context'

function Button(){
    const {count,setCount}= useContext(counterContext)
    return (
        <div>
            <button onClick={()=>setCount(count+1)}><span><Component1 /></span>useContext()</button>
        </div>
    )
}
export default Button;