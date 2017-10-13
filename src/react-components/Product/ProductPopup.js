import React from 'react';
import Popup from '../Navbar/Popup';

class ProductPopup extends React.Component{
  constructor(){
    super();
    this.state = {
      product: {
          id:1,
          name: 'Codecademy',
          link: 'https://codecademy.com',
          media: '/img/codecademy.jpeg',
          upvote: 169,
          description: 'Code for homeless',
          maker: {
            name: 'An',
            avatar: '/img/anquyle.jpg'
          }
      },
      comments: [
        {
          name: "An",
          avatar: "/img/anquyle.jpg",
          content: "I like this idea"
        },
        {
          name: "Bee",
          avatar: "/img/anquyle.jpg",
          content: "I like this idea"
        }
      ]
    }
  }

  renderUpvoteButton(){
      return(
        <a className="upvote-button" href="#">
          <span>
            <i className="fa fa-sort-asc"></i>
          </span>
          {this.props.product.upvote}
        </a>
      );
  }

  renderHeader(){
    return(
      <header style={{backgroundImage: 'url(' + this.props.product.media + ')'}}>
        <section className="header-shadow">
          <h1>{this.props.product.name}</h1>
          <p>{this.props.product.description}</p>
          <section>
            {this.renderUpvoteButton()}
            <a className="getit-btn" href={this.props.product.link} target="_blank">GET IT</a>
          </section>
        </section>

      </header>
    )
  }

  renderBodyDiscussion(){
    return(
      <section className="discussion">
        <h2>Discussion</h2>
        <section className="post-comment">
          <img className="medium-avatar" src="/img/anquyle.jpg"/>
          <input placeholder="What do you think of this product?"/>
        </section>
        {this.renderComments()}
      </section>
    );
  }

  renderBody(){
    return(
      <section className="product-popup-body">
        <main>
          {this.renderBodyDiscussion()}

        </main>
      </section>
    )
  }

  renderComments(){
    return(
      <ul className="comment-list">
        {
          this.state.comments.map(function(comment,idx){
            return (
              <li key={idx}>
                <img className="medium-avatar" src={comment.avatar}/>
                <section>
                  <strong>{comment.name}</strong>
                  <p>{comment.content}</p>
                </section>
              </li>
            );
          })
        }
      </ul>
    )
  }

  render(){
    return(
      <Popup {...this.props} style="product-popup">
        {this.renderHeader()}
        {this.renderBody()}
      </Popup>
    );

  }
}

export default ProductPopup;
