import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
<ul className="list-disc pl-5 gap-2">
  <li><NavLink className={(e)=>{return e.isActive?"red":""}} to="/">Home</NavLink></li>
  <li><NavLink className={(e)=>{return e.isActive?"red":""}} to="/Login">Login</NavLink></li>
  <li><NavLink className={(e)=>{return e.isActive?"red":""}} to="/Card">Card</NavLink></li>
</ul>
  )
}

export default Navbar
