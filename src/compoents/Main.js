import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Main.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getFilmsFetch, getGenresFetch } from "../ActionCreator";

function Main() {
  const inputValue = useSelector((state) => state.search.inputValue);
  const films = useSelector((state) => state.filmsReducer.films);
  const genres = useSelector((state) => state.genresReducer.genres);
  const favourites = useSelector((state) => state.filmsReducer.favourites);
  const loading = useSelector((state) => state.filmsReducer.loading);
  console.log(loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFilmsFetch());
    dispatch(getGenresFetch());
  }, [dispatch]);

  const filterMovies = films.filter((movie) => {
    return movie.title.toLowerCase().includes(inputValue.toLowerCase());
  });

  function handleOnClickAdd(movie) {
    const newFavouriteList = [...favourites, movie];
    const saveToLocalStorage = (movie) => {
      localStorage.setItem("react-movie-app-favourites", JSON.stringify(movie));
    };

    saveToLocalStorage(newFavouriteList);
    dispatch({ type: "favouriteFilms", payload: newFavouriteList });
  }

  function handleOnClickRemove(movie) {
    const newFavouriteList = favourites.filter((favourite) => {
      return favourite.id !== movie.id;
    });
    const saveToLocalStorage = (movie) => {
      localStorage.setItem("react-movie-app-favourites", JSON.stringify(movie));
    };
    saveToLocalStorage(newFavouriteList);
    dispatch({ type: "favouriteFilms", payload: newFavouriteList });
  }

  return (
    <>
      <div className={styles.flex}>
        {loading ? (
          <div className={styles.ldsRing}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          filterMovies.map((movie) => {
            return (
              <div className={styles.content}>
                <div className={styles.movieBlock}>
                  <img
                    className={styles.img}
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt=""
                  />
                  <div className={styles.movieInfoCss}>
                    <h2>
                      <Link
                        className={styles.linkToInfoFilm}
                        to={`/personalfilminfo/${movie.id}`}
                      >
                        {movie.title}
                      </Link>
                    </h2>
                    <p>
                      Genre:
                      {genres
                        .filter((genre) => movie.genre_ids.includes(genre.id))
                        .map((genre) => genre.name + " ")}
                    </p>
                    <button
                      className={styles.btnAdd}
                      onClick={
                        !favourites.find(
                          (favouriteFilm) => favouriteFilm.id === movie.id
                        )
                          ? () => handleOnClickAdd(movie)
                          : () => handleOnClickRemove(movie)
                      }
                    >
                      {!favourites.find(
                        (favouriteFilm) => favouriteFilm.id === movie.id
                      )
                        ? "Add to Favourites"
                        : "remove from Favourites"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}

export default Main;
