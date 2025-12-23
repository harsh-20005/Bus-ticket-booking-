import React, { useState } from 'react'
import RegisterForm from './deepcomponents/RegisterForm'
import { Routes, Route } from 'react-router-dom'
import LoginForm from './deepcomponents/LoginForm'
import BusList from './deepcomponents/BusList'
import BusSeats from './deepcomponents/BusSeats'
import UserBookings from './deepcomponents/UserBooking'
import Home from './page/home'
import About from './page/about'
import Footer from './deepcomponents/Footer'
import Navbar from './deepcomponents/Navbar'
import Bus from './page/bus'
import Service from './page/services'
import Checkout from './page/checkout/Checkout'
import Detail from './page/detail'


const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [userId, setUserId] = useState(localStorage.getItem('userId'));

  const [selectedBusId, setSelectedBusId] = useState(null) //Newly added state

  const handleLogin = (token, userId)=>{
    localStorage.setItem('token', token)
    localStorage.setItem('userId', userId)
    setToken(token)
    setUserId(userId)
  }
const handleLogout = ()=>{
  localStorage.removeItem('token')
  localStorage.removeItem('userId')
  setToken(null)
  setUserId(null)
  setSelectedBusId(null)
}


  return (
    <div>
    <Navbar token={token} handleLogout={handleLogout}/>
    <Routes>
        <Route path='/register' element={<RegisterForm />}/>
        <Route path='/login' element={<LoginForm onLogin={handleLogin}/>}/>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/bus' element={<Bus/>} />
        <Route path="/bus/bus-details" element={<Detail />} />
        <Route path="/bus/bus-details/checkout" element={<Checkout/>} />
        <Route path='/services' element={<Service/>} />
        <Route path='/buslist' element={<BusList onSelectBus={(id)=>setSelectedBusId(id)} token={token}/>} />
        <Route path='/bus/:busId' element={<BusSeats token={token}/>} />
        <Route path='/my-bookings' element={<UserBookings token={token} userId={userId} />} />
    </Routes>
    <Footer/>
      </div>
  )
}

export default App