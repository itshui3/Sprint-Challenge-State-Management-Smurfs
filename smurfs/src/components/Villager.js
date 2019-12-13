import React from 'react'
import { Card, CardTitle, CardBody, CardImg } from 'reactstrap'

function Villager(props) {

  console.log(props)
  // props.villager.name, .age, .height

  return (
    <Card className="villager__card">
      <CardTitle>
        {props.villager.name}
      </CardTitle>

      <CardImg />

      <CardBody>
        <p>{props.villager.age}</p>
        <p>{props.villager.height}</p>
      </CardBody>
    </Card>
  )
}

export default Villager