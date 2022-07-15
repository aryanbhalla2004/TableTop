import React, {useState} from 'react'
import { FiSearch } from 'react-icons/fi';
import { IoIosClose } from 'react-icons/io';
import { AiOutlineClose } from 'react-icons/ai';
import Spinner from 'react-bootstrap/Spinner';
import "./SearchBox.css";
import { TbLayoutSidebarLeftCollapse } from 'react-icons/tb';

const SearchBox = (props) => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState({
    value: ""
  });

  const updateUserInput = (e) => {
    setSearch(prevInput => ({
      ...prevInput, [e.target.name]: e.target.value
    }));

  }

  return (
    <div className={props.Show ? "show-side-search search-box-container" : "hide-side-search search-box-container"}>
      <div className='result-input-wrapper'>
        <div className='search-box-container-wrapper'>
          <form className='search-field' autoComplete='false'>
            <FiSearch/>
            <input placeholder='Search...' type="text" value={search.value} name="value" onChange={updateUserInput}/> 
            {!loading ? <IoIosClose className={search.value != "" && "show-icon"} onClick={() => setSearch({value: ""})}/> : <Spinner animation="border" size="sm"/>}
          </form>
        </div>
        <div className='search-results'>
          <div className='result-section'>
            <ul>
              <li>
                <span>
                  <img src="https://cdn.pixabay.com/photo/2016/11/29/10/09/bakery-1868925_1280.jpg"/>
                </span>
                <p>Clay Oven - <span>25 km away</span></p>
              </li>
              <li>
                <span>
                  <img src="https://cdn.pixabay.com/photo/2016/11/29/10/09/bakery-1868925_1280.jpg"/>
                </span>
                <p>Macdonald - <span>25 km away</span></p>
              </li>
              <li>
                <span>
                  <img src="https://cdn.pixabay.com/photo/2016/11/29/10/09/bakery-1868925_1280.jpg"/>
                </span>
                <p>Spice Cricle - <span>25 km away</span></p>
              </li>
              <li>
                <span>
                  <img src="https://cdn.pixabay.com/photo/2016/11/29/10/09/bakery-1868925_1280.jpg"/>
                </span>
                <p>Clay Oven - <span>25 km away</span></p>
              </li>
              <li>
                <span>
                  <img src="https://cdn.pixabay.com/photo/2016/11/29/10/09/bakery-1868925_1280.jpg"/>
                </span>
                <p>The Ked Store - <span>25 km away</span></p>
              </li>
              
            </ul>
          </div>        
        </div>
      </div>
      <div className='collapse-container'>
        <h5>No Results Found</h5>
        <AiOutlineClose onClick={() => props.SetShowSearchBox(!props.Show)}/>
      </div>
    </div>
  )
}

export default SearchBox;