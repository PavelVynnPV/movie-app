import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Icon from "./Icons";
import React from "react";

function Navbar({ setSearch }) {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.content}>
          <Link className={styles.favourite_link} to="/favouritelist">
            Favourite {Icon}
          </Link>
          <Link className={styles.popular} to="/">
            <h1>Popular Movies</h1>
          </Link>
          <input
            className={styles.search}
            type="text"
            placeholder="Movie name"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
