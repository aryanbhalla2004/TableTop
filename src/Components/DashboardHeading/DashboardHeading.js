import "../DashboardHeading/DashboardHeading.css";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
const DashboardHeading = (props) => {
  const location = useLocation();
  const pathnameArray = location.pathname.split("/").splice(1);

  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const currentPage = capitalizeFirstLetter(
    pathnameArray[pathnameArray.length - 1]
  );

  useEffect(() => {
    getPathOfCurrentPage();
  }, [])

  const getPathOfCurrentPage = () => {
    console.log(pathnameArray);
    
  };

  

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <div className="page-header">
        <div className="page-info">
          <h2>{props.name}</h2>
          <p>Welcome to Intez Profile page</p>
        </div>
        <div className="path">
          {
            pathnameArray.map((word, index) => (
              capitalizeFirstLetter(word) === currentPage ? (
              <div className="current_page" key={index}>
                {capitalizeFirstLetter(word)}
              </div>
              ) : (
                <div className="previous_page_wrapper" key={index}>
                  <div className="previous_page">{capitalizeFirstLetter(word)}</div>
                  <i className="bi bi-chevron-right page-indication-aero"></i>
                </div>
              )
            )) 
          }
        </div>
      </div>
      </motion.div>
  );
};
export default DashboardHeading;
