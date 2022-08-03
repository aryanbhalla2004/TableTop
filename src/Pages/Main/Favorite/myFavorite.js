import React, {useState} from 'react'
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import "./MyFavorite.css"
import LandingPageBusinessCard from '../../../Components/LandingPageBusinessCard/LandingPageBusinessCard';
import { Spinner } from 'react-bootstrap';
const MyFavorite = () => {
  const [loading, setLoading] = useState(false);
  const [myFav, setMyFav] = useState([1]);
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <Helmet>
        <title>My Favorite | TableTop</title>
      </Helmet>
      <div className="vendor-page-business-container">
        <div className="content-sizing-box">
          <div className="vendor-page-business-top-info">
            <div className="vendor-page-top-right">
              <h2 className="vendor-page-business-name">My Favorites</h2>
              <p className='small-light-text'>The list that follows includes the companies you expressed interest in and liked.</p>
            </div>
            <div className="vendor-page-top-left-options">
              <div className="vendor-save-btn-wrapper">
                <i class="bi bi-dash-square-dotted"></i>
                <div className="vendor-save-btn">Clear All</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="list-of-my-fav-container">
        <div className="content-sizing-box">
          {!loading && <ul className='list-of-my-fav'>
            {!loading && (myFav.length > 0 ? myFav.map((item, index) => (
              <LandingPageBusinessCard key={index} name={"My Burger Place"} businessInfo={{timings: "9:00 AM - 12:00 PM", ratings: 4.5, photo: "https://cdn.pixabay.com/photo/2016/11/29/10/09/bakery-1868925_1280.jpg"}}/>
            )) : <div className='centering-messages-item'><h4>No Results found</h4></div>)}
            
          </ul>}

          {loading && <div className='centering-messages-item'><Spinner animation='border'/><p  className='small-light-text'>Loading...</p></div>}
        </div>
      </div>   
    </motion.div>
  )
}

export default MyFavorite;