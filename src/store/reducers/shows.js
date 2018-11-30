import { GET_ALL_SHOWS, GET_SHOW, LOADING, SORT_SHOWS } from '../actions/types';

const initalShowData = {
  name: "",
  image: { medium: "" },
  premiered: "",
  rating: { average: "" },
  type: "",
  externals: { imdb: "" },
  url: ""
}

const initialState = {
  shows: [],
  show: initalShowData,
  loading: true,
  sortKey: "not-sorted"
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_SHOWS:
      return {
        ...state,
        shows: action.payload,
        loading: false,
      };
    case GET_SHOW:
      return {
        ...state,
        show: action.payload,
        loading: false
      };
    case SORT_SHOWS:
      const shows = [...state.shows], sortKey = action.payload;
      if(sortKey === "a-z") {
        shows.sort((a,b) => (a.show.name > b.show.name) ? 1 : ((b.show.name > a.show.name) ? -1 : 0));
        return {
          ...state,
          shows,
          sortKey
        };
      } else if(sortKey === "date") {
        shows.sort((a,b) => new Date(b.show.premiered) - new Date(a.show.premiered));
        return {
          ...state,
          shows,
          sortKey
        };
      } else if(sortKey === "rating") {
        shows.sort((a,b) => b.show.rating.average - a.show.rating.average);
        return {
          ...state,
          shows,
          sortKey
        };
      }
      return {
        ...state,
        shows,
        sortKey
      };
    case LOADING: 
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}