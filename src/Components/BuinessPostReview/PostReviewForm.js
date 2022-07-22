import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BsStar, BsStarHalf, BsStarFill } from 'react-icons/bs';
import "./PostReviewForm.css"
import ReactStars from "react-rating-stars-component";
const PostReviewForm = (props) => {
  return (
    <div className={props.ReviewBox ? "review-box-container show-logout-pop-box" : "review-box-container hide-logout-pop-box"}>
      <div className='review-box'>
        <div className='review-form-header'>
          <div className='review-form-header-content'>
            <h3>Your Review</h3>
            <p>Are you sure you want to logoff? All your progress and unsaved changes will be lost.</p>
          </div>
          <button onClick={() => props.SetReviewBox(!props.ReviewBox)}><AiOutlineClose/></button>
        </div>
        <form>
          <div class="d-flex">
            <div class="mb-3 col-md-6 rm-padding-left">
              <label for="emailAddress" class="form-label review-form-lable">First Name</label>
              <input type="Name" className="form-control" id="emailAddress" required="" name="firstName" placeholder="First Name"/>              
            </div>
            <div class="mb-3 col-md-6  rm-padding-left rm-padding-right">
              <label for="emailAddress" class="form-label review-form-lable">Last Name</label>
              <input type="Name" className="form-control" id="emailAddress" required="" name="lastName" placeholder="Last Name"/>
            </div>
            </div>
          <div class="mb-3">
            <label for="emailAddress" class="form-label review-form-lable">Email Address</label>
            <input type="email" className="form-control" id="emailAddress" required="" name="email"  placeholder="Enter Your Email"/>
          </div>
          <div className='d-flex'>
            <div class="mb-3 col-md-6 rm-padding-left select-field-container">
              <label for="emailAddress" class="form-label review-form-lable">Service Type</label>
              <select className="select-field-review">
                <option>Customer Service & Hospitality</option>
                <option>Cleanliness</option>
                <option>Cleanliness</option>
                <option>Accuracy</option>
                <option>Location</option>
              </select>
            </div>
            <div class="mb-3 col-md-6 rm-padding-left rm-padding-right">
              <label for="emailAddress" class="form-label review-form-lable">Rating</label>
              <ReactStars count={5} size={20} isHalf={true} emptyIcon={<BsStar/>} halfIcon={<BsStarHalf/>} fullIcon={<BsStarFill/>} activeColor="var(--logo-color)"/>
            </div>
          </div>
          <div class="mb-3">
            <label for="emailAddress" class="form-label review-form-lable">Message</label>
            <textarea className="form-control"></textarea>
          </div>
          
          <button className="ghost-button-home">Post Review</button>
        </form>
      </div>
    </div>
  )
}

export default PostReviewForm;
