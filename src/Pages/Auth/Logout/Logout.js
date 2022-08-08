import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';
const LogoutRedirect = (props) => {
  const {id} = useParams();
  useEffect(() => {
    if(id === "phone2valid2account2redirect") {
      props.SetLoginMessageFromLogout({
        message: "Before moving to the next step, the system has logged you out to re-authenticate your account. We will redirect you to your 'Phone validation Step' after you have logged in.",
      })
      props.Logout();
    }
  }, [])
  
  return (
    <div>Please Wait.</div>
  )
}

export default LogoutRedirect;