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