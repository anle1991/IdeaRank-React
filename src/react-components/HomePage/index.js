import React from 'react';
import ProductList from '../Product/ProductList';
import fire from '../fire';

class HomePage extends React.Component {
  constructor(){
    super();
    this.state = {
      productList: []
    }

    var firebaseRef = fire.database().ref('/products/');
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
