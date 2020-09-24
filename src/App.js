import {
  AppBar,
  Container,
  createMuiTheme,
  ThemeProvider,
  Toolbar,
} from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Catch from './pages/Catch/Catch';
import Details from './pages/Details/Details';
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <AppBar position="static">
            <Toolbar></Toolbar>
          </AppBar>
          <Container>
            <Switch>
              <Route path="/catch">
                <Catch />
              </Route>
              <Route path="/details/:id">
                <Details />
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
