
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { useEffect, useState } from 'react'
import Loader from './pages/Home/Loader'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import { HideLoading, ShowLoading, setPortfolioData } from './redux/rootSlice'
function App() {
  const {loading,portfolioData}=useSelector(state=>state.root)
  const dispatch=useDispatch()

  useEffect(() => {
    const getPortfolioData = async () => {
      try {
        dispatch(ShowLoading())
        const response = await axios.get('http://localhost:3000/api/portfolio/get-portfolio-data')
        dispatch(HideLoading())
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
      {loading ? <Loader /> : null}
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
