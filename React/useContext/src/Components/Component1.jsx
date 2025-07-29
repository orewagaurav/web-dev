import React,{useContext} from 'react'
import { counterContext } from '../Context/Context'

function Component1 (){
    const {count} = useContext(counterContext)
    return (
        <div>{count}</div>
    )
}
export default Component1