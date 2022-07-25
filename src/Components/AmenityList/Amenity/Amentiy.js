import { useState } from "react";
import "./Amenity.css";

const Amenity = (props) => {
  const { id, description, deleteAmenity } = props;

  // const handleClick = (event) => {
  //   console.log("button clicked");
  // }

//   const [isChecked, setIsChecked] = useState(completed);
//   const handleChange = () => {
//     toggleRepair(id);
//     setIsChecked(!isChecked);
//   }

  return (
    // <li data-id={id} className={completed && "completed"}>
    // an conditional operator returns the last value it interacted with
    <li data-id={id}>
      <div className="view">
        {/* <input 
          onChange={handleChange} 
          className="toggle" type="checkbox" 
          checked={isChecked}
        /> */}
        <label>{description}</label>
        <button onClick={() => deleteAmenity(id)} className="destroy"></button>
        {/* <button onClick={handleClick} className="destroy"></button> */}
      </div>
    </li>
  );
};

export default Amenity;