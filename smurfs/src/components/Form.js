// React
import React from 'react'
// Redux
import { connect } from 'react-redux'
import { openPost } from '../redux/actions'
// Styles
import './Form.scss'

function Form(props) {

  const closeModal = ev => {
    props.openPost()
  }

  return (
    <div 
      className={`form__modalCont ${
        props.isPostOpen ?
        'form__modal__show'
        : null
      }`}
      onClick={closeModal}
    
    >
      <div className="form__modalCard" onClick={ev => ev.stopPropagation()}>
     
      <form>
        <input 
          placeholder="name"
        />
        <button onClick={closeModal}>Close</button>
      </form>
      </div>
    </div>
  )
}

const mapStateToProps = ({ villageReducer }) => {

  return {
    isPostOpen: villageReducer.isPostOpen
  }
}

export default connect(mapStateToProps, {
  openPost
})(Form)