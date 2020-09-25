import { Container, createMuiTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AppBar from './components/AppBar/AppBar';
import Catch from './pages/Catch/Catch';
import Details from './pages/Details/Details';
import Home from './pages/Home/Home';
import { Provider } from 'react-redux';
import store from './state/store';

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
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <AppBar />
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
    </Provider>
  );
}

export default App;
