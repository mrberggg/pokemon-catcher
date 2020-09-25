import React from 'react';
import {
  AppBar as MaterialAppBar,
  Toolbar,
  IconButton,
} from '@material-ui/core';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import { ArrowBack } from '@material-ui/icons';

function AppBar() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <MaterialAppBar position="static">
      <Toolbar>
        {isHome ? null : (
          <IconButton edge="start" component={RouterLink} to="/">
            <ArrowBack fontSize="large" />
          </IconButton>
        )}
      </Toolbar>
    </MaterialAppBar>
  );
}

export default AppBar;
