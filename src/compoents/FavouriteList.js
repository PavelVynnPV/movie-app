import React, { useEffect } from "react";
import Navbar from "./Navbar";
import styles from "./Main.module.css";
import { Link } from "react-router-dom";

function FavouriteList({ favourites, setFavourites }) {
  
  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    );
    setFavourites(movieFavourites);
  }, [setFavourites]);

  return (
    <>
      <Navbar />
      <div className={styles.flex}>
        {favourites.map((film) => {
          return (
            <div className={styles.content}>
              <div className={styles.movieBlock}>
                <img
                  className={styles.img}
                  src={`https://image.tmdb.org/t/p/original/${film.poster_path}`}
                  alt=""
                />
                <div className={styles.movieInfoCss}>
                  <h2>
                    <Link
                      className={styles.linkToInfoFilm}
                      to={`/personalfilminfo/${film.id}`}
                    >
                      {film.title}
                    </Link>
                  </h2>
                  <p>HEAR WILL BE GENRES</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default FavouriteList;
