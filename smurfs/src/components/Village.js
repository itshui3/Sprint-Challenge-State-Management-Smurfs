// React
import React from 'react'
// Redux
import { connect } from 'react-redux'
import { fetchVillagers, openPost, setForm } from '../redux/actions'
// Styling
import { Button, Jumbotron } from 'reactstrap'
import './Village.scss'
// Components
import Villager from './Villager'
import Form from './Form'

function Village(props) {

  const handleFetchClick = ev => {
    console.log('user clicked fetch btn')
    props.fetchVillagers()
  }
  const togglePostForm = ev => {
    props.openPost()
    props.setForm('make')
  }

  return (
    <div className="village__cont">
      <div className="villageBtns__cont">
      <Button 
        className="village__fetchBtn"
        onClick={handleFetchClick}
      >Fetch Some Villagers!</Button>
      <Button 
        className="village__postBtn"
        onClick={togglePostForm}
        color="success"
      >Create some Villagers!</Button>

      </div>

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

      <Form />
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
  fetchVillagers: fetchVillagers,
  openPost: openPost,
  setForm: setForm
})(Village)