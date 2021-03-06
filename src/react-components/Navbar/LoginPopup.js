import React from 'react';
import Popup from './Popup';
import Actions from '../../action';


class LoginPopup extends React.Component{
  handleLogin = () =>{
    Actions.login();
    this.props.hidePopup();
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
