// Header.js
import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import useStyles from './styles.js';

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.title}>
          <span className={classes.logo}>BTA</span>
          Best Travel Advisor
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
