import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
    let  myObj={
      username:"shubham",
      age :21
    }
  return (
    <>
     <h1>Tailwind Test</h1>
      <Card username="kanhaiya" btnText="click me"/>


    </>
  )
}

export default App
