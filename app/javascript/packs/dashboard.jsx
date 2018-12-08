import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'

class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state={
      user: {},
      loggedIn: false
    }
  }

  componentDidMount () {
    if(window.location.hash){
      let fitbitToken=window.location.hash.slice(1).split('&')[0].replace('access_token=', '')
      console.log(fitbitToken)
      axios({
        method: 'get',
        url: 'https://api.fitbit.com/1/user/-/profile.json',
        headers: { 'Authorization': 'Bearer ' + fitbitToken},
        mode: 'cors'
      })
      .then(response => {
        console.log(response)
        this.setState({user: response.data.user, loggedIn: true})
      })
      .catch(error => console.log(error))
    }
  }

  render () {
    return (
      <div className="container">
        <header className='text-center'>
          <span className='pull-right'>{this.state.user.displayName}</span>
          <h1 className='page-header'>React Fit</h1>
          <p className='lead'>Your personal fitness dashboard</p>
        </header>

        {!this.state.loggedIn &&
          <div className='row text-center'>
            <a href='https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=22DDNL&redirect_uri=http%3A%2F%localhost%3A3001%2Ffitbit_auth&scope=activity%20nutrition%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800'>
              Log in with fitbit
            </a>
          </div>
        }
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Dashboard />,
    document.body.appendChild(document.createElement('div')),
  )
})