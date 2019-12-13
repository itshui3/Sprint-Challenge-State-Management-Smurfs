import {
  SET_VILLAGER,
  FAIL_SET_VILLAGER
} from '../actions'

const initialState = {
  isPosting: false,
  error: false
}

export const setReducer = (state = initialState, { type, payload }) => {
  switch(type) {

    case SET_VILLAGER:
      return {
        ...state,
        isPosting: true,
        error: false
      }
    case FAIL_SET_VILLAGER:
      return {
        ...state,
        isPosting: false,
        error: true
      }
    case POSTED_VILLAGER:
      return {
        ...state,
        isPosting: false,
        error: false
      }

    default:
      return state
  }
}