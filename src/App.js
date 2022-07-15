import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { firebase, auth } from "./util/Firebase";
import Login from "./Pages/Auth/Login/Login";
import Register from "./Pages/Auth/Register/Register";
import Auth from "./Pages/Auth/Auth";
import ForgotPassword from "./Pages/Auth/ForgotPassword/ForgotPassword";
import Main from "./Pages/Main/Main";
import ConfirmActivation from "./Pages/Auth/ConfirmActivation/ConfirmActivation";
import ConfirmPassword from "./Pages/Auth/ConfirmPassword/ConfirmPassword";
import EmailActivation from "./Pages/Auth/EmailActivation/EmailActivation";
import AccountType from "./Pages/Auth/Register/RegisterProcess/AccountType";
import AccountInformation from "./Pages/Auth/Register/RegisterProcess/AccountInformation";
import AccountVendor from "./Pages/Auth/Register/RegisterProcess/AccountVendor";
import EmailConformations from "./Pages/Auth/EmailConformations";
import Dashboard from "./Pages/Dashboard/Dashboard";
import DashboardHome from "./Pages/Dashboard/Home/Home";
import Home from "./Pages/Main/Home/Home";
import Messages from "./Pages/Dashboard/Messages/Messages";
import Notifications from "./Pages/Dashboard/Notifications/Notifications";
import Settings from "./Pages/Dashboard/Settings/Settings";
import Favorite from "./Pages/Dashboard/Favorite/Favorite";
import Profile from "./Pages/Dashboard/Settings/Profile/Profile";
import AboutUs from "./Pages/Main/About/About";

import Vendor from "./Pages/Main/Vendor/Vendor";
import General from "./Pages/Dashboard/Settings/General/General";
import Security from "./Pages/Dashboard/Settings/Security/Security";
import Activity from "./Pages/Dashboard/Settings/Activity/Activity";

const App = () => {
  const history = useNavigate();
  const [currentUser, setCurrentUser] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const login = (email, password) => {
    console.log("login");
    return auth.signInWithEmailAndPassword(email, password);
  };

  const signUp = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const forgotPassword = (email) => {
    return auth.sendPasswordResetEmail(email);
  };

  const confirmPassword = (code, newPassword) => {
    return auth.confirmPasswordReset(code, newPassword);
  };

  const emailActivation = () => {
    let user = firebase.auth().currentUser;
    user
      .sendEmailVerification()
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  };

  const confirmActivation = (code) => {
    console.log(code);
    return auth.applyActionCode(code);
  };

  const logout = () => {
    auth
      .signOut()
      .then((res) => {
        history("/auth");
        return res;
      })
      .catch((err) => {
        return err;
      });
  };

  return (
    !loading && (
      <>
        <Routes>
          //? Dashboard
          <Route path="dashboard" element={currentUser ? (<Dashboard currentUser={currentUser} />) : (<Navigate to="/auth" />)}>
            //! Both Accounts
            <Route index element={currentUser ? (<DashboardHome currentUser={currentUser} />) : (<Navigate to="/auth" />)} />
            <Route path="messages" element={currentUser ? (<Messages currentUser={currentUser} />) : (<Navigate to="/auth" />)} />
            <Route path="notifications" element={currentUser ? (<Notifications currentUser={currentUser} />) : (<Navigate to="/auth" />)} />
            <Route path="settings" element={currentUser ? (<Settings currentUser={currentUser} />) : (<Navigate to="/auth" />)}>
              <Route path="profile" element={currentUser ? (<Profile currentUser={currentUser} />) : (<Navigate to="/auth" />)} />
              <Route path="general" element={currentUser ? (<General currentUser={currentUser} />) : (<Navigate to="/auth" />)} />
              <Route path="security" element={currentUser ? (<Security currentUser={currentUser} />) : (<Navigate to="/auth" />)} />
              <Route path="activity" element={currentUser ? (<Activity currentUser={currentUser} />) : (<Navigate to="/auth" />)} />
            </Route>
            //! Client
            <Route path="favorite" element={<Favorite />} />
            //! Vendor
          </Route>
          //? Main
          <Route path="/" element={<Main CurrentUser={currentUser} Logout={logout} />}>
            <Route path="home" element={<Home />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="faq" element={<h1>asds</h1>} />
            <Route path="/vendor/:id" element={<Vendor />} />
          </Route>
          //? Email Links
          <Route path="user-auth-email-system" element={<EmailConformations />}/>
          //? Authentication
          <Route path="auth" element={<Auth />}>
            <Route index element={currentUser ? <Navigate to="/" /> : <Login Login={login} />}/>
            <Route path="signup" element={currentUser ? <Navigate to="/" /> : <Register SignUp={signUp} />}>
              {/* <Route index element={<AccountType/>}/> */}
              <Route index element={<AccountInformation SignUp={signUp} />} />
              {/* <Route path="account-vendor" element={<AccountVendor/>}/> */}
            </Route>
            <Route path="forgot-password" element={currentUser ? (<Navigate to="/" />) : (<ForgotPassword ForgotPassword={forgotPassword} />)}/>
            <Route path="confirm-password" element={currentUser ? (<Navigate to="/" />) : (<ConfirmPassword ConfirmPassword={confirmPassword} />)}/>
            <Route path="email-activation" element={currentUser ? (!currentUser.emailVerified ? (<EmailActivation CurrentUser={currentUser} EmailActivation={emailActivation}/>) : (<Navigate to="/" />)) : (<Navigate to="/auth" />)}/>
            <Route path="confirm-activation" element={<ConfirmActivation ConfirmActivation={confirmActivation} />}/>
          </Route>
        </Routes>
      </>
    )
  );
};

export default App;
