import {useState, useEffect} from 'react';
import {Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import {firebase, auth} from './util/Firebase';
import Login from './Pages/Auth/Login/Login';
import Register from './Pages/Auth/Register/Register';
import Auth from './Pages/Auth/Auth';
import ForgotPassword from './Pages/Auth/ForgotPassword/ForgotPassword';
import Main from './Pages/Main/LandingPage/Main';
import ConfirmActivation from './Pages/Auth/ConfirmActivation/ConfirmActivation';
import ConfirmPassword from './Pages/Auth/ConfirmPassword/ConfirmPassword';
import EmailActivation from './Pages/Auth/EmailActivation/EmailActivation';

const App = () => {
  const history = useNavigate();

  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const login = (email, password) => {
    console.log("login");
    return auth.signInWithEmailAndPassword(email, password);
  }

  const signUp = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  const forgotPassword = (email) => {
    return auth.sendPasswordResetEmail(email);
  }

  const confirmPassword = (code, newPassword) => {
    return auth.confirmPasswordReset(code, newPassword);
  }
  
  const emailActivation = () => {
    let user = firebase.auth().currentUser;
    user.sendEmailVerification().then((res) => {
      return res
    }).catch((err) => {
      return err
    })
  }

  const confirmActivation = (code) => {
    return auth.applyActionCode(code);
  }

  const logout = () => {
    auth.signOut();
    history("/auth/login");
  }


  return (
    <>
      
      <Routes>
        //? Dashboard
        <Route path="dashboard" element={<p>asdasdas</p>}>
          //! Both Accounts
          <Route path="home" element={<p>asdasdas</p>} />
          <Route path="messages" element={<p>asdasdas</p>} />
          <Route path="notifications" element={<p>asdasdas</p>} />
          <Route path="settings" element={<p>asdasdas</p>} />
          //! Client
          <Route path="favorite" element={<p>asdasdas</p>} />
          //! Vendor          
          <Route path="business/profile" element={<p>asdasdas</p>} />
        </Route> 

        //? Main
        <Route path='/' element={<Main CurrentUser={currentUser} Logout={logout}/>}>
          <Route path="home" element={<p>Home</p>} />
          <Route path="about-us" element={<p>About</p>} />
          <Route path="faq" element={<p>Faq</p>} />
        </Route>

        //? Authentication
        <Route path='auth' element={<Auth/>}>
          <Route path="login" element={currentUser ? <Navigate to="/"/> : <Login Login={login}/>}/>
          <Route path="signup" element={currentUser ? <Navigate to="/"/> : <Register SignUp={signUp}/>} />
          <Route path="forgot-password" element={currentUser ? <Navigate to="/"/> : <ForgotPassword ForgotPassword={forgotPassword}/>} forgotPassword={forgotPassword}/>
          <Route path="confirm-password" element={currentUser ? <Navigate to="/"/> : <ConfirmPassword/>} confirmPassword={confirmPassword} />
          <Route path="email-activation" element={<EmailActivation/>} emailActivation={emailActivation}/>
          <Route path="confirm-activation" element={<ConfirmActivation/>} confirmActivation={confirmActivation}/>
        </Route>
      </Routes>
      
    </>
  )
}

export default App;