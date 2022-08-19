import "./ViewLive.css";
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";

import { getLocations } from "./MapBoxAPI";
import * as turf from "@turf/turf";
import restaurantImg from "./restaurant.png";
import vendorMarker from "./location.png";
import "mapbox-gl/dist/mapbox-gl.css";
mapboxgl.accessToken = process.env.REACT_APP_MAP_TOKEN;

const ViewLive = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const userLocationMarker = useRef(null);
  const isVendorLocationLayer = useRef(false);
  const [geoData, setGeoData] = useState(null);
  const [lng, setLng] = useState(-97.137494);
  const [lat, setLat] = useState(49.899754);
  const [zoom, setZoom] = useState(11);
  const [queryValue, setQueryValue] = useState("");
  const [queryResult, setQueryResult] = useState("");
  const [vendorLocations, setVendorLocations] = useState([]);
  const [userLocationQuery, setUserLocationQuery] = useState("");
  const [userLocationQueryResult, setUserLocationQueryResult] = useState([]);
  const [userLocation, setUserLocation] = useState([]);
  const [userCurrent, setUserCurrent] = useState([]);
  const [radiusValue, setRadiusValue] = useState(1);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
    route();
    // getCurrent();
  }, [map.current, queryResult]);
  useEffect(() => {
    getLocations(userLocationQuery).then((ul) =>
      setUserLocationQueryResult(ul.features)
    );
  }, [userLocationQuery]);
  useEffect(() => {
    getLocations(queryValue) &&
      getLocations(queryValue).then((locations) =>
        setVendorLocations(locations.features)
      );
    getLocations(queryValue).then((locations) => setGeoData(locations));
  }, [queryValue]);
  useEffect(() => {
    if (!map.current.getLayer("circle-fill")) return;
    map.current.removeLayer("circle-fill");
    map.current.removeSource("circle-fill");
    var options = {
      steps: 50,
      units: "kilometers",
      properties: { foo: "bar" },
    };
    var circle = turf.circle(userCurrent, radiusValue, options);
    map.current.addLayer({
      id: "circle-fill",
      type: "fill",
      source: {
        type: "geojson",
        data: circle,
      },
      paint: {
        "fill-color": "pink",
        "fill-opacity": 0.4,
      },
    });
    if (radiusValue >= 1 && radiusValue <= 3) {
      map.current.flyTo({
        center: userCurrent,
        zoom: 13,
        essential: true, // this animation is considered essential with respect to prefers-reduced-motion
      });
    } else if (radiusValue >= 4 && radiusValue <= 6) {
      map.current.flyTo({
        center: userCurrent,
        zoom: 12,
        essential: true, // this animation is considered essential with respect to prefers-reduced-motion
      });
    } else if (radiusValue >= 7 && radiusValue <= 9) {
      map.current.flyTo({
        center: userCurrent,
        zoom: 11,
        essential: true, // this animation is considered essential with respect to prefers-reduced-motion
      });
    } else {
      map.current.flyTo({
        center: userCurrent,
        zoom: 10,
        essential: true, // this animation is considered essential with respect to prefers-reduced-motion
      });
    }
  }, [radiusValue]);

  const route = () => {
    map.current.addControl(new mapboxgl.NavigationControl());

    map.current.on("load", () => {
      //code
      map.current.loadImage(restaurantImg, (error, image) => {
        if (error) throw error;
        if (!map.current.hasImage("custom-marker"))
          map.current.addImage("custom-marker", image);
      });
      map.current.loadImage(vendorMarker, (error, image) => {
        if (error) throw error;
        if (!map.current.hasImage("vendorMarker"))
          map.current.addImage("vendorMarker", image);
      });
    });
  };

  const getVendorMarkers = () => {
    // Add a symbol layer
    for (var data of geoData.features) {
      data.properties.description = data.place_name;
    }
    console.log(geoData);
    map.current.addLayer({
      id: "vendorLocations",
      type: "symbol",
      source: {
        type: "geojson",
        data: geoData,
      },
      layout: {
        "icon-image": "vendorMarker",
        // get the title name from the source's "title" property
        "text-field": ["get", "title"],
        "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
        "text-offset": [0, 1.25],
        "text-anchor": "top",
      },
    });

    const popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false,
    });
    //when mouseover the marker, events happen
    map.current.on("mouseenter", "vendorLocations", (e) => {
      //console.log(e);
      // Change the cursor style as a UI indicator.
      map.current.getCanvas().style.cursor = "pointer";

      // Copy coordinates array.
      const coordinates = e.features[0].geometry.coordinates;
      // const description = e.features[0].description;
      const description = e.features[0].properties.description;
      const distance = e.features[0].properties.distance;
      const address = e.features[0].properties.address;
      const category = e.features[0].properties.category;
      // Ensure that if the map is zoomed out such that multiple
      // copies of the feature are visible, the popup appears
      // over the copy being pointed to.
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      // Populate the popup and set its coordinates
      // based on the feature found.
      popup
        .setLngLat(coordinates)
        .setHTML(
          distance
            ? `<p>${description}</p><p>${distance.toFixed(1)}km</p>`
            : `<p>${description}</p>`
        )
        .addTo(map.current);
    });
    //when click vendor marker, go to the vendor page
    // map.current.on("click", "vendorLocations", (e) => {
    //   window.location.href = "/vendor/2";
    // });
    map.current.on("mouseleave", "vendorLocations", () => {
      map.current.getCanvas().style.cursor = "";
      popup.remove();
    });
  };

  const getCurrent = () => {
    // get current geocode

    navigator.geolocation.getCurrentPosition(
      function (position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        //display current location on map
        userLocationMarker.current != null &&
          userLocationMarker.current.remove(); //delete previous marker
        if (map.current.getLayer("circle-fill") != null) {
          map.current.removeLayer("circle-fill");
          map.current.removeSource("circle-fill");
        }
        var options = {
          steps: 50,
          units: "kilometers",
          properties: { foo: "bar" },
        };
        var circle = turf.circle([lon, lat], radiusValue, options);

        userLocationMarker.current = new mapboxgl.Marker({
          color: "blue",
          draggable: false,
        })
          .setLngLat([lon, lat])
          .addTo(map.current);

        map.current.addLayer({
          id: "circle-fill",
          type: "fill",
          source: {
            type: "geojson",
            data: circle,
          },
          paint: {
            "fill-color": "pink",
            "fill-opacity": 0.5,
          },
        });

        map.current.flyTo({
          center: [lon, lat],
          zoom: 13,
          essential: true, // this animation is considered essential with respect to prefers-reduced-motion
        });
        setUserCurrent([lon, lat]);
      },
      function (error) {
        console.error("Error Code = " + error.code + " - " + error.message);
      }
    );
  };
  const handleSubmitUserLocation = (e) => {
    e.preventDefault();

    userLocationMarker.current != null && userLocationMarker.current.remove(); //delete previous marker
    if (map.current.getLayer("circle-fill") != null) {
      map.current.removeLayer("circle-fill");
      map.current.removeSource("circle-fill");
    }
    var options = {
      steps: 50,
      units: "kilometers",
      properties: { foo: "bar" },
    };
    var circle = turf.circle(
      userLocationQueryResult[0].center,
      radiusValue,
      options
    );
    if (userLocationQueryResult.length > 0) {
      userLocationMarker.current = new mapboxgl.Marker({
        color: "blue",
        draggable: false,
      })
        .setLngLat(userLocationQueryResult[0].center)
        .addTo(map.current);

      map.current.addLayer({
        id: "circle-fill",
        type: "fill",
        source: {
          type: "geojson",
          data: circle,
        },
        paint: {
          "fill-color": "pink",
          "fill-opacity": 0.5,
        },
      });

      map.current.flyTo({
        center: userLocationQueryResult[0].center,
        zoom: 13,
        essential: true, // this animation is considered essential with respect to prefers-reduced-motion
      });
    }
    setUserCurrent(userLocationQueryResult[0].center);
    setUserLocationQuery("");
  };

  const handleClickUserLocationSearch = (location) => {
    userLocationMarker.current != null && userLocationMarker.current.remove(); //delete previous marker
    if (map.current.getLayer("circle-fill") != null) {
      map.current.removeLayer("circle-fill");
      map.current.removeSource("circle-fill");
    }
    var options = {
      steps: 50,
      units: "kilometers",
      properties: { foo: "bar" },
    };
    var circle = turf.circle(location.center, radiusValue, options);
    if (userLocationQueryResult.length > 0) {
      userLocationMarker.current = new mapboxgl.Marker({
        color: "blue",
        draggable: false,
      })
        .setLngLat(location.center)
        .addTo(map.current);

      map.current.addLayer({
        id: "circle-fill",
        type: "fill",
        source: {
          type: "geojson",
          data: circle,
        },
        paint: {
          "fill-color": "pink",
          "fill-opacity": 0.5,
        },
      });

      map.current.flyTo({
        center: location.center,
        zoom: 13,
        essential: true, // this animation is considered essential with respect to prefers-reduced-motion
      });
    }
    setUserCurrent(location.center);
    setUserLocationQuery("");
  };

  const handleSearchVendorSubmit = (e) => {
    e.preventDefault();

    if (isVendorLocationLayer.current == true) {
      map.current.removeLayer("vendorLocations");
      map.current.removeSource("vendorLocations");
    }

    if (geoData.features.length == 1) {
      getVendorMarkers();
      map.current.flyTo({
        center: geoData.features[0].geometry.coordinates,
        zoom: 14,
        essential: true, // this animation is considered essential with respect to prefers-reduced-motion
      });
    } else if (geoData.features.length > 1) {
      getVendorMarkers();
      const center =
        userCurrent.length > 0 ? userCurrent.center : [-97.137494, 49.899];
      map.current.flyTo({
        center: center,
        zoom: 10,
        essential: true, // this animation is considered essential with respect to prefers-reduced-motion
      });
    }
    setQueryValue("");
    isVendorLocationLayer.current = true;
  };
  const handleClickVendorSearch = (location) => {
    if (isVendorLocationLayer.current) {
      map.current.removeLayer("vendorLocations");
      map.current.removeSource("vendorLocations");
    }

    getVendorMarkers();
    map.current.flyTo({
      center: location.center,
      zoom: 14,
      essential: true, // this animation is considered essential with respect to prefers-reduced-motion
    });

    setQueryValue("");
    isVendorLocationLayer.current = true;
  };
  const filterbyDistance = (vendor) => {
    var result = true;
    var distance = 0;
    if (userCurrent.length > 0) {
      distance = turf.distance(userCurrent, vendor.center, {
        units: "kilometers",
      });
    }
    if (distance >= radiusValue) {
      result = false;
      const index = geoData.features.findIndex((data) => data.id === vendor.id);
      if (index > -1) {
        geoData.features.splice(index, 1);
      }
    } else if (distance < radiusValue) {
      const index = geoData.features.findIndex((data) => data.id === vendor.id);
      if (index > -1) {
        geoData.features[index].properties.distance = distance;
      }
    }

    return result;
  };
  return (
    <>
      <div className="Map-SearchBox">
        <div>
          <form onSubmit={handleSearchVendorSubmit} className="Map-SearchForm">
            <input
              className="Map-Input"
              onChange={(e) => setQueryValue(e.target.value)}
              type="search"
              placeholder="Destination"
              value={queryValue}
              autofill="true"
            ></input>
            <button type="submit" className="Map-button Location-button">
              <i className="bi bi-search"></i>
            </button>
          </form>
          {vendorLocations.length > 0 && (
            <div className="SearchList-box">
              <ul className="SearchList">
                {vendorLocations.map((location) => {
                  return (
                    filterbyDistance(location) && (
                      <li onClick={() => handleClickVendorSearch(location)}>
                        {location.place_name}
                      </li>
                    )
                  );
                })}
              </ul>
            </div>
          )}
        </div>
        <div className="Map-SearchForm Map-divide-container">
          <div className="Map-divide">|</div>
        </div>
        <div>
          <form
            onSubmit={handleSubmitUserLocation}
            className="Map-SearchForm  UserLocationSearch"
          >
            <input
              className="Map-Input"
              onChange={(e) => setUserLocationQuery(e.target.value)}
              type="search"
              placeholder="User Location.."
              value={userLocationQuery}
              autofill="true"
            ></input>
          </form>

          {userLocationQueryResult.length > 0 && (
            <div className="SearchList-box">
              <ul className="SearchList">
                {userLocationQueryResult.map((location) => {
                  return (
                    <li onClick={() => handleClickUserLocationSearch(location)}>
                      {location.place_name}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
        <div className="Map-SearchForm UserLocationIcon">
          <button type="submit" onClick={getCurrent} className="Map-button">
            <i className="bi bi-geo-alt"></i>
          </button>
        </div>
        <div className="Map-SearchForm">
          <input
            type="range"
            id="volume"
            name="volume"
            min="1"
            max="15"
            value={radiusValue}
            onChange={(e) => setRadiusValue(e.target.value)}
          />
          <div className="km">{radiusValue}km</div>
        </div>
      </div>
      <div>
        <div ref={mapContainer} className="map-container" />
      </div>
    </>
  );
};

export default ViewLive;
