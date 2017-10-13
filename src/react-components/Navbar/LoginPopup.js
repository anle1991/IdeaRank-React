import React from 'react';
import Popup from './Popup';
import fire from '../fire';
import firebase from 'firebase';

class LoginPopup extends React.Component{
  handleLogin = () =>{
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(authData) {
    	console.log(authData);
    }).catch(function(error) {
    	console.log(error);
    });

  }

  render(){
    return (
      <Popup {...this.props} style="login-popup">
        <img src="/img/kitty.png"></img>
        <h1>Login to Join The Community</h1>
        <p></p>
        <button className="facebook-btn" onClick={this.handleLogin}>Login with Facebook</button>
        <p>We'll never post to Facebook without your permission.</p>
      </Popup>
    );
  }
}

export default LoginPopup;
