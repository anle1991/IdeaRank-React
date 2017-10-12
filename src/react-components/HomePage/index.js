import React from 'react';
import ProductList from '../Product/ProductList';

class HomePage extends React.Component {
  constructor(){
    super();
    this.state = {
      productList: [
        {
          id:1,
          name: 'Codecademy',
          link: 'https://codecademy.com',
          media: '/img/codecademy.jpeg',
          upvote: 169,
          description: 'Code for anyone',
          maker: {
            name: 'An',
            avatar: '/img/anquyle.jpg'
          }
        },
        {
          id:2,
          name: 'Purehouse lab',
          link: 'http://www.purehouselab.org/',
          media: '/img/purehouselab.png',
          upvote: 278,
          description: 'Code for startups',
          maker: {
            name: 'An',
            avatar: '/img/anquyle.jpg'
          }
        }
      ]
    }
  }

  render(){
    return (
      <section>
        <header>
          <img src="/img/banner.jpeg" width="100%"/>
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
