
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { useEffect, useState } from 'react'
import Loader from './pages/Home/Loader'

function App() {
  const [loadingStatus,setLoadingStatus] = useState(true)
  useEffect(() => {
    let timeout=setTimeout(()=>{setLoadingStatus(false)},500)
  
    return () => {
      clearTimeout(timeout)
    }
  }, [])
  
  return (

      <div className="App">
        {loadingStatus ? <Loader/> : null}
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </div>
  )
}

export default App
