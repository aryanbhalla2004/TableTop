import "./LandingPage.css";
import { Link } from "react-router-dom";
import { useRef, useState,useEffect } from "react";
import { motion } from "framer-motion";
import "react-multi-carousel/lib/styles.css";
import {Helmet} from "react-helmet";
import * as HiIcons from "react-icons/hi";
import LandingPageBusinessCard from "../../../Components/LandingPageBusinessCard/LandingPageBusinessCard";

const LandingPage = (props) => {
  const [scrollX, setscrollX] = useState(0); // For detecting start scroll postion
  const [scrolEnd, setscrolEnd] = useState(false); // For detecting end of scrolling
  const [category, setCategory] = useState("");
  const scrl = useRef();
  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift); // Updates the latest scrolled postion

    if (
      Math.ceil(scrl.current.scrollWidth) - Math.ceil(scrl.current.scrollLeft) - (scrl.current.offsetWidth) <= 40
      
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }

    if(shift < 0){
      setscrolEnd(false);
    }
    console.log((Math.ceil(scrl.current.scrollWidth) - Math.ceil(scrl.current.scrollLeft)));
    console.log(
      scrl.current.offsetWidth);
    //For checking if the scroll has ended
  };



  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <Helmet>
        <title>Local Business Live Footage | TableTop</title>
        <script src="./main.js" defer></script>
      </Helmet>
      <div className="search-box-slider-landing-page">
        <div className="search-box-slider-item-wrapper-overlay">
          <div className="content-sizing-box search-box-slider-item-wrapper">
            <h1></h1>
            {/* <p className="line-1 anim-typewriter">We give real time updates every 24 hours.</p> */}
            <div className="center-text-like-gg">
              <h1>Before You Go | </h1>
              <p className="keyword-strong line-1 anim-typewriter"><h1><span className="keyword-strong">View it Live</span></h1></p>
            </div>
            
            <form className="main-search-box-header">
              <span className="small-text-flow-form-landing">Your Destination <i class="bi bi-arrow-right"></i></span>
              <div className="single-field-holder-landing-page search-box-size">
                {/* <label>What's your destination</label> */}
                <div className="putting-two-in-one">
                  <input placeholder="e.g. Pizza Place, Hair Salon, Garage" type="text" className="left-radius" required></input>
                  <i class="bi bi-search"></i>
                </div>
              </div>
              <div className="single-field-holder-landing-page">
                <div className="putting-two-in-one">
                  <input placeholder="City, State or Zip" type="text" required ></input>
                  <i class="bi bi-geo-alt"></i>
                </div>
              </div>
              <div className="single-field-holder-landing-page">
                {/* <label>Categories</label> */}
                <select>
                  <option value="0" selected>All Categories</option>
                </select>
              </div>
              {/* <button className="search-button-header">Look Up</button> */}
            </form>
            {/* <div className="center-text-like-gg">
              <p className="small-text-flow-form-landing">Your Destination</p>
            </div> */}
           
          </div>
        </div>
      </div>
      <div className="stories_container">
       

        <div className="content-sizing-box stories-wrapper">
        {scrollX !== 0 && (
        <button class="prev" onClick={() => slide(-300)}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></button>
        )}
          <ul className="horizontal-scroll" ref={scrl} >
             {props.Category && props.Category.map((item, index) => (
              <li className={category === item.secondaryName && "active-category-selected"} onClick={() => setCategory(item.secondaryName)}>
                <i className={item.icon}></i>
                <span>{item.name && item.name}</span>
              </li>
            ))}
          </ul>
          {!scrolEnd && (
        <button class="forw"onClick={() => slide(300)}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></button>
         )}
          
        </div>
        
      </div>
      {/* <div className="slider-container">
        <div className="slider-wrapper">
          <ul>
            <li>
              <div className="header-banner-single">
                <span>Collection</span>
                <h3>This Weeks Trending & Popular Business</h3>
              </div>
              <button>Show More</button>
            </li>
            <li>
              <div className="header-banner-single">
                <span>Collection</span>
                <h3>Most affordable Around The Block</h3>
              </div>
              <button>Show More</button>
            </li>
            <li>
              <div className="header-banner-single">
                <span>Collection</span>
                <h3>Introducing New Business Near You</h3>
              </div>
              <button>Show More</button>
            </li>
          </ul>
        </div>
      </div> */}
      <div className="landing-page-popular-businesses-container">
        <div className="content-sizing-box landing-page-item-wrapper">
          <div className="section-single-container">
            <div className="section-header-part"> 
              <h2>Trending Resturants</h2>
              <p>List of business show below are one of the most popular restaurent around you.</p>
            </div>
            <div className="selection-stats">
              <a>Show (12)</a>
              <div className="navigation-button">
                <button><HiIcons.HiChevronLeft/></button>
                <button><HiIcons.HiChevronRight/></button>
              </div>
            </div>
          </div>
          <div className="landing-page-popular-businesses">
            <LandingPageBusinessCard name={"My Burger Place"} businessInfo={{timings: "9:00 AM - 12:00 PM", ratings: 4.5, photo: "https://cdn.pixabay.com/photo/2016/11/29/10/09/bakery-1868925_1280.jpg"}}/>
            <LandingPageBusinessCard name={"My Tire Place"} businessInfo={{timings: "7:00 am - 5:00 pm", ratings: 4.2, photo: "https://cdn.pixabay.com/photo/2016/11/19/15/40/clothes-1839935_1280.jpg"}}/>
            <LandingPageBusinessCard name={"Macdonald House"} businessInfo={{timings: "9:00 am - 12:00 am", ratings: 3.7, photo: 'https://cdn.pixabay.com/photo/2016/11/29/09/00/doughnuts-1868573_1280.jpg'}}/>
            <LandingPageBusinessCard name={"The Keg House"} businessInfo={{timings: "9:00 am - 1:00 am", ratings: 4.4, photo: "https://cdn.pixabay.com/photo/2017/11/06/13/50/family-2923690_1280.jpg"}}/>
            <LandingPageBusinessCard name={"Clay Oven"} businessInfo={{timings: "9:00 am - 1:00 am", ratings: 4.4, photo: "https://cdn.pixabay.com/photo/2015/07/05/11/56/store-832188_1280.jpg"}}/>
            <LandingPageBusinessCard name={"Spice Circle"} businessInfo={{timings: "9:00 am - 1:00 am", ratings: 4.4, photo: "https://cdn.pixabay.com/photo/2015/07/05/11/56/store-832188_1280.jpg"}}/>  
            <LandingPageBusinessCard name={"My Burger Place"} businessInfo={{timings: "9:00 AM - 12:00 PM", ratings: 4.5, photo: "https://cdn.pixabay.com/photo/2016/11/29/10/09/bakery-1868925_1280.jpg"}}/>
            <LandingPageBusinessCard name={"My Burger Place"} businessInfo={{timings: "9:00 AM - 12:00 PM", ratings: 4.5, photo: "https://cdn.pixabay.com/photo/2016/11/29/10/09/bakery-1868925_1280.jpg"}}/>
            <LandingPageBusinessCard name={"My Tire Place"} businessInfo={{timings: "7:00 am - 5:00 pm", ratings: 4.2, photo: "https://cdn.pixabay.com/photo/2016/11/19/15/40/clothes-1839935_1280.jpg"}}/>
            <LandingPageBusinessCard name={"Macdonald House"} businessInfo={{timings: "9:00 am - 12:00 am", ratings: 3.7, photo: 'https://cdn.pixabay.com/photo/2016/11/29/09/00/doughnuts-1868573_1280.jpg'}}/>
            <LandingPageBusinessCard name={"The Keg House"} businessInfo={{timings: "9:00 am - 1:00 am", ratings: 4.4, photo: "https://cdn.pixabay.com/photo/2017/11/06/13/50/family-2923690_1280.jpg"}}/>
            <LandingPageBusinessCard name={"Clay Oven"} businessInfo={{timings: "9:00 am - 1:00 am", ratings: 4.4, photo: "https://cdn.pixabay.com/photo/2015/07/05/11/56/store-832188_1280.jpg"}}/>
            <LandingPageBusinessCard name={"Spice Circle"} businessInfo={{timings: "9:00 am - 1:00 am", ratings: 4.4, photo: "https://cdn.pixabay.com/photo/2015/07/05/11/56/store-832188_1280.jpg"}}/>           
          </div>
        </div>
      </div>
      <div className="landing-page-popular-businesses-container">
        <div className="content-sizing-box landing-page-item-wrapper">
          <div className="section-single-container">
            <div className="section-header-part"> 
              <h2>New Opening Around The Block</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <div className="selection-stats">
              <a>Show (12)</a>
              <div className="navigation-button">
                <button><HiIcons.HiChevronLeft/></button>
                <button><HiIcons.HiChevronRight/></button>
              </div>
            </div>
          </div>
          <div className="landing-page-popular-businesses">
            <LandingPageBusinessCard name={"Spice Circle"} businessInfo={{timings: "9:00 am - 1:00 am", ratings: 4.4, photo: "https://cdn.pixabay.com/photo/2015/07/05/11/56/store-832188_1280.jpg"}}/>            
            <LandingPageBusinessCard name={"My Burger Place"} businessInfo={{timings: "9:00 AM - 12:00 PM", ratings: 4.5, photo: "https://cdn.pixabay.com/photo/2016/11/29/10/09/bakery-1868925_1280.jpg"}}/>
            <LandingPageBusinessCard name={"Macdonald House"} businessInfo={{timings: "9:00 am - 12:00 am", ratings: 3.7, photo: 'https://cdn.pixabay.com/photo/2016/11/29/09/00/doughnuts-1868573_1280.jpg'}}/>
            <LandingPageBusinessCard name={"The Keg House"} businessInfo={{timings: "9:00 am - 1:00 am", ratings: 4.4, photo: "https://cdn.pixabay.com/photo/2017/11/06/13/50/family-2923690_1280.jpg"}}/>
            <LandingPageBusinessCard name={"Clay Oven"} businessInfo={{timings: "9:00 am - 1:00 am", ratings: 4.4, photo: "https://cdn.pixabay.com/photo/2015/07/05/11/56/store-832188_1280.jpg"}}/>
            <LandingPageBusinessCard name={"My Tire Place"} businessInfo={{timings: "7:00 am - 5:00 pm", ratings: 4.2, photo: "https://cdn.pixabay.com/photo/2016/11/19/15/40/clothes-1839935_1280.jpg"}}/>
            <LandingPageBusinessCard name={"The Keg House"} businessInfo={{timings: "9:00 am - 1:00 am", ratings: 4.4, photo: "https://cdn.pixabay.com/photo/2017/11/06/13/50/family-2923690_1280.jpg"}}/>
            <LandingPageBusinessCard name={"Clay Oven"} businessInfo={{timings: "9:00 am - 1:00 am", ratings: 4.4, photo: "https://cdn.pixabay.com/photo/2015/07/05/11/56/store-832188_1280.jpg"}}/>
            <LandingPageBusinessCard name={"Spice Circle"} businessInfo={{timings: "9:00 am - 1:00 am", ratings: 4.4, photo: "https://cdn.pixabay.com/photo/2015/07/05/11/56/store-832188_1280.jpg"}}/>           
          </div>
        </div>
      </div>
      
    </motion.div>
  );
};
export default LandingPage;
