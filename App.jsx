import { useState, useEffect } from 'react'
import './App.css'
import Preloader from './preloader'
import Clock from './Clock'

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3550);
  },[])

  return (
    <>
      {loading?<Preloader/>:<Clock/>}
    </>
  )
}

export default App
