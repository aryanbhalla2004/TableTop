import React from 'react'
import {Outlet} from "react-router-dom";
import "./Auth.css"
const Auth = () => {

  return (
    <div class="container-auth">
      <div class="col-information-wrapper">
      </div>
      <div class="col-form-wrapper">
        <div class="max-width-auth-pages">
          <Outlet context={["sdsds"]}/>
        </div>
      </div>
    </div>
  )
}

export default Auth;