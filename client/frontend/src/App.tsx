import './App.css'

import { useEffect } from 'react'

function App() {
  useEffect(() => {
    fetch(`/api`)
      .then((res) => res.json())
      .then((data) => console.log(data.message))
  }, [])
  return (
    <>
      <div className="app">
        <h1>BoilerPlate</h1>
      </div>
    </>
  )
}

export default App
