import Test from "./test"
import React, { useState, useEffect, useRef } from 'react'

function App() {
  const [form,setForm] = useState({email:"",phone:""})
  const [val,setVal] = useState("Value")
  
  // const handelChange = (e)=>{
  //   setForm({...form,[e.target.name]:e.target.value})
  //   console.log(form);
    
  // }

  const handelChange = (e)=>{
    setForm({...form,[e.target.name]:e.target.value})
    console.log(form)
  }
  return (
    <>
    <input type="text" name="email" value = {form.email} onChange={handelChange} />
    &nbsp;&nbsp;
    <input type="text" name="phone" value = {form.phone} onChange={handelChange} />
    &nbsp;&nbsp;
    <input type="text"  value={val} onChange={(e)=>setVal(e.target.value)}/>
    </>
  )
}
export default App;
