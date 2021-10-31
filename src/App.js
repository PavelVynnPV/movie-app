import React from 'react';
import Navbar from './compoents/Navbar';
import Main from './compoents/Main';
import FavouriteList from './compoents/FavouriteList';
import PersonalFilmInfo from './compoents/PersonalFilmInfo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/favouriteList">
            <FavouriteList
            />
          </Route>
          <Route exact path="/personalfilminfo/:id">
            <PersonalFilmInfo />
          </Route>
          <Route exact path="/">
            <Navbar/>

            <Main
            />
          </Route>
        </Switch>
        
      </Router>
    </>
  );
}

export default App;
