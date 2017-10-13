import React from 'react';
import Popup from './Popup';

class PostPoup extends React.Component{
  handlePost = () =>{

  };

  render(){
    return(
      <Popup {...this.props} style="post-popup">
        <header className="post-header">Post a new product</header>
        <section>
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td><input placeholder="Enter product's name"/></td>
              </tr>
              <tr>
                <td>Description</td>
                <td><input placeholder="Enter product's description"/></td>
              </tr>
              <tr>
                <td>Link</td>
                <td><input placeholder="http://www..."/></td>
              </tr>
              <tr>
                <td>Media</td>
                <td><input placeholder="Direct link to an image"/></td>
              </tr>
            </tbody>
          </table>
        </section>

        <footer className="post-footer">
          <button onClick={this.handlePost} className="post-btn">Submit</button>
        </footer>
      </Popup>
    )
  }
}

export default PostPoup;
