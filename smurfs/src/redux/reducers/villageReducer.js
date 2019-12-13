import { 
  FETCHING_VILLAGERS,
  FETCHED_VILLAGERS,
  FAILED_FETCH,
  SET_VILLAGER
} from '../actions'

const initialState = {
  villagers: [],
  isFetching: false,
  error: false
}

export const villageReducer = (state = initialState, { type, payload }) => {
  switch(type) {

    case FETCHING_VILLAGERS:
      return {
        ...state,
        isFetching: true,
        error: false
      }

    case FETCHED_VILLAGERS:
      return {
        ...state,
        isFetching: false,
        error: false,
        villagers: payload
      }
    case FAILED_FETCH:
      return {
        ...state,
        isFetching: false,
        error: payload
      }
    case SET_VILLAGER:
    default:
      return state
  }
}