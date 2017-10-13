import React from 'react';
import ProductList from '../Product/ProductList';
import fire from '../fire';
import connectToStores from 'alt-utils/lib/connectToStores';
import ProductStore from '../../store/ProductStore';
import Actions from '../../action';

@connectToStores
class HomePage extends React.Component {
  constructor(){
    super();
    Actions.getProducts();
  }

  static getStores(){
    return [ProductStore];
  }

  static getPropsFromStores(){
    return ProductStore.getState();
  }

  render(){
    return (
      <section>
        <header>

        </header>

        <section>
          <section className="container">
            {
              this.props.products ? <ProductList productList={this.props.products}/> : null
            }
          </section>
        </section>
      </section>
    );
  }
}

export default HomePage;
