import { useState} from "react";
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import "./App.css";
import Card from "./components/card.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<><Navbar/><Home/></>
    },
    {
      path:"/login",
      element:<><Navbar/><Login/></>
    },
    {
      path:"/card",
      element:<><Navbar/><Card/></>
    }
  ])

  return (
    <div className="bg-gray-700 h-screen ">
    <RouterProvider router = {router}/>
    </div>
  )
}

export default App;
