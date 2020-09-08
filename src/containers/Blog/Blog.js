import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
  state = {
    posts: [],
    selectedPost: null,
  };

  async componentDidMount() {
    try {
      const posts = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const trimmedPosts = await posts.data.slice(0, 4);
      const addAuthors = await trimmedPosts.map(post => {
        return {
          ...post,
          author: 'Tyler',
        };
      });
      this.setState({ posts: addAuthors });
    } catch (e) {
      console.error('Fetch Error:', e);
    }
  }

  postSelectedHandler(id) {
    this.setState({ selectedPost: id });
  }
  render() {
    const posts = this.state.posts.map(({ id, title, author }) => {
      return (
        <Post
          key={id}
          title={title}
          author={author}
          clicked={() => this.postSelectedHandler(id)}
        />
      );
    });
    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost id={this.state.selectedPost} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;