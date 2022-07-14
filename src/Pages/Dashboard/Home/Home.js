import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as DiIcons from "react-icons/di";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import { Button} from "react-bootstrap";
import "../Home/Home.css";
import BlastCard from '../../../Components/BlastCard/BlastCard';
import { Doughnut, Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { Link } from "react-router-dom";
import DashboardHeading from "../../../Components/DashboardHeading/DashboardHeading";
const Home = () => {
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
      <DashboardHeading name="Dashboard"/>
      <div className="box-container">
        {/* <div className="home-box">
          <h3>Recently Viewed Blasts</h3>
          <div className="blasts-container">
            <BsIcons.BsArrowLeftCircle className="arrow" />
            <BlastCard />
            <BlastCard />
            <BlastCard />
            <BsIcons.BsArrowRightCircle className="arrow" />
          </div>
        </div> */}
        

        <div className="home-box wd-100">
          <div className="header-home-box">
            <h2>Statistics</h2>
          </div>
          <h3>Your Activity</h3>
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
        </div>

        <div className="home-box">
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
      </div>
      <div className="box-container">
        
        <div className="home-box bar-chart">
          <h2>Traffic</h2>
          <h3>A recap of the number of times you've accessed a page</h3>
          <div className="statistics-chart">
            <Bar options={barOptions} data={barData} />
          </div>
        </div>

        <div className="home-box pie-chart">
          <h2>Activity</h2>
          <h3>A breakdown of your activity</h3>
          <div className="statistics-chart" style={{height:"26rem",position:"relative", marginBottom:"1%", padding:"1%"}}>
            <Doughnut data={doughnutData} width={"50%"} options={{ maintainAspectRatio: false }}/>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Home;
