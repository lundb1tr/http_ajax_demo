import React, { Component } from 'react';
import axios from '../../../axios';

import './NewPost.css';

class NewPost extends Component {
  state = {
    title: '',
    content: '',
    author: 'Tyler',
  };

  componentDidMount() {
    /* if unauthorized => this.props.history.replace('/posts'); */
    console.log('[NewPost.js]', this.props);
  }

  async postDataHandler() {
    const data = {
      title: this.state.title,
      body: this.state.content,
      author: this.state.author,
    };
    try {
      await axios.post(`/posts`, data);
      this.props.history.push('/posts');
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className="NewPost">
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={({ target }) => this.setState({ title: target.value })}
        />
        <label>Content</label>
        <textarea
          rows="4"
          value={this.state.content}
          onChange={({ target }) => this.setState({ content: target.value })}
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={({ target }) => this.setState({ author: target.value })}
        >
          <option value="Tyler">Tyler</option>
        </select>
        <button onClick={() => this.postDataHandler()}>Add Post</button>
      </div>
    );
  }
}

export default NewPost;
