
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { useEffect, useState } from 'react'
import Loader from './pages/Home/Loader'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import { setPortfolioData } from './redux/rootSlice'
function App() {
  // const [loadingStatus, setLoadingStatus] = useState(false)
  const {loading,portfolioData}=useSelector(state=>state.root)
  const dispatch=useDispatch()
  // useEffect(() => {
  //   let timeout = setTimeout(() => { setLoadingStatus(false) }, 500)
  //   return () => {
  //     clearTimeout(timeout)
  //   }
  // }, [])
  useEffect(() => {
    const getPortfolioData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/portfolio/get-portfolio-data')
        dispatch(setPortfolioData(response.data))
      } catch (error) {
        console.log(error)
      }
    }
    getPortfolioData()
  }, [])
  useEffect(()=>{
    console.log("portfolio-data",portfolioData)
  },[portfolioData])
  return (

    <div className="App">
      {/* {loadingStatus ? <Loader /> : null} */}
      {loading ? <Loader /> : null}
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
