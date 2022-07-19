import { Link } from 'react-router-dom';
import * as RiIcons from "react-icons/ri";
import "./SignUp.css"

const SignUp = () => {
	return (
		<div className="container">
      <div className="left">
        <RiIcons.RiArrowLeftSLine className="arrow left-arrow" />
        <div className="business-signup">
          <span>Sell</span>
	        <h2>Business</h2>
          <hr></hr>
	        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
	        <button className="signup-button"><Link className="signup-link" to="/auth/signup/vendor-application">Get Started</Link></button>
        </div>
      </div>
      <div className="right">
        <RiIcons.RiArrowRightSLine className="arrow right-arrow"/>
        <div className="signup-flex-element client-signup">
          <span>Buy</span>
		 	    <h2>Client</h2>
          <hr></hr>
		 	    <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <button className="signup-button"><Link className="signup-link" to="/auth/signup">Sign Up</Link></button>
        </div>
      </div>
    </div>

    // <div className='test'>
    //   <div className="signup-container">
    //     <div className="signup-flex-element business-signup">
    //       <span>small</span>
		// 		  <h2>Business</h2>
		// 		  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		// 		  <button className="signup-button">Get Started</button>
    //     </div>
    //     <div className="signup-flex-element client-signup">
    //       <span>small</span>
		// 		  <h2>Client</h2>
		// 		  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		// 		  <button className="signup-button">Sign Up</button>
    //     </div>
    //   </div>
    // </div>
	);
}

export default SignUp;