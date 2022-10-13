import React from 'react'
import { useState } from 'react';

export const BusinessSearchBar = (props) => {
  const [showDrop, setShowDrop] = useState(false);
  const [currentSelectedCategorie, setCurrentCategorie] = useState({});
  return (
    <form className="main-search-box-header">
      <span className="small-text-flow-form-landing">Your Destination <i class="bi bi-arrow-right"></i></span>
      <div className="single-field-holder-landing-page search-box-size">
        <div className="putting-two-in-one">
          <input placeholder="e.g. Pizza Place, Hair Salon, Garage" type="text" className="left-radius" required></input>
          <i class="bi bi-search"></i>
        </div>
      </div>
      <div className="single-field-holder-landing-page">
        <div className="putting-two-in-one">
          <input placeholder="City, State or Zip" type="text" required ></input>
          <i class="bi bi-geo-alt"></i>
        </div>
      </div>
      <div className="single-field-holder-landing-page">
        <div className='select-field-categries-container' onClick={() => setShowDrop(!showDrop)}>
          <span><i className={currentSelectedCategorie.icon}></i>&nbsp;{currentSelectedCategorie.name}</span>
          <i class="bi bi-chevron-down"></i>
          <div className={showDrop ? 'items-container show-dropdown' : 'items-container hide-dropdown'}>
            <ul className='category-list-box'>
              {props.Category && props.Category.map(item => (
                <li onClick={() => setCurrentCategorie(item)} className={currentSelectedCategorie.name === item.name && "active-categorie"}>
                  <i className={item.icon}></i>
                  <p>{item.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </form>
  )
}

export default BusinessSearchBar;