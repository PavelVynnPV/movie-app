import { useParams } from "react-router";
import React, { useEffect, useState } from "react";
import styles from "./PersonalFilmInfo.module.css";
import Navbar from "./Navbar";

function PersonalFilmInfo() {
  const { id } = useParams();
  const [film, setFilm] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=1008ba9b0955f57726599ab52debc71b&language=en-US`
    )
      .then((response) => response.json())
      .then((movieInfo) => {
        setFilm(movieInfo);
      });
  });

  return (
    <div className={styles.background}>
      <Navbar />
      <div className={styles.content}>
        <img
          className={styles.img}
          src={`https://image.tmdb.org/t/p/original/${film.poster_path}`}
          alt=""
        />
        <div className={styles.contentBlock}>
          <h1>Name: {film.title}</h1>
          <p class={styles.marginParagraph}>Overview: {film.overview}</p>
          <p>Releas-date: {film.release_date}</p>
        </div>
      </div>
    </div>
  );
}

export default PersonalFilmInfo;
