import React from 'react';
import ProductList from '../Product/ProductList';
import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAYNtFQO6DHnLNumEDuNCjqGYBXXjlfY7s",
    authDomain: "idearank-47142.firebaseapp.com",
    databaseURL: "https://idearank-47142.firebaseio.com",
    projectId: "idearank-47142",
    storageBucket: "idearank-47142.appspot.com",
    messagingSenderId: "441163562896"
  };
firebase.initializeApp(config);

class HomePage extends React.Component {
  constructor(){
    super();
    this.state = {
      productList: []
    }

    var firebaseRef = firebase.database().ref('/products/');
    firebaseRef.on('value', (snapshot) =>{
      var products = snapshot.val();

      this.setState({
        productList: products
      })
    });
  }

  render(){
    return (
      <section>
        <header>

        </header>

        <section>
          <section className="container">
            {
              this.state.productList ? <ProductList productList={this.state.productList}/> : null
            }
          </section>
        </section>
      </section>
    );
  }
}

export default HomePage;
