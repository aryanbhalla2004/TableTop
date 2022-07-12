import "../DashboardHeading/DashboardHeading.css";
import { useLocation, useNavigate } from "react-router-dom";
const DashboardHeading = ({ pageName }) => {
  const location = useLocation();
  const pathnameArray = location.pathname.split("/").splice(1);
  const capitalizeFirstLetter = (word) => {
    //stackoverflow
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
          <i className="bi bi-chevron-right"></i>
        </div>
      );

      // return (
      //   <div key={index}>
      //     <h1>{word}</h1>
      //   </div>
      // );
    });
    console.log(path);
    return path;
  };

  getPathOfCurrentPage();

  return (
    <div className="page-header">
      <div className="page-info">
        <h2>{currentPage}</h2>
        <p>Welcome To {currentPage} page</p>
      </div>
      <div className="path">
        {/* <div>Dashboard</div>
        <i className="bi bi-chevron-right"></i>
        <div className="current_page">Home</div> */}
        {getPathOfCurrentPage()}
      </div>
    </div>
  );
};
export default DashboardHeading;
