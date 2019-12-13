import Axios from 'axios'

export const FETCHING_VILLAGERS = 'FETCHING_VILLAGERS'
export const FETCHED_VILLAGERS = 'FETCHED_VILLAGERS'
export const FAILED_FETCH = 'FAILED_FETCH'


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

// Post related

export const SET_VILLAGER = 'SET_VILLAGER'
export const POSTED_VILLAGER = 'POSTED_VILLAGER'
export const OPEN_POST = 'OPEN_POST'

export const openPost = () => {
  return {
    type: OPEN_POST
  }
}

export const postVillager = villager => dispatch => {
  dispatch({ type: SET_VILLAGER })
  console.log(villager, 'villager being posted')
  Axios.post('http://localhost:3333/smurfs', villager)
    .then( res => {
      console.log(res)
      dispatch({ type: FETCHED_VILLAGERS, payload: res.data })
    })
    .catch( err => {
      console.log(err)
      dispatch({ type: FAILED_FETCH, payload: err })
    })
}

export const DELETE_VILLAGER = 'DELETE_VILLAGER'

export const deleteVillager = id => dispatch => {
  Axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then( res => {
      console.log(res)
      dispatch({ type: FETCHED_VILLAGERS, payload: res.data })
    })
    .catch( err => {
      console.log(err)
    })
}