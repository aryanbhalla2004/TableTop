import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

export const EmailConformations = () => {
  const history = useNavigate();
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const code = urlParams.get('oobCode');
  const mode = urlParams.get('mode');

  useEffect(() => {
    if(mode === 'verifyEmail') {
      history({
        pathname: '/auth/confirm-activation',
        search: `code=${code}`
      });
    } else if (mode === 'resetPassword') {
      history({
        pathname: '/auth/confirm-password',
        search: `code=${code}`
      });
    }
  }, []);

  return (
    <h1>Please Wait You Will Be Redirected Shortly...</h1>
  )
}

export default EmailConformations;