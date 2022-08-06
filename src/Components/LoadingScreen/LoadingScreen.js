import React from 'react'
import "./LoadingScreen.css";
import logo from "../../util/images/logo2.png";

const LoadingScreen = () => {
  return (
    <div className='loading-Screen-Container'>
      <div id="loading">
        <img src={logo} width="20"></img>
      </div>
      <p>Please Wait</p>
    </div>
  )
}

export default LoadingScreen;