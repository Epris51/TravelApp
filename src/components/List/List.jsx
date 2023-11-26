import React, { useState, useEffect, createRef } from 'react';
import {
  CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select,
  Divider, Box, Paper
} from '@material-ui/core';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import HotelIcon from '@material-ui/icons/Hotel';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from './styles.js';

const List = ({ places, type, setType, rating, setRating, childClicked, isLoading }) => {
  const [elRefs, setElRefs] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    setElRefs((refs) => Array(places.length).fill().map((_, i) => refs[i] || createRef()));
  }, [places]);

  return (
    <div className={classes.container}>
      <Typography variant="h3" className={classes.title}>Restaraunts Hotels & Attractions</Typography>
      <Typography variant="h6" className={classes.subtitle}>Discover the best around you</Typography>

      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="6rem" />
        </div>
      ) : (
        <>
          <Paper elevation={3} className={classes.filterContainer}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <FormControl fullWidth variant="outlined" className={classes.formControl}>
                  <InputLabel id="type">Type</InputLabel>
                  <Select
                    labelId="type"
                    id="type-select"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    startAdornment={<Box mr={2}><RestaurantMenuIcon color="action" /></Box>}
                  >
                    <MenuItem value="restaurants"><RestaurantMenuIcon color="primary" /> Restaurants</MenuItem>
                    <MenuItem value="hotels"><HotelIcon color="primary" /> Hotels</MenuItem>
                    <MenuItem value="attractions"><LocalActivityIcon color="primary" /> Attractions</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth variant="outlined" className={classes.formControl}>
                  <InputLabel id="rating">Rating</InputLabel>
                  <Select
                    labelId="rating"
                    id="rating-select"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    startAdornment={<Box mr={2}><StarBorderIcon color="action" /></Box>}
                  >
                    <MenuItem value=""><StarBorderIcon color="primary" /> All</MenuItem>
                    <MenuItem value="2"><StarBorderIcon color="primary" /> Above 2.0</MenuItem>
                    <MenuItem value="3"><StarBorderIcon color="primary" /> Above 3.0</MenuItem>
                    <MenuItem value="4"><StarBorderIcon color="primary" /> Above 4.0</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Paper>

          <Divider className={classes.divider} />
          <Grid container spacing={3} className={classes.list}>
            {places?.map((place, i) => (
              <Grid ref={elRefs[i]} key={i} item xs={12}>
                <PlaceDetails selected={Number(childClicked) === i} refProp={elRefs[i]} place={place} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};

export default List;

