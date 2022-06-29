import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const history = useNavigate();

  const [userInput, setUserInput] = useState({
    email: "",
    password: ""
  });

  const updateInput = (e) => {
    setUserInput(prevInput => ({
      ...prevInput, [e.target.name]: e.target.value
    }));
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    if (userInput.email === "" || userInput.password === "") {
      console.log("Fields are empty");
    } else {
      console.log("doing a firebase request");
      try {
        let userDetails = await props.Login(userInput.email, userInput.password);
        console.log("found user");
        if (userDetails.user.emailVerified) {
          history("/");
        } else {
          history("/email-activation");
        }
      } catch (e) {
        console.log(e.message);
      }
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="email" name="email" placeholder='john@yahoo.com' value={userInput.email} onChange={updateInput} />
      <input type="password" name="password" placeholder='password' value={userInput.password} onChange={updateInput} />
      <button>Click me</button>
    </form>
  )
}

export default Login;