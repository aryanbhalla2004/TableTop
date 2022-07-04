import React from 'react'
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

const Register = () => {
  const [userInput, setUserInput] = useState({
    accountType: "Employee",
    firstName: '',
    lastName: '',
    email: '',
    confirmPassword: '',
    password: '',
  });

  const [fieldError, setFieldError] = useState({
    firstName: false,
    lastName: false,
    email: false,
    confirmPassword: false,
    password: false,
    message: ''
  });

  const updateUserInput = (e) => {
    setUserInput(prevInput => ({
      ...prevInput, [e.target.name]: e.target.value
    }));
  }

  const changeScore = (score) => {
    console.log(score)
  }

  return (
    <Outlet context={[userInput, setUserInput, setFieldError, fieldError, changeScore]}/>
  )
}

export default Register;

