import { useState } from 'react'
import './App.css'
import WeatherPage from './components/WeatherPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <WeatherPage />
    </div>
    </>
  )
}

export default App
