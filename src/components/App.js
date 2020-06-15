import React, { Component } from 'react';
import './App.css';

import axios from 'axios'
import PostForm from './forms/PostForm'

class App extends Component {

  state = {
    posts: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(Response => {
        this.setState({
          posts: Response.data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
  render() {
    let { posts } = this.state
    if (posts.length == 0) {
      return <h1 style={{ textAlign: "center" }}> Loading ... </h1>
    }
    return (
      <div className='container'>
        <div className="row">
          <div className="col-sm-8 offset-sm-2">
            <PostForm />
          </div>
        </div>
      </div>

    );
  }
}

export default App;
