import React, { Component } from 'react';
import Login from '../components/Login';
import Additems from '../components/Additems';
import fire from './Fire'

class Check extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }

  render() {
    return (
     <div>{ this.state.user ?  ( <Additems/>) : (<Login />)}</div>
    )
}

}

export default Check;