import React, { useRef, useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { useMediaQuery, OutlinedInput, InputAdornment, Paper, Typography } from '@mui/material';
import { LocationOn as LocationOnIcon, Search as SearchIcon } from '@mui/icons-material';
import { Rating } from '@mui/lab';
import mapStyles from './mapStyles';
import useStyles from './styles.js';

const Map = ({
  places,
  setCoords,
  setBounds,
  setChildClicked,
  weatherData
}) => {
  const isMounted = useRef(true);
  const matches = useMediaQuery('(min-width:600px)');
  const classes = useStyles();
  const autocompleteInputRef = useRef(null);
  const [currentCoords, setCurrentCoords] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      if (isMounted.current) {
        setCurrentCoords({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      }
    }, (error) => {
      console.log("Error fetching geolocation:", error);
      setCurrentCoords({
        lat: 37.7749,
        lng: -122.4194,
      });
    });
    
    return () => {
      isMounted.current = false;
    };
  }, [setCoords]);

  const setupAutocomplete = maps => {
    if (maps?.places && autocompleteInputRef.current) {
      const autocomplete = new maps.places.Autocomplete(autocompleteInputRef.current);
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        if (place.geometry && isMounted.current) {
          const { lat, lng } = place.geometry.location;
          const newCoords = {
            lat: lat(),
            lng: lng()
          };
          setCurrentCoords(newCoords);
          setCoords(newCoords);
        }
      });
    }
  };

  return (
    <div className={classes.mapContainer}>
      <OutlinedInput
        className={classes.searchInput}
        fullWidth
        placeholder="Search location"
        inputRef={autocompleteInputRef}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon color="primary" />
          </InputAdornment>
        }
      />
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
          libraries: ['places']
        }}        
        center={currentCoords || { lat: 37.7749, lng: -122.4194 }}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: mapStyles
        }}
        onChange={e => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={child => setChildClicked(child)}
        onGoogleApiLoaded={({ map, maps }) => {
          if (isMounted.current) {
            setupAutocomplete(maps);
          }
        }}
        yesIWantToUseGoogleMapApiInternals
        children={[
          Array.isArray(places) && places.map((place, i) => (
            <div key={i} className={classes.markerContainer} lat={Number(place.latitude)} lng={Number(place.longitude)}>
              {
                !matches ? (
                  <LocationOnIcon color="primary" fontSize="large" />
                ) : (
                  <Paper elevation={3} className={classes.paper}>
                    <Typography className={classes.typography} variant="subtitle2" gutterBottom>
                      {place.name}
                    </Typography>
                    <img
                      className={classes.pointer}
                      src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                      alt={place.name}
                    />
                    <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                  </Paper>
                )
              }
            </div>
          )),
          Array.isArray(weatherData?.list) && weatherData.list.map((data, i) => (
            <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
              <img
                src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                alt={data.weather[0].description}
                height="70px"
              />
            </div>
          ))
        ]}
      />
    </div>
  );
};

export default Map;








