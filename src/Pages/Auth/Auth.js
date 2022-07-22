import React, {useState} from 'react'
import {Outlet} from "react-router-dom";
import logo from "../../util/images/logo-w.png";
import "./Auth.css"
import "./Responsive.css"

const Auth = () => {
  const [loginMessage, setLoginMessage] = useState();
  return (
    <div class="container-auth">
      <div class="col-information-wrapper">
        <div className='background-layer-wrapper'>
          <img src={logo} width={80}></img>
          <div className='background-layer-info'>
            <p>We are glad to see you again!</p>
            <h2>Join our next negotiation group in few minutes!</h2>
            <a className='ghost-button'>Learn More</a>
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