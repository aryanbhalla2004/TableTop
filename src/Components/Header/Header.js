import React from 'react'
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <>
      <h1>Header</h1>
      {props.CurrentUser && <Link to="" onClick={props.Logout}>Logout</Link>}
      <h4>{props.CurrentUser && props.CurrentUser.email}</h4>
    </>
  )
}

export default Header;