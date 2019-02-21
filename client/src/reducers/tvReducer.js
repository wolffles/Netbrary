import{
  GET_SHOWS, 
  SHOW_LOADING,
  SEARCH_TITLE
} from '../actions/types'

const initialState = {
  search_results: [],
  shows: [],
  loading: false,
  searched: false
}

export default function(state = initialState, action){
  switch(action.type) {
    case SHOW_LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_SHOWS:
      return {
        ...state, 
        shows: action.payload,
        loading: false
      }
    case SEARCH_TITLE:
      return {
        ...state,
        shows: action.payload,
        loading: false,
        searched: true
      }
    default:
      return state
  }
}