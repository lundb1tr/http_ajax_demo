import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import { Route, Link } from 'react-router-dom';

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                {/* Prevents sending new request, thus reloading the app.  Only re-renders the page */}
                <Link to="/">Home</Link>
              </li>
              <li>
                {/* Prevents sending new request, thus reloading the app.  Only re-renders the page */}
                <Link
                  to={{
                    /* Always an absolute path */
                    pathname: '/new-post',
                    /* Dynamically/relatively created path */
                    // pathname: `${this.props.match.url}/new-post`,
                    hash: '#submit',
                    search: '?quick-submit=true',
                  }}
                >
                  New Post
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" exact component={NewPost} />
      </div>
    );
  }
}

export default Blog;
