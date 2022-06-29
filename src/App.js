import {useState, useEffect} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import {firebase, auth} from './util/firebase';
const App = () => {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const login = (email, password) => {
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
  }



  return (
    <>
      <Header/>
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
        
        <Route path="/" element={<p>asdasdas</p>} />
        <Route path="about-us" element={<p>asdasdas</p>} />
        <Route path="faq" element={<p>asdasdas</p>} />

        <Route path="login" element={currentUser ? <Navigate to="/"/> : <p>asdasdas</p>} login={login}/>
        <Route path="signup" element={currentUser ? <Navigate to="/"/> : <p>asdasdas</p>} signUp={signUp}/>
        {/* //! Password Activation
        {currentUser ? <Navigate to="/"/> : <Route path="forgot-password" element={<p>asdasdas</p>} forgotPassword={forgotPassword}/>}
        {currentUser ? <Navigate to="/"/> : <Route path="confirm-password" element={<p>asdasdas</p>} confirmPassword={confirmPassword} />}
        //! Email Activation
        {currentUser ? <Navigate to="/"/> : <Route path="email-activation" element={<p>asdasdas</p>} emailActivation={emailActivation}/>}
        {currentUser ? <Navigate to="/"/> : <Route path="confirm-activation" element={<p>asdasdas</p>} confirmActivation={confirmActivation}/>} */}

      </Routes>
      <Footer/>
    </>
  )
}

export default App;