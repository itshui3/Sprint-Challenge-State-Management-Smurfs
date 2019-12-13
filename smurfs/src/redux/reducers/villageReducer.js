import { 
  FETCHING_VILLAGERS,
  FETCHED_VILLAGERS,
  FAILED_FETCH,
  SET_VILLAGER,
  OPEN_POST
} from '../actions'

const initialState = {
  villagers: [],
  isFetching: false,
  error: false,
  isSetting: false,
  isPostOpen: false
}

export const villageReducer = (state = initialState, { type, payload }) => {
  switch(type) {

    case FETCHING_VILLAGERS:
      return {
        ...state,
        isFetching: true,
        error: false
      }

    case SET_VILLAGER:
      return {
        ...state,
        isSetting: true,
        error: false
      }
    case OPEN_POST:
      return {
        ...state,
        isPostOpen: !state.isPostOpen
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

    default:
      return state
  }
}