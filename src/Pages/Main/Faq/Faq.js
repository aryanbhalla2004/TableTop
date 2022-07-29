import { Link } from "react-router-dom";
import landingPage from "../../../util/images/landing-page.jpg";
import * as IoIcons from "react-icons/io5";
import * as BsIcons from "react-icons/bs";
import * as GoIcons from "react-icons/go";
import * as MdIcons from "react-icons/md";
// IoSearchOutline
//GoSettings
//BsChevronDown
//MdPayment
import "./Faq.css"

const Faq = () => {
  const closeActiveCollapsibles = () => {
    const activeCollapsibleButtons = document.querySelectorAll(".faq-page-button--active");
    const activeCollapsibleContents = document.querySelectorAll(".faq-page-content--active");
    activeCollapsibleButtons.forEach((element, index, array) => {
      console.log(array.length)
      element.classList.remove("faq-page-button--active");
      if(array.length > 1) {
      }
    });
    activeCollapsibleContents.forEach((element, index, array) => {
      element.classList.remove("faq-page-content--active");
      if(array.length > 1) {
      }
    });
  } 
  const handleClickOnCollapsible = (e) => {
    /*
      .faq-page-button--active {
        background-color: aqua;
      }
      .faq-page-button--active > svg {
        transform: rotateX(180deg);
      }
      .faq-page-content--active {
        max-height: 100px;
      }
     */
    const collapsibleButton  = e.target.closest(".faq-page-collapsible-button");
    const collapsibleContent  = collapsibleButton.nextElementSibling;
    if(!collapsibleButton.classList.contains("faq-page-button--active")) {
      closeActiveCollapsibles();
      collapsibleButton.classList.add("faq-page-button--active");
      collapsibleContent.classList.add("faq-page-content--active");
    } else {
      closeActiveCollapsibles();
      collapsibleButton.classList.remove("faq-page-button--active");
      collapsibleContent.classList.remove("faq-page-content--active");
    }
  }
  return (
    <div className="faq-page-container">
      <div className="faq-page-header-container">
        <img src={landingPage} alt="table" className="faq-page-background-img"/>
        <div className="faq-page-overlay"></div>
        <div className="content-sizing-box">
          <div className="faq-header-content">
            <div className="faq-page-message-heading">How can we help?</div>
            <div className="faq-page-message">Find advice and answers from our support team fast or get in touch</div>
            <form className="faq-page-search-form">
              <input className="faq-search-box" type={"text"} placeholder="Search..."/>
              <button type="submit">
              <IoIcons.IoSearchOutline/>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="faq-page-browsing-topics-container">
        <div className="content-sizing-box">
          <div className="faq-page-browsing-topics-content">
            <h1>Browse All Topics</h1>
            <div className="faq-page-browsing-topics-list">
              <div className="faq-page-browsing-topic">
                <GoIcons.GoSettings/>
                <div className="faq-page-browsing-topic-heading">Getting Started</div>
                <div className="faq-page-browsing-topic-message">Get your account up and running in just few easy steps</div>
              </div>
              <div className="faq-page-browsing-topic">
                <MdIcons.MdPayment/>
                <div className="faq-page-browsing-topic-heading">Account and Billing</div>
                <div className="faq-page-browsing-topic-message">Get your account up and running in just few easy steps</div>
              </div>
              <div className="faq-page-browsing-topic">
                <MdIcons.MdSettings/>
                <div className="faq-page-browsing-topic-heading">Troubleshooting</div>
                <div className="faq-page-browsing-topic-message">Get your account up and running in just few easy steps</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="faq-page-popular-question-container">
        <div className="content-sizing-box">
          <div className="faq-page-popular-question-content">
            <div className="faq-page-popular-question-heading-wrapper">
              <div className="faq-page-popular-question-heading">Frequently Asked Questions</div>
              <div className="faq-page-popular-question-message">We help employers and candidates find the right fit</div>
            </div>
            <div className="faq-page-collapsible-list">
              <div className="faq-page-collapsible-wrapper">
                <div className="faq-page-collapsible-button" onClick={handleClickOnCollapsible}>
                  <p>How to make a collapsible card</p>
                  <BsIcons.BsChevronDown/>
                </div>
                <div className="faq-page-collapsible-content">
                  To control (show/hide) the collapsible content, add the data-toggle="collapse" attribute to an . 
                  Then add the data-target="#id" attribute to connect the button with the collapsible content.
                </div>
              </div>
              <div className="faq-page-collapsible-wrapper">
                <div className="faq-page-collapsible-button" onClick={handleClickOnCollapsible}>
                  <p>How to make a collapsible card</p>
                  <BsIcons.BsChevronDown/>
                </div>
                <div className="faq-page-collapsible-content">
                  To control (show/hide) the collapsible content, add the data-toggle="collapse" attribute to an . 
                  Then add the data-target="#id" attribute to connect the button with the collapsible content.
                </div>
              </div>
              <div className="faq-page-collapsible-wrapper">
                <div className="faq-page-collapsible-button" onClick={handleClickOnCollapsible}>
                  <p>How to make a collapsible card</p>
                  <BsIcons.BsChevronDown/>
                </div>
                <div className="faq-page-collapsible-content">
                  To control (show/hide) the collapsible content, add the data-toggle="collapse" attribute to an . 
                  Then add the data-target="#id" attribute to connect the button with the collapsible content.
                </div>
              </div>
              <div className="faq-page-collapsible-wrapper">
                <div className="faq-page-collapsible-button" onClick={handleClickOnCollapsible}>
                  <p>How to make a collapsible card</p>
                  <BsIcons.BsChevronDown/>
                </div>
                <div className="faq-page-collapsible-content">
                  To control (show/hide) the collapsible content, add the data-toggle="collapse" attribute to an . 
                  Then add the data-target="#id" attribute to connect the button with the collapsible content.
                </div>
              </div>
              <div className="faq-page-collapsible-wrapper">
                <div className="faq-page-collapsible-button" onClick={handleClickOnCollapsible}>
                  <p>How to make a collapsible card</p>
                  <BsIcons.BsChevronDown/>
                </div>
                <div className="faq-page-collapsible-content">
                  To control (show/hide) the collapsible content, add the data-toggle="collapse" attribute to an . 
                  Then add the data-target="#id" attribute to connect the button with the collapsible content.
                </div>
              </div>
              <div className="faq-page-collapsible-wrapper">
                <div className="faq-page-collapsible-button" onClick={handleClickOnCollapsible}>
                  <p>How to make a collapsible card</p>
                  <BsIcons.BsChevronDown/>
                </div>
                <div className="faq-page-collapsible-content">
                  To control (show/hide) the collapsible content, add the data-toggle="collapse" attribute to an . 
                  Then add the data-target="#id" attribute to connect the button with the collapsible content.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq;