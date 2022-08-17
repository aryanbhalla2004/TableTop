import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

// let autocomplete;
//   function initAutocomplete() {
//     autocomplete = new google.maps.places.Autocomplete(
//       document.getElementById('autocomplete'),
//       {
//         types: ['establishment'],
//         componentRestrictions: {'country': ['CA']},
//         fields: ['place_id', 'geometry', 'name']
//       }
//     );

//     autocomplete.addListener('place_changed', onPlaceChanged);
//   }

//   function onPlaceChanged() {
//     var place = autocomplete.getPlace();

//     if (!place.geometry) {
//       // User did not select a prediction; reset the input field
//       document.getElementById('autocomplete').placeholder =
//       'Enter a place';
//     } else {
//       // Dsiplay details about the valid place
//       document.getElementById('details').innerHtTML = place.name;
//     }
//   }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
