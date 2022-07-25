import { useState } from "react";
import "./Form.css";

const Form = ({ addAmenity }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addAmenity(inputValue);
    setInputValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        onChange={(event) => setInputValue(event.target.value)}
        className="new-amenity" 
        placeholder="Enter an amenity" 
        autoFocus="" 
        value={inputValue}
      />
      <button className="submit" onClick={handleSubmit}></button>
    </form>
  );
}

export default Form;