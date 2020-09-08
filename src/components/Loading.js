import React from 'react'
import {connect} from 'react-redux'
import {fetchInfo} from '../actions/user'

class Loading extends React.Component{

 

 render(){
  return (
   <div>
    Sign-in or Signup to save Cities
   </div>
  )
 }

}

const mapStateToProps = (state) => {
 return {user: state.state}
} 

export default connect(mapStateToProps, {fetchInfo})(Loading)
