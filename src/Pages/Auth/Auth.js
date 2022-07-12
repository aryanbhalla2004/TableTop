import React, {useState} from 'react'
import {Outlet} from "react-router-dom";
import "./Auth.css"
import "./Responsive.css"

const Auth = () => {
  const [loginMessage, setLoginMessage] = useState();
  return (
    <div class="container-auth">
      <div class="col-information-wrapper">
        <div className='background-layer-wrapper'>
          <img alt='logo' src="/images/logo-white.png" width={150}></img>
          <div className='background-layer-info'>
            <h2>Welcome back!</h2>
            <p>We are glad to see you again! Log in to get connected with businesses near you.</p>
          </div>
          <div className='background-layer-icons'>
            <i class="bi bi-instagram"></i>
            <i class="bi bi-linkedin"></i>
            <i class="bi bi-facebook"></i>
          </div>
        </div>
      </div>
      <div class="col-form-wrapper">
        <div class="max-width-auth-pages">
          <Outlet context={[loginMessage, setLoginMessage]}/>
        </div>
      </div>
    </div>
  )
}

export default Auth;