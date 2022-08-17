import "./LandingPage.css"
import { useRef, useState } from "react";
import { motion } from "framer-motion";
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
  const [category, setCategory] = useState("");

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <Helmet>
        <title>Local Business Live Footage | TableTop</title>
        <script src="./main.js" defer></script>
      </Helmet>
      <div className="stories_container">
        <div className="content-sizing-box stories-wrapper">
          <ul className="horizontal-scroll">
            <li className={category === "restaurants" && "active-category-selected"} onClick={() => setCategory("restaurants")}>
              <RiIcons.RiRestaurant2Line/>
              <span>Restaurants</span>
            </li>
            <li className={category === "fastfood" && "active-category-selected"} onClick={() => setCategory("fastfood")}>
              <RiIcons.RiRestaurant2Line/>
              <span>Fast Food</span>
            </li>
            <li className={category === "transportation" && "active-category-selected"} onClick={() => setCategory("transportation")}>
              <RiIcons.RiRestaurant2Line/>
              <span>Transportation</span>
            </li>
            <li className={category === "hotels" && "active-category-selected"} onClick={() => setCategory("hotels")}>
              <RiIcons.RiScissors2Fill/>
              <span>Hotels</span>
            </li>
            <li className={category === "sports" && "active-category-selected"} onClick={() => setCategory("sports")}>
              <RiIcons.RiScissors2Fill/>
              <span>Sports</span>
            </li>
            <li className={category === "entertainment" && "active-category-selected"} onClick={() => setCategory("entertainment")}>
              <RiIcons.RiScissors2Fill/>
              <span>Entertainment</span>
            </li>
            <li className={category === "artsCulture" && "active-category-selected"} onClick={() => setCategory("artsCulture")}>
              <RiIcons.RiScissors2Fill/>
              <span>Arts & Culture</span>
            </li>
            <li className={category === "beauty" && "active-category-selected"} onClick={() => setCategory("beauty")}>
              <MdIcons.MdOutlineHealthAndSafety/>
              <span>Beauty</span>
            </li>
            <li className={category === "fitness" && "active-category-selected"} onClick={() => setCategory("fitness")}>
              <MdIcons.MdOutlineHealthAndSafety/>
              <span>Fitness</span>
            </li>
            <li className={category === "health" && "active-category-selected"} onClick={() => setCategory("health")}>
              <GiIcons.GiHospital />
              <span>Health</span>
            </li>
            <li className={category === "bankingFinance" && "active-category-selected"} onClick={() => setCategory("bankingFinance")}>
              <RiIcons.RiScissors2Fill/>
              <span>Banking & Finance</span>
            </li>
            <li className={category === "clothing" && "active-category-selected"} onClick={() => setCategory("clothing")}>
              <GiIcons.GiClothes/>
              <span>Clothing</span>
            </li>
            <li className={category === "shoes" && "active-category-selected"} onClick={() => setCategory("shoes")}>
              <GiIcons.GiClothes/>
              <span>Shoes</span>
            </li>
            <li className={category === "gaming" && "active-category-selected"} onClick={() => setCategory("gaming")}>
              <TbIcons.TbDeviceGamepad2/>
              <span>Gaming</span>
            </li>
            <li className={category === "electronics" && "active-category-selected"} onClick={() => setCategory("electronics")}>
              <GiIcons.GiWireCoil/>
              <span>Electronics</span>
            </li>
            <li className={category === "homeRenovation" && "active-category-selected"} onClick={() => setCategory("homeRenovation")}>
              <RiIcons.RiScissors2Fill/>
              <span>Home Renovation</span>
            </li>
            <li className={category === "landscaping" && "active-category-selected"} onClick={() => setCategory("landscaping")}>
              <RiIcons.RiScissors2Fill/>
              <span>Landscaping</span>
            </li>
            <li className={category === "plumbing" && "active-category-selected"} onClick={() => setCategory("plumbing")}>
              <RiIcons.RiScissors2Fill/>
              <span>Plumbing</span>
            </li>

            <li className={category === "Barbers" && "active-category-selected"} onClick={() => setCategory("Barbers")}>
              <RiIcons.RiScissors2Fill/>
              <span>Barbers</span>
            </li>
            <li className={category === "Autos" && "active-category-selected"} onClick={() => setCategory("Autos")}>
              <GiIcons.GiHomeGarage/>
              <span>Autos & Vehicles</span>
            </li>
            <li className={category === "Dealership" && "active-category-selected"} onClick={() => setCategory("Dealership")}>
              <GiIcons.GiCarKey/>
              <span>Dealership</span>
            </li>
            <li className={category === "Gaming" && "active-category-selected"} onClick={() => setCategory("Gaming")}>
              <TbIcons.TbDeviceGamepad2/>
              <span>Gaming</span>
            </li>
            <li className={category === "Clothing" && "active-category-selected"} onClick={() => setCategory("Clothing")}>
              <GiIcons.GiClothes/>
              <span>Clothing & Shoes</span>
            </li>
            <li className={category === "Electronics" && "active-category-selected"} onClick={() => setCategory("Electronics")}>
              <GiIcons.GiWireCoil/>
              <span>Electronics</span>
            </li>
            <li className={category === "Literature" && "active-category-selected"} onClick={() => setCategory("Literature")}> 
              <BiIcons.BiBookContent/>
              <span>Books & Literature</span>
            </li>
            <li className={category === "Food" && "active-category-selected"} onClick={() => setCategory("Food")}>
              <GiIcons.GiHamburger/>
              <span>Fast Food</span>
            </li>
            <li className={category === "Medical" && "active-category-selected"} onClick={() => setCategory("Medical")}>
              <GiIcons.GiHospital />
              <span>Health & Medical</span>
            </li>
            <li className={category === "Gaming" && "active-category-selected"} onClick={() => setCategory("Gaming")}>
              <TbIcons.TbDeviceGamepad2/>
              <span>Gaming</span>
            </li>
            <li className={category === "restaurants" && "active-category-selected"} onClick={() => setCategory("restaurants")}>
              <RiIcons.RiRestaurant2Line/>
              <span>restaurants</span>
            </li>
          </ul>
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
