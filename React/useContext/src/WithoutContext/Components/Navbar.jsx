import React from 'react'
import Button from './Button';

function Navbar ({test,name}){
    return(
        <>
        <div>Hello I am Button !</div>
        <Button test={test} name={name}/>
        </>
    )
}
export default Navbar;

// import './App.css'
// import Navbar from './WithoutContext/Components/Navbar'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <Navbar test ={count} name="Gaurav"/>
//     </>
//   )
// }
