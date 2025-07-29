import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex justify-center items-align bg-gray-900  m-4 w-2xl h-2xl p-4  text-3xl text-green-500'>
      Hello World
    </div>
  )
}

export default App
