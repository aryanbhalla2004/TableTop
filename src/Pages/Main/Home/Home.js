import { Link } from "react-router-dom";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import landingPage from "../../../util/images/landing-page.jpg";
import homePageVideo from "../../../util/images/home-page-video.mp4"
//BsCircleFill

import "./Home.css";

const Home = () => {
  return (
    <div className="home-page-container">
      <div className="home-page-header-container">
        {/* <img src={landingPage} className="home-page-video-background"/> */}
        <video src={homePageVideo} muted loop autoPlay className="home-page-video-background"></video>
        <div className="home-page-overlay"></div>
        <div className="content-sizing-box">
          <div className="home-page-top-section">
            <div className="home-page-top-logo">
              <BiIcons.BiChair />
            </div>
            <div className="home-page-top-message-container">
              <div className="home-page-message">Communicate businesses in realtime </div>
              <div className="home-page-message-info">Simplify your daily lives by integrating multiple services into one platform.</div>
              <div className="home-page-message-buttons">
                <Link className="home-page-get-started-btn outline-btn" to="/">
                  Get Started
                </Link>
                <Link className="home-page-get-started-btn solid-btn" to="/">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-page-benefit-container">
        <div className="content-sizing-box">
          <div className="home-page-benefit-wrapper">
            <div className="home-page-benefit">
              <div className="home-page-benefit-heading">Manage support processes easily</div>
              <div className="home-page-benefit-info">Some metrics play an essential role to measure the pulse of a company’s 
                customer service efficiency, while others are more evaluating if a brand has a customer-centric approach. 
                Our customer dashboard will examine this second type of metrics.
              </div>
              <ul>
                <li>Trend Tracking</li>
                <li>Vendor Management</li>
                <li>Loyalty Program</li>
                <li>Billing</li>
              </ul>
            </div>
            <div className="home-page-benefit-img">
              <BiIcons.BiAnalyse/>
            </div>
          </div>
          <div className="home-page-feature-cards">
            <div className="home-page-feature-card">
              <div className="home-page-feature-card-heading">STRATEGY</div>
              <div className="home-page-feature-card-message">Build your experience</div>
              <div className="home-page-feature-card-info">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</div>
              <div className="home-page-feature-card-demo-link">View demo <BiIcons.BiRightArrow/></div>
            </div>
            <div className="home-page-feature-card">
              <div className="home-page-feature-card-heading">STRATEGY</div>
              <div className="home-page-feature-card-message">Build your experience</div>
              <div className="home-page-feature-card-info">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</div>
              <div className="home-page-feature-card-demo-link">View demo <BiIcons.BiRightArrow/></div>
            </div>
            <div className="home-page-feature-card">
              <div className="home-page-feature-card-heading">STRATEGY</div>
              <div className="home-page-feature-card-message">Build your experience</div>
              <div className="home-page-feature-card-info">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</div>
              <div className="home-page-feature-card-demo-link">View demo <BiIcons.BiRightArrow/></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;