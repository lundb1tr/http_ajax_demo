import React, { Component } from 'react';
import axios from '../../../axios';

import './FullPost.css';

class FullPost extends Component {
  state = {
    loadedPost: {},
  };

  async componentDidMount() {
    console.log(this.props);
    if (this.props.match.params.id) {
      if (
        !this.state.loadedPost.id ||
        this.state.loadedPost.id !== this.props.match.params.id
      ) {
        try {
          const response = await axios.get(
            `/posts/${this.props.match.params.id}`
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
        `/posts/${this.props.match.params.id}`
      );
      console.log(await response);
    } catch (e) {
      console.error('Delete Error:', e);
    }
  }

  render() {
    let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
    if (this.props.match.params.id && !this.props.error) {
      post = <p style={{ textAlign: 'center' }}>Loading...</p>;
    }
    if (this.props.error) {
      post = (
        <div className="FullPost">
          <h1>Something went wrong fetching the post</h1>
          <p>{this.state.loadedPost.body}</p>
        </div>
      );
    }
    if (this.state.loadedPost.id && !this.props.error) {
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
