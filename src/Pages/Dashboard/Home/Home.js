import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as DiIcons from "react-icons/di";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as HiIcons from "react-icons/hi";
import { Button} from "react-bootstrap";
import "../Home/Home.css";
import BlastCard from '../../../Components/BusinessCard/BusinessCard';
import { Doughnut, Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { Link, useOutletContext } from "react-router-dom";
import DashboardHeading from "../../../Components/DashboardHeading/DashboardHeading";
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import ScrollList from '../../../Components/ScrollList/ScrollList';
import LandingPageBusinessCard from './../../../Components/LandingPageBusinessCard/LandingPageBusinessCard';

const Home = () => {
  const [currentUser, currentUserInfo] = useOutletContext();

  const numberOfPicture = [1, 2, 3, 4, 5, 6];

  const doughnutData = {
    labels: ["Reviews Left", "Blasts Viewed", "Businesses Favorited", "Businesses Viewed", "Messages Recieved", "Unread Messages"],
    datasets: [
      {
        data: [24, 62, 12, 74, 21, 4],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#db3d44",
          "#4257b2",
          "#3F5B2A"
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#db3d44",
          "#4257b2",
          "#36A2EB"
        ]
      }
    ]
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top"
      },
      title: {
        display: true,
      }
    },
  };
  
  const barData = {
    labels: ["Landing", "Business", "Dashboard", "Login"],
    datasets: [
      {
        label: "Visited",
        data: [74, 24, 52, 12],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#db3d44",
        ]
      }
    ]
  };
  
  return (
    <>
      <DashboardHeading name="Dashboard" currentUserInfo={currentUserInfo}/>
      <div className="d-home-container">
        <div className="box-container">
          <div className="d-home-box wd-100">
            <div className="header-d-home-box">
              <h2>Statistics</h2>
            </div>
            <h3>Your Activity</h3>
            <div className="statistics-wrapper">
              <ul className="user-statistics-information-panel">
                <li>
                  <span>Reviews Left</span>
                  <h5>24</h5>
                  <div className="statistic-box reviews-left"></div>
                </li>
                <li>
                  <span>Blasts Viewed</span>
                  <h5>62</h5>
                  <div className="statistic-box blasts-viewed"></div>
                </li>
                <li>
                  <span>Businesses Favorited</span>
                  <h5>12</h5>
                  <div className="statistic-box businesses-favorited"></div>
                </li>
                <li>
                  <span>Businesses Viewed</span>
                  <h5>74</h5>
                  <div className="statistic-box businesses-viewed"></div>
                </li>
                <li>
                  <span>Messages Recieved</span>
                  <h5>21</h5>
                  <div className="statistic-box messages-recieved"></div>
                </li>
                <li>
                  <span>Unread Messages</span>
                  <h5>4</h5>
                  <div className="statistic-box unread-messages"></div>
                </li>
              </ul>
              <div className="statistics-chart">
                <Doughnut data={doughnutData} options={{ maintainAspectRatio: false }}/>
              </div>
            </div>
          </div>
        </div>
        <div className="box-container">
          
        <div className="d-home-box tip-box">
            <h2>Tips</h2>
            <h3>Quick links to help you get started</h3>
            <div className="tip-links">
              <p><a href="">Explore businesses nearby</a></p>
              <p><a href="">Have any questions? Visit out FAQ</a></p>
              <p><a href="">Learn more about us?</a></p>
              <p><a href="">Filler</a></p>
              <p><a href="">Filler</a></p>
            </div>
         </div>

          <div className="d-home-box history-box">
            <div className="landing-page-popular-businesses-container">
              <div className="content-sizing-box landing-page-item-wrapper">
                <div className="section-single-container">
                  <div className="section-header-part"> 
                    <h2>Recently Viewed</h2>
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

            {/* <h2>History</h2>
            <h3>Recently Viewed Businesses</h3>
            <div className="blasts-container">
              <ScrollList />
            </div> */}
          </div>
          {/* <div className="landing-page-popular-businesses-container">
            <div className="content-sizing-box landing-page-item-wrapper">
              <div className="section-single-container">
                <div className="section-header-part"> 
                  <h2>Trending Restarunt</h2>
                  <p>List of business show below are one of the most popular restaurent around you.</p>
                </div>
                <div className="selection-stats">
                  <a>Show (6)</a>
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
          </div> */}
        </div>
        <div className="box-container">
          
          <div className="profile-box wd-100">
            <div className="header-profile-box">
              <h2>Failed Attempts</h2>
              <p>Recent activity on your account were fail attempts.</p>
            </div>
            <table className='activity-table'>
              <thead>
                <th>Action</th>
                <th>When</th>
                <th>Location</th>
                <th>IP Address</th>
                <th></th>
              </thead>
              <tbody>
                <tr>
                  <td>Login</td>
                  <td>1 day ago</td>
                  <td>Canada</td>
                  <td>123.232.232.2</td>
                  <td><Button className="btn-danger">Block IP</Button></td>
                </tr>
                <tr>
                  <td>Login</td>
                  <td>1 day ago</td>  
                  <td>Canada</td>
                  <td>123.232.232.2</td>
                  <td><Button className="btn-danger">Block IP</Button></td>
                </tr>
                <tr>
                  <td>Login</td>
                  <td>1 day ago</td>  
                  <td>Canada</td>
                  <td>123.232.232.2</td>
                  <td><Button className="btn-danger">Block IP</Button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* <div className="box-container">
        
        <div className="d-home-box bar-chart">
          <h2>Traffic</h2>
          <h3>A recap of the number of times you've accessed a page</h3>
          <div className="statistics-chart">
            <Bar options={barOptions} data={barData} />
          </div>
        </div>

        <div className="d-home-box pie-chart">
          <h2>Activity</h2>
          <h3>A breakdown of your activity</h3>
          <div className="statistics-chart" style={{height:"26rem",position:"relative", marginBottom:"1%", padding:"1%"}}>
            <Doughnut data={doughnutData} width={"50%"} options={{ maintainAspectRatio: false }}/>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Home;
