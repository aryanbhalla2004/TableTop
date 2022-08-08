import "./ViewLive.css";
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const ViewLive = () => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiamFld29uLWh3YW5nIiwiYSI6ImNsNmwxbmJmZzA3ZjYzaW1yNzVzcXlwMWoifQ.R5lA30KBP0SBRFFZ42FMHQ";
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });
  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });
  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
};

export default ViewLive;