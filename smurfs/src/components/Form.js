// React
import React, { useState, useEffect } from 'react'
// Redux
import { connect } from 'react-redux'
import { openPost, postVillager } from '../redux/actions'
// Styles
import './Form.scss'

function Form(props) {

  const [villager, setVillager] = useState({
    name: '',
    age: '',
    height: ''
  })

  // this useEffect is resetting my  values before the post occurs
  // useEffect(() => {

  //   setVillager({
  //     name: '',
  //     age: '',
  //     height: ''
  //   })

  // }, [props.isPostOpen])

  const closeModal = ev => {
    props.openPost()
  }
  const handleTyping = ev => {
    setVillager({...villager, [ev.target.name]: ev.target.value })
  }
  const handleSubmit = ev => {
    ev.preventDefault()

    props.postVillager(villager)


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
     
      <form onSubmit={handleSubmit}>
        <input 
          name="name"
          type="text"
          value={villager.name}
          placeholder="name"
          onChange={handleTyping}
        />
        <input
          name="age"
          type="text"
          value={villager.age}
          placeholder="age"
          onChange={handleTyping}
        />
        <input
          name="height"
          type="text"
          value={villager.height}
          placeholder="height"
          onChange={handleTyping}
        />
        <button type='submit' onClick={closeModal}>Submit</button>
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
  openPost,
  postVillager
})(Form)