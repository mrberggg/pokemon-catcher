import {
  AppBar,
  Container,
  Toolbar,
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core';
import { Add as AddIcon, Home as HomeIcon } from '@material-ui/icons';
import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Catch from './pages/Catch/Catch';
import Home from './pages/Home/Home';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff0000',
    },
    secondary: {
      main: '#ffde00',
    },
  },
});

const useStyles = makeStyles({
  spacer: {
    flexGrow: 1,
  },
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <AppBar position="static">
            <Toolbar>
              <Link to="/">
                <HomeIcon color="secondary"></HomeIcon>
              </Link>
              <div className={classes.spacer}></div>
              <Link to="/catch">
                <AddIcon color="secondary"></AddIcon>
              </Link>
            </Toolbar>
          </AppBar>
          <Container>
            <Switch>
              <Route path="/catch">
                <Catch />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Container>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
