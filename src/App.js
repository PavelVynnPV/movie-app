import React from "react";
import { useState } from "react";
import Navbar from "./compoents/Navbar";
import Main from "./compoents/Main";
import FavouriteList from "./compoents/FavouriteList";
import PersonalFilmInfo from "./compoents/PersonalFilmInfo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [search, setSearch] = useState("");
  const [favourites, setFavourites] = useState([]);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/favouritelist">
            <FavouriteList
              favourites={favourites}
              setFavourites={setFavourites}
            />
          </Route>
          <Route exact path="/personalfilminfo/:id">
            <PersonalFilmInfo />
          </Route>
          <Route exact path="/">
            <Navbar setSearch={setSearch} />

            <Main
              search={search}
              setFavourites={setFavourites}
              favourites={favourites}
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
