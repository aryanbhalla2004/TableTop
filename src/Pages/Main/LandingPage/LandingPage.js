import "./LandingPage.css"
import { useRef } from "react";
import "react-multi-carousel/lib/styles.css";
import * as BiIcons from "react-icons/bi";
import {Helmet} from "react-helmet";
import * as GiIcons from "react-icons/gi";
import * as RiIcons from "react-icons/ri";
import * as HiIcons from "react-icons/hi";
import * as MdIcons from "react-icons/md";
import * as TbIcons from "react-icons/tb";
import LandingPageBusinessCard from "../../../Components/LandingPageBusinessCard/LandingPageBusinessCard";
const LandingPage = (props) => {
  const ref = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset
  };

  return (
    <>
      <Helmet>
        <script src="./main.js" defer></script>
      </Helmet>
      <div className="stories_container">
        <div className="content-sizing-box stories-wrapper">
          <ul className="horizontal-scroll">
            <li>
              <RiIcons.RiRestaurant2Line/>
              <span>restaurants</span>
            </li>
            <li>
              <MdIcons.MdOutlineHealthAndSafety/>
              <span>Beauty & Fitness</span>
            </li>
            <li>
              <RiIcons.RiScissors2Fill/>
              <span>Barbers</span>
            </li>
            <li>
              <GiIcons.GiHomeGarage/>
              <span>Autos & Vehicles</span>
            </li>
            
            <li>
              <GiIcons.GiCarKey/>
              <span>Dealership</span>
            </li>
            <li>
              <GiIcons.GiClothes/>
              <span>Clothing & Shoes</span>
            </li>
            <li>
              <GiIcons.GiWireCoil/>
              <span>Electronics</span>
            </li>
            <li>
              <BiIcons.BiBookContent/>
              <span>Books & Literature</span>
            </li>
            <li>
              <GiIcons.GiHamburger/>
              <span>Fast Food</span>
            </li>
            <li>
              <GiIcons.GiHospital />
              <span>Health & Medical</span>
            </li>
            <li>
              <TbIcons.TbDeviceGamepad2/>
              <span>Gaming</span>
            </li>
          </ul>
          <button onClick={() => props.setShowSearchBox(!props.showSearchBox)}><i class="bi bi-sort-down-alt"></i> Search</button>
        </div>
      </div>
      <div className="slider-container">
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
      </div>
      <div className="landing-page-popular-businesses-container">
        <div className="content-sizing-box landing-page-item-wrapper">
          <div className="section-single-container">
            <div className="section-header-part"> 
              <h2>Trending Restarunt</h2>
              <p>List of business show below are one of the most popular restaurent around you.</p>
            </div>
            <div className="selection-stats">
              <a>Show (12)</a>
              <div className="navigation-button">
                <button><HiIcons.HiChevronLeft/></button>
                <button onClick={() => scroll(100)}><HiIcons.HiChevronRight/></button>
              </div>
            </div>
          </div>
          <div className="landing-page-popular-businesses" ref={ref}>
            <LandingPageBusinessCard name={"My Burger Place"} businessInfo={{timings: "9:00 AM - 12:00 PM", ratings: 4.5, photo: "https://cdn.pixabay.com/photo/2016/11/29/10/09/bakery-1868925_1280.jpg"}}/>
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
          <div className="landing-page-popular-businesses" ref={ref}>
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
    </>
  );
};
export default LandingPage;
