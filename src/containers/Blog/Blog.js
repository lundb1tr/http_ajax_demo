import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import { Route, NavLink, Switch } from 'react-router-dom';
import FullPost from './FullPost/FullPost';

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                {/* Prevents sending new request, thus reloading the app.  Only re-renders the page */}
                <NavLink
                  to="/"
                  exact
                  activeClassName="my-active"
                  activeStyle={{
                    color: '#fa923f',
                    textDecoration: 'underline',
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                {/* Prevents sending new request, thus reloading the app.  Only re-renders the page */}
                <NavLink
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
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/" exact component={Posts} />
          <Route path="/new-post" exact component={NewPost} />
          {/* :id will tell the Route to use a dynamic value to create the path */}
          <Route path="/:id" exact component={FullPost} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
