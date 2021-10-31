import { useParams } from 'react-router';
import React, { useEffect } from 'react';
import styles from './PersonalFilmInfo.module.css';
import Navbar from './Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { personalFilmFetch } from '../ActionCreator';

function PersonalFilmInfo() {
  const { id } = useParams();
  const film = useSelector(state => state.filmsReducer.personalFilm)  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(personalFilmFetch(id))
  });

  return (
    <div className={styles.background}>
      <Navbar />
      <div className={styles.content}>
        <img
          className={styles.img}
          src={`https://image.tmdb.org/t/p/original/${film.poster_path}`}
          //alt is neccessary
          alt="film poster"
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
