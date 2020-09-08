import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
  state = {
    loadedPost: {},
  };

  async componentDidUpdate() {
    if (this.props.id) {
      if (
        !this.state.loadedPost.id ||
        this.state.loadedPost.id !== this.props.id
      ) {
        try {
          const response = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/${this.props.id}`
          );
          const loadedPost = await response.data;
          this.setState({ loadedPost });
        } catch (e) {
          console.error('Fetch Error:', e);
        }
      }
    }
  }

  async deletePostHandler() {
    try {
      const response = await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${this.props.id}`
      );
      console.log(await response);
    } catch (e) {
      console.error('Delete Error:', e);
    }
  }

  render() {
    let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
    if (this.props.id) {
      post = <p style={{ textAlign: 'center' }}>Loading...</p>;
    }
    if (this.state.loadedPost.id) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button className="Delete" onClick={() => this.deletePostHandler()}>
              Delete
            </button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
