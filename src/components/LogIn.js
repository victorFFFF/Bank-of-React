import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {Link} from 'react-router-dom';


class LogIn extends Component {
  constructor () {
    super()
    this.state = {
      user: {
        userName: '',
        password: ''
      },
      redirect: false
    }
  }

  handleChange = (e) => {
    const updatedUser = {...this.state.user}
    const inputField = e.target.name
    const inputValue = e.target.value
    updatedUser[inputField] = inputValue

    this.setState({user: updatedUser})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.mockLogIn(this.state.user)
    this.setState({redirect: true})
  }

  render () {
    if (this.state.redirect) {
      return (<Redirect to="/userProfile"/>)
    }

    return (
      <div>
        <Link class="btn btn-dark btn-lg" to="/"> Home</Link>
        <form onSubmit={this.handleSubmit}>
          <div class="col-md-12 text-center">
            <label  htmlFor="userName">User Name</label>
            <input type="text" name="userName" onChange={this.handleChange} value={this.state.user.userName} />
          </div>
          <div class="col-md-12 text-center">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div  > 
          <button  class="mx-auto d-block">Log In</button>
        </form>
      </div>
    )
  }
}

export default LogIn