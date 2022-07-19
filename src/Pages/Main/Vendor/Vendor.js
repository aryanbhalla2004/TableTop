import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import * as RiIcons from "react-icons/ri";
import {BsTelephone} from "react-icons/bs";
import {AiOutlineMail, AiOutlineGlobal} from "react-icons/ai";
// import DetailPageReview from "./DetailPageReview";
import "./Vendor.css";
const Vendor = () => {
  return (
    <div className="vendor-page-business-container">
      <div className="content-sizing-box">
        <div className="vendor-page-business-top-info">
          
          <div className="vendor-page-top-right">
            <h2 className="vendor-page-business-name">My Burger Place</h2>
            <div className="vendor-page-business-ratings-review-location">
              <div className="vendor-page-ratings">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <div className="vendor-page-ratings-number right-border">5.0<i class="bi bi-dot"></i><div className="vendor-page-reviews">8 reviews</div> </div>
              </div>
              <div className="vendor-page-location right-border"><i class="bi bi-person"></i> Aryan Bhalla</div>
              <div className="vendor-page-location location-details-header"><i class="bi bi-geo-alt"></i> R3T-1P4 Winnipeg MB, Canada</div>
            </div>
          </div>
          <div className="vendor-page-top-left-options">
            <div className="vendor-share-btn-wrapper">
              <i class="bi bi-upload"></i>
              <div className="vendor-share-btn">Share</div>
            </div>
            <div className="vendor-save-btn-wrapper">
              <i class="bi bi-heart"></i>
              <div className="vendor-save-btn">Save</div>
            </div>
          </div>
        </div>
        <div className="vendor-page-images-container">
           <div className="live-video">
            <span className="live-icon-info"><Spinner animation="grow" size="sm"/> Live</span>
           </div>
           <div className="simple-images-details-vendor"></div>
           <div className="simple-images-details-vendor top-round-edge"></div>
           <div className="simple-images-details-vendor"></div>
           <div className="simple-images-details-vendor bottom-round-edge"></div> 
        </div>
        <div className="Vendor-page-business-info">
          <div className="Vendor-page-business-info-leftSide">
            <div className="Vendor-page-VendorContainer">
              <div>
                <h3 className="Vendor-page-VendorName">My Burger Place hosted by Zach</h3>
                <div className="Vendor-page-business-tables">
                  <div className="category-item"><RiIcons.RiRestaurant2Line/> Restaurent</div>
                  <div className="category-item"><i class="bi bi-clock"></i>Open</div>
                  <div className="category-item"><i class="bi bi-currency-dollar"></i>Expensive</div>
                </div>
              </div>
              <img className="Vendor-page-Vendor-Picture" src="https://a0.muscache.com/im/pictures/user/7c767dcb-ec34-4477-b688-c2e59f513183.jpg?im_w=240"/>
            </div>
            
            <div className="Vendor-page-business-allLinks">
              <h3>Overview</h3>
              <ul className="overview-list">
                <li>
                  <i class="bi bi-clock"></i>
                  <div>
                    <span>Location Hours</span>
                    <a>Mon - Sun (7:00-12:00)</a>
                  </div>
                </li>
                <li>
                  <BsTelephone/>
                  <div>
                    <span>Phone Number</span>
                    <a>+1 (204)-213-3433</a>
                  </div>
                </li>
                <li>
                  <AiOutlineMail/>
                  <div>
                    <span>Email Address</span>
                    <a>info@myburgerplace.com</a>
                  </div>
                </li>
                <li>
                  <AiOutlineGlobal/>
                  <div>
                    <span>Website Link</span>
                    <a>https://www.myburgerplace.com</a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="Vendor-page-business-description ">
              <h3>Description</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, omnis. Modi provident rerum tenetur quo praesentium, illum placeat veritatis optio eaque velit perferendis rem dolores corrupti cumque culpa eveniet ipsa. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos nemo facere quasi expedita suscipit! Accusantium sapiente explicabo eligendi ad asperiores? Tempore cumque maxime distinctio minima accusantium consectetur quasi praesentium sapiente?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate facilis repellat dolore dolorum sunt labore, adipisci maxime cumque quod debitis iste numquam natus saepe, repellendus cum impedit! Quas, autem eum!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur culpa consectetur, nobis hic maxime commodi, nostrum, doloribus alias quo quidem dolore inventore fugit asperiores corrupti minima aliquid aspernatur? Hic, officia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis amet dignissimos quaerat laudantium? Sint excepturi soluta quia inventore suscipit accusantium nostrum ipsa illo repellendus! Quod laboriosam impedit blanditiis quidem maiores?</p>
            </div>
          </div>
        
          <div className="Vendor-page-business-info-rightSide">
            
          </div>
        </div>

        <div className="vendor-page-review-container">
          <div className="vendor-page-ratings-review-heading">
            <div className="vendor-page-ratings-heading">
              <i className="bi bi-star-fill"></i>
              <div className="vendor-page-ratings-number">4.5</div>
            </div>
            <div>.</div>
            <div>8 reviews</div>
          </div>
          <div className="vendor-page-review-categories-list">
            <div className="vendor-page-category-container">
              <div className="vendor-page-category-name-heading">
                Cleanliness
              </div>
              <div className="vendor-page-progress-bar">
                <progress id="file" value="30" max="100" />
                <div className="vendor-page-rating-on-category">3.2</div>
              </div>
            </div>
            <div className="vendor-page-category-container">
              <div className="vendor-page-category-name-heading">Dining</div>
              <div className="vendor-page-progress-bar">
                <progress id="file" value="90" max="100" />
                <div className="vendor-page-rating-on-category">3.2</div>
              </div>
            </div>
            <div className="vendor-page-category-container">
              <div className="vendor-page-category-name-heading">
                Cleanliness
              </div>
              <div className="vendor-page-progress-bar">
                <progress id="file" value="90" max="100" />
                <div className="vendor-page-rating-on-category">3.2</div>
              </div>
            </div>
            <div className="vendor-page-category-container">
              <div className="vendor-page-category-name-heading">
                Cleanliness
              </div>
              <div className="vendor-page-progress-bar">
                <progress id="file" value="90" max="100" />
                <div className="vendor-page-rating-on-category">3.2</div>
              </div>
            </div>
            <div className="vendor-page-category-container">
              <div className="vendor-page-category-name-heading">
                Cleanliness
              </div>
              <div className="vendor-page-progress-bar">
                <progress id="file" value="50" max="100" />
                <div className="vendor-page-rating-on-category">3.2</div>
              </div>
            </div>
            <div className="vendor-page-category-container">
              <div className="vendor-page-category-name-heading">
                Cleanliness
              </div>
              <div className="vendor-page-progress-bar">
                <progress id="file" value="90" max="100" />
                <div className="vendor-page-rating-on-category">3.2</div>
              </div>
            </div>
          </div>
          <div className="vendor-page-reviews-list">
            {/* <DetailPageReview />
            <DetailPageReview />
            <DetailPageReview />
            <DetailPageReview /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Vendor;