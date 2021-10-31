import {
  UPDATE_FILMS,
  UPDATE_GENRES,
  PERSONAL_FILM,
  SET_LOADING,
} from "./action";

function updateFilms(payload) {
  return { type: UPDATE_FILMS, payload };
}
function updateGenres(payload) {
  return { type: UPDATE_GENRES, payload };
}
function personalFilm(payload) {
  return { type: PERSONAL_FILM, payload };
}
function setLoading() {
  return { type: SET_LOADING };
}

export function getFilmsFetch() {
  return function (dispatch) {
    dispatch(setLoading());
    fetch(
      "https://api.themoviedb.org/3/movie/popular/?api_key=1008ba9b0955f57726599ab52debc71b&language=en-US&page=1"
    )
      .then((data) => data.json())
      .then((data) => {
        dispatch(updateFilms(data.results));
      });
  };
}

export function getGenresFetch() {
  return function (dispatch) {
    dispatch(setLoading());
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=1008ba9b0955f57726599ab52debc71b&language=en-US"
    )
      .then((data) => data.json())
      .then((data) => {
        dispatch(updateGenres(data.genres));
      });
  };
}

export function personalFilmFetch(id) {
  return function (dispatch) {
    dispatch(setLoading());
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=1008ba9b0955f57726599ab52debc71b&language=en-US`
    )
      .then((data) => data.json())
      .then((data) => {
        dispatch(personalFilm(data));
      });
  };
}
