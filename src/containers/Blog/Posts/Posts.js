import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {
  state = {
    posts: [],
  };

  postSelectedHandler(id) {
    /* Both syntaxes work to navigate programmatically */
    // this.props.history.push({ pathname: `/${id}` });
    this.props.history.push(`/${id}`);
  }

  async componentDidMount() {
    console.log(this.props);
    try {
      const posts = await axios.get('/posts');
      const trimmedPosts = await posts.data.slice(0, 4);
      const addAuthors = await trimmedPosts.map(post => {
        return {
          ...post,
          author: 'Tyler',
        };
      });
      this.setState({ posts: addAuthors });
      if (this.state.error) {
        this.setState({ error: false });
      }
    } catch (e) {
      if (!this.state.error) {
        // this.setState({ error: true });
      }
      console.error('Fetch Error:', e);
    }
  }

  render() {
    let posts = (
      <p style={{ textAlign: 'center' }}>
        Something went wrong getting the posts!
      </p>
    );
    if (!this.state.error) {
      posts = this.state.posts.map(({ id, title, author }) => {
        return (
          //<Link to={`/${id}`} key={id}>
          <Post
            key={id}
            className="Posts"
            title={title}
            author={author}
            clicked={() => this.postSelectedHandler(id)}
          />
          //</Link>
        );
      });
    }
    return <section className="Posts">{posts}</section>;
  }
}

export default Posts;
