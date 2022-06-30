import { getJSON, getLocation } from 'utilities.js';

const baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';

export function getQuakesForLocation() {
  // call the getLocation function to get the lat/long
    let location = getLocation()
  // use that information to build out the correct URL
  const geoUrl = baseUrl + location // add location information here
  // use the url to request the correct quakes 
  getJSON(geoUrl)
  //log out the quakes for now.
}

getQuakesForLocation();