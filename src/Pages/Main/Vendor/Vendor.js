import { Link } from "react-router-dom";
import { Button, Spinner } from "react-bootstrap";
import { motion } from "framer-motion";
import * as RiIcons from "react-icons/ri";
import {BsTelephone} from "react-icons/bs";
import {AiOutlineMail, AiOutlineGlobal} from "react-icons/ai";
import {MdOutlineRateReview} from "react-icons/md";
import DetailPageReview from "../../../Components/BusinessReview/DetailPageReview";
import "./Vendor.css";
import { useState } from "react";
import PostReviewForm from "../../../Components/BuinessPostReview/PostReviewForm";
import { Helmet } from "react-helmet";

const Vendor = (props) => {
  const [reviewBox, setReviewBox] = useState(false);
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <Helmet>
        <title>Business Information | TableTop</title>
      </Helmet>
      {reviewBox && <PostReviewForm ReviewBox={reviewBox} SetReviewBox={setReviewBox}/> }
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
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/FsKal7K2zJY?autoplay=1&controls=0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
            <div className="simple-images-details-vendor">
              <img src="https://images.unsplash.com/photo-1560611588-163f295eb145?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"></img>
            </div>
            <div className="simple-images-details-vendor top-round-edge">
            <img src="https://images.unsplash.com/photo-1657937322212-2970a841a5f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"></img>
            </div>
            <div className="simple-images-details-vendor">
            <img src="https://images.unsplash.com/photo-1523145149804-5d8e0c044753?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"></img>
            </div>
            <div className="simple-images-details-vendor bottom-round-edge">
            <img src="https://images.unsplash.com/photo-1447078806655-40579c2520d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"></img></div> 
          </div>
          <div className="Vendor-page-business-info">
            <div className="Vendor-page-business-info-leftSide">
              <div className="Vendor-page-VendorContainer">
                <div>
                  <h3 className="Vendor-page-VendorName">My Burger Place hosted by Zach</h3>
                  <div className="Vendor-page-business-tables">
                    <div className="category-item"><RiIcons.RiRestaurant2Line/> Restaurent</div>
                    <div className="category-item"><i class="bi bi-clock"></i>Open</div>
                    <div className="category-item"><span><i class="bi bi-currency-dollar"></i><i class="bi bi-currency-dollar"></i><i class="bi bi-currency-dollar"></i></span>Expensive</div>
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate facilis repellat dolore dolorum sunt labore, adipisci maxime cumque quod debitis iste numquam natus saepe, repellendus cum impedit! Quas, autem eum!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur culpa consectetur, nobis hic maxime commodi, nostrum, doloribus alias quo quidem dolore inventore fugit asperiores corrupti minima aliquid aspernatur? Hic, officia. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis amet dignissimos quaerat laudantium? Sint excepturi soluta quia inventore suscipit accusantium nostrum ipsa illo repellendus! Quod laboriosam impedit blanditiis quidem maiores?</p>
              </div>
            </div>
          
            <div className="Vendor-page-business-info-rightSide">
              <div className="message-box-details-page">
                <h3>Direct Message</h3>
                {!props.CurrentUser && <>
                <p>Private inquires can be only sent, if you have a account with <span className="primary-color">Tabletop</span>. Click on the login button and start interacting with local business.</p>
                <Button className="full-width" to="/user/login">Login</Button>
                </>}

                {props.CurrentUser && <>
                <form className="inital-message-form">
                  <label>Your Message</label>
                  <textarea value="Hi, are you guys open today?"></textarea>
                </form>
                <Button className="full-width" to="/user/login">Send Message</Button>
                <p className="send-message-text">To deter and identify potential fraud, spam or suspicious behaviour, we anonymize your email address (as applicable) and reserve the right to monitor conversations. By sending the message you agree to our Terms of Use and Privacy Policy.</p>
                </>}
              </div>

              <div className="message-box-details-page">
                <h3>Location</h3>
                <iframe width="100%" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
              </div>
            </div>
          </div>

          <div className="vendor-page-review-container">
            <div className="vendor-page-ratings-review-heading">
              <div className="vendor-page-ratings-number"><i className="bi bi-star-fill"></i>&nbsp;4.5<div className="total-review-count-review-section"><i class="bi bi-dot"></i>8 reviews</div></div>
              <button className="ghost-button-home" onClick={() => setReviewBox(!reviewBox)}><MdOutlineRateReview/>&nbsp;Post Review</button>
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
              <DetailPageReview />
              <DetailPageReview />
              <DetailPageReview />
              <DetailPageReview />
            </div>
            <button className="ghost-button-home">Show all 8 reviews</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Vendor;