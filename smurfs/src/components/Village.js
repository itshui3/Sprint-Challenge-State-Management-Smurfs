import React from 'react'
import { connect } from 'react-redux'

import { Button } from 'reactstrap'

function Village(props) {

  return (
    <div className="village__cont">
      <Button>Fetch Some Villagers!</Button>
      <div className="villagers__cont">

      </div>
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

export default connect(mapStateToProps)(Village)