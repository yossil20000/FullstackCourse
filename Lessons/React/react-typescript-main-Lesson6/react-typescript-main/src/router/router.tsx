import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import HomeScreen from '../Screen/HomeScreen/HomeScreen'
import AboutScreen from '../Screen/AboutScreen/AboutScreen'

const Router = () => {
  return (
    <Routes>
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="*"  element={<Navigate to="/home" />} />
    </Routes>
  )
}

export default Router