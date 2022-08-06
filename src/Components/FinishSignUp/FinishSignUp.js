import React from 'react'

const FinishSignUp = (props) => {
  return (
    <div className={props.ShowLogoutBox ? "logout-comp-container show-logout-pop-box" : "logout-comp-container hide-logout-pop-box"}>
      <div className='p-5'>
        <h3>Account Setup Completed</h3>
        <p>Are you sure you want to logoff? All your progress and unsaved changes will be lost.</p>
        <div>
          <button onClick={() => props.SetShowLogoutBox(!props.ShowLogoutBox)}>Cancel</button>
          <button onClick={props.Logout}>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default FinishSignUp;