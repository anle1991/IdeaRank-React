import alt from '../alt';
import firebase from 'firebase';
import fire from '../react-components/fire';

class Actions{
  login(){
    return (dispatch) =>{
      var provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(authData) {
        console.log(authData);

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


}

export default alt.createActions(Actions);
