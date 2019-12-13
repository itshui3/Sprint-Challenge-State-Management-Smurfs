import Axios from 'axios'

export const FETCHING_VILLAGERS = 'FETCHING_VILLAGERS'
export const FETCHED_VILLAGERS = 'FETCHED_VILLAGERS'
export const FAILED_FETCH = 'FAILED_FETCH'
export const SET_VILLAGER = 'SET_VILLAGER'


export const fetchVillagers = () => dispatch => {
  dispatch({ type: FETCHING_VILLAGERS })

  Axios.get('http://localhost:3333/smurfs')
    .then( res => {
      console.log(res)
      dispatch({ type: FETCHED_VILLAGERS, payload: res.data })
    })
    .catch( err => {
      console.log(err)
      dispatch({ type: FAILED_FETCH, payload: err })
    })
}

export const setVillagers = villager => dispatch => {
  
}