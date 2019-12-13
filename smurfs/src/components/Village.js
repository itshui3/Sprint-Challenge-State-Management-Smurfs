// React
import React from 'react'
// Redux
import { connect } from 'react-redux'
import { fetchVillagers } from '../redux/actions'
// Styling
import { Button, Jumbotron } from 'reactstrap'
import './Village.scss'
// Components
import Villager from './Villager'

function Village(props) {

  const handleFetchClick = ev => {
    console.log('user clicked fetch btn')
    props.fetchVillagers()
  }

  return (
    <div className="village__cont">
      <Button 
        className="village__fetchBtn"
        onClick={handleFetchClick}
      >Fetch Some Villagers!</Button>
      <Jumbotron className="villagers__cont">
        {
          props.villagers && props.villagers.map((villager, index) => (
            <Villager 
              villager={villager}
              key={index}

              />
          ))
        }
      </Jumbotron>
    </div>

  )
}

const mapStateToProps = ({ villageReducer }) => {
  return {
    villagers: villageReducer.villagers,
    isFetching: villageReducer.isFetching,
    error: villageReducer.error
  }
}

export default connect(mapStateToProps, {
  fetchVillagers: fetchVillagers
})(Village)