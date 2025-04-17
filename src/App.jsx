import { useState } from 'react'
import viteLogo from '/vite.svg'
import './index.css'
import Weekdate from './components/Weekdate.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      <Weekdate />
    </>
  )
}

export default App
