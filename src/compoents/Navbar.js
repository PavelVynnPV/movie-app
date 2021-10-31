import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import Icon from './Icons';
import React from 'react';
import { Search } from "./search";
import { useSelector, useDispatch } from "react-redux";

function Navbar() {

  const inputValue = useSelector((state) => state.inputValue);
  const dispatch = useDispatch();

  function handleSearchChange(event) {
    dispatch({ type: "inputSearch", payload: event.target.value});
  }

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.content}>
          <Link className={styles.favourite_link} to="/favouriteList">
            Favourite {Icon}
          </Link>
          <Link className={styles.popular} to="/">
            <h1>Popular Movies</h1>
          </Link>
          <Search
            className={styles.search}
            placeholder="Movie name"
            value={inputValue}
            labelText="Search "
            onChange={handleSearchChange}
          />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
