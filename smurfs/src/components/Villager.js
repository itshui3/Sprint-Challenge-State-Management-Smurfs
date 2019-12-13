// React
import React from 'react'
import { Card, CardTitle, CardBody, CardImg } from 'reactstrap'
// Redux
import { connect } from 'react-redux'
// Actions
import { deleteVillager } from '../redux/actions'

function Villager(props) {

  console.log(props)
  // props.villager.id => pass this into a delete action

  const handleDelete = ev => {
    props.deleteVillager(props.villager.id)
  }

  return (
    <Card className="villager__card">
      <CardTitle>
        {props.villager.name}
      </CardTitle>

      <CardImg />

      <CardBody>
        <p>{props.villager.age}</p>
        <p>{props.villager.height}</p>
        <button>Modify</button>
        <button onClick={handleDelete}>Delete</button>
      </CardBody>

    </Card>
  )
}

const mapStateToProps = ({ villageReducer }) => {
  return {

  }
}

export default connect(mapStateToProps, {
  deleteVillager
})(Villager)