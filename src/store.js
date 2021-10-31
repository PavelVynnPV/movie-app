import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import {
  UPDATE_FILMS,
  UPDATE_GENRES,
  PERSONAL_FILM,
  SET_LOADING,
} from "./action";

function reducer(state = { inputValue: "" }, action) {
  switch (action.type) {
    case "inputSearch": {
      return { ...state, inputValue: action.payload };
    }
    default: {
      return state;
    }
  }
}

function filmsReducer(
  state = { films: [], personalFilm: [], favourites: [] },
  action
) {
  switch (action.type) {
    case UPDATE_FILMS: {
      return { ...state, films: action.payload, loading: false };
    }
    case PERSONAL_FILM: {
      return { ...state, personalFilm: action.payload };
    }
    case "favouriteFilms": {
      return { ...state, favourites: action.payload };
    }
    case SET_LOADING: {
      return { ...state, loading: true };
    }
    default:
      return state;
  }
}

function genresReducer(state = { genres: [] }, action) {
  switch (action.type) {
    case UPDATE_GENRES: {
      return { ...state, genres: action.payload };
    }
    default:
      return state;
  }
}

const store = createStore(
  combineReducers({
    search: reducer,
    filmsReducer: filmsReducer,
    genresReducer: genresReducer,
  }),
  applyMiddleware(thunk)
);

export default store;
