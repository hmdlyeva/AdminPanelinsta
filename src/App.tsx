import { useState } from 'react'
import Adminpage from './pages/adminPage/Adminpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Adminpage/>
    </>
  )
}

export default App
