import React from 'react'
import './Preloader.css'
import loader from './assets/24-hours.gif'
const Preloader = () => {
  return (
    <div>
        <img src={loader} alt="Loader"/>
    </div>
  )
}

export default Preloader