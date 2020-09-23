import React from 'react'
import './App.css'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Catch from './pages/Catch/Catch'

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/catch">Catch</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/catch">
            <Catch />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
