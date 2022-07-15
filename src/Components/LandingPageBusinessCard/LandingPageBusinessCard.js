import businessImage from "../../util/images/landing-page.jpg";
import {Link} from "react-router-dom";
import "./LandingPageBusinessCard.css"
import HoverVideoPlayer from 'react-hover-video-player';

const LandingPageBusinessCard = ({name, businessInfo}) => {
  return (
    <>

      <Link to={"/vendor/2"} className="lp-business-card">
        <div className="lp-business-img-sizing-container">
          <HoverVideoPlayer
            videoSrc="./sampl.mp4"
            className="lp-business-img"
            pausedOverlay={
              <img
                src={businessInfo.photo}
                alt=""
                loading="lazy"
                className="lp-business-img"
                style={{
                  // Make the image expand to cover the video's dimensions
                  width: '100%',
                  height: '320px',
                  objectFit: 'cover',
                }}
              />
            }
          />
          <i class="bi bi-heart lp-business-heart-icon"></i>
        </div>
          <div className="lp-business-info">
            <div className="lp-business-name-and-ratings">
              <div className="lp-business-name">{name}</div>
              <div className="lp-business-ratings">
                <i className="bi bi-star-fill"></i>
                <div className="lp-business-rating-number">{businessInfo.ratings}</div>
              </div>
            </div>
            
            <div className="lp-business-hours timing-business">{businessInfo.timings}</div>
            <div className="lp-business-hours distance-container">123 KM away</div>
          </div>
      </Link>   
    </>
  )
}
export default LandingPageBusinessCard;