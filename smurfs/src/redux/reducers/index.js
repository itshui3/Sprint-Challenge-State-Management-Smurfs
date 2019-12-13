import { combineReducers } from 'redux'

import { 
  villageReducer 
} from './villageReducer'

export const reducer = combineReducers({ villageReducer: villageReducer })