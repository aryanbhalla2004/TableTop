import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import "./AccountSelect.css";
import { BsFileEarmarkPerson, BsBuilding } from 'react-icons/bs';
const AccountSelect = (props) => {
  const history = useNavigate();
  const [activeSelection, setActiveSelection] = useState("individual");

  const movePages = () => {
    props.SetShowAccountSelection(false);
    
    if(activeSelection === "business") {
      history("/business-profile-setup"); 
    } else {
      history("/auth/signup");
    }
  }

  return (
    <div className={props.ShowAccountSelection ? "logout-comp-container show-logout-pop-box" : "logout-comp-container hide-logout-pop-box"}>
    <div className='account-setup-box'>
      <div className='close-button'>
        <i class="bi bi-x-lg" onClick={() => props.SetShowAccountSelection(false)}></i>
      </div>
      <h3>How are you planning to use TableTop?</h3>
      <p>We'll streamline your setup experience accordingly.</p>
      <ul>
        <li className={activeSelection === "business" && "active-selection-account-type"} onClick={() => setActiveSelection("business")}>
          <BsBuilding/>
          <h4>Business</h4>
          <p>Business account are used for posting you business details on tabletop</p>
        </li>
        <li className={activeSelection === "individual" && "active-selection-account-type"} onClick={() => setActiveSelection("individual")}>
          <BsFileEarmarkPerson/>
          <h4>Individual</h4>
          <p>Individual account are an everyday use which requires free life time access.</p>
        </li>
      </ul>
      <div className='button-group-account-type'>
        <button onClick={movePages} className={activeSelection != "" ? "ghost-button-home active-button-selection" : "ghost-button-home"}>Continue <i class="bi bi-arrow-right"></i></button>
      </div>
    </div>
  </div>
  )
}
 
export default AccountSelect;
