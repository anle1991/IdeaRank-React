import alt from '../alt';
import firebase from 'firebase';
import fire from '../react-components/fire';
import _ from 'lodash';

class Actions{

  initSession(){
    return (dispatch) => {
      // var authData = firebase.auth().currentUser;
      var user;

      firebase.auth().onAuthStateChanged(function(authData) {
        if (authData) {
          user = authData;
        } else {
          user = null;
        }
      });

      console.log(user);
      setTimeout(() => dispatch(user));
    }
  }

  login(){
    return (dispatch) =>{
      var provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(authData) {

        var user = {
          id: authData.additionalUserInfo.profile.id,
          name: authData.user.displayName,
          avatar: authData.user.photoURL
        }

        fire.database().ref().child("users").child(user.id).set(user);
        dispatch(user);
      }).catch(function(error) {
        console.log(error);
      });
    }
  }

  logout(){
    return(dispatch) =>{
      firebase.unauth();
      setTimeout(() => dispatch(null));
    }
  }

  getProducts(){
    return(dispatch) =>{
      var firebaseRef = fire.database().ref('/products/');
      firebaseRef.on('value', (snapshot) =>{
        var products = _.values(snapshot.val());
        dispatch(products);
      });
    }
  }

  addProduct(product){
    return (dispatch) =>{
      var firebaseRef = fire.database().ref('/products/');
      firebaseRef.push(product);
    }
  }
}

export default alt.createActions(Actions);
