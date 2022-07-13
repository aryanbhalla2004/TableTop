import "../DashboardHeading/DashboardHeading.css";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const DashboardHeading = ({ pageName }) => {
  const location = useLocation();
  const pathnameArray = location.pathname.split("/").splice(1);

  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const currentPage = capitalizeFirstLetter(
    pathnameArray[pathnameArray.length - 1]
  );

  const getPathOfCurrentPage = () => {
    const path = pathnameArray.map((word, index) => {
      return capitalizeFirstLetter(word) === currentPage ? (
        <div className="current_page" key={index}>
          {capitalizeFirstLetter(word)}
        </div>
      ) : (
        <div className="previous_page_wrapper" key={index}>
          <div className="previous_page">{capitalizeFirstLetter(word)}</div>
          <i className="bi bi-chevron-right page-indication-aero"></i>
        </div>
      );

      // return (
      //   <div key={index}>
      //     <h1>{word}</h1>
      //   </div>
      // );
    });
  };

  getPathOfCurrentPage();

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <div className="page-header">
        <div className="page-info">
          <h2>{currentPage}</h2>
          <p>Welcome to Intez Profile page</p>
        </div>
        <div className="path">
          {/* <div>Dashboard</div>
          <i className="bi bi-chevron-right"></i>
          <div className="current_page">Home</div> */}
          {getPathOfCurrentPage()}
        </div>
      </div>
      </motion.div>
  );
};
export default DashboardHeading;
