import { useState } from 'react'
import Editor from './components/Editor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Editor />
  )
}

export default App