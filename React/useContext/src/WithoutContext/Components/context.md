# File Hierarchy

    APP.jsx
        Navbar.jsx
            Button.jsx
                Component1.jsx

# App.jsx
```jsx
import './App.css'
import Navbar from './WithoutContext/Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar test ={count} name="Gaurav"/>
    </>
  )
}
```