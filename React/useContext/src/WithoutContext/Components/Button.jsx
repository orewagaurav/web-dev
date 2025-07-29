import React from 'react'
import Component1 from './Component1'

function Button ({test,name}){
    
    return(

        <div>
            <button><span><Component1 test={test} name = {name}/></span>I am a Button</button>
        </div>
        
    )
}
export default Button;