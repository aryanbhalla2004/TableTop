const API_KEY = process.env.REACT_APP_MAP_TOKEN;
const BASE_URL = `https://api.mapbox.com/geocoding/v5/mapbox.places
`;

export const getLocations = async (query) => {
  const request = await fetch(
    BASE_URL +
      `/${query}.json?bbox=-97.5,49.8,-96.7,50.1&limit=10&access_token=${API_KEY}`
  );
  const response = await request.json();
  const locations = await response;

  return locations;
};
