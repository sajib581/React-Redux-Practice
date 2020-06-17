import React, { Component } from 'react';
import './App.css';

import axios from 'axios'
//import PostForm from './forms/PostForm'
import PostForms from './PostForms'

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
    
    return (
      <div className='container'>
        <div className="row">
          <div className="col-sm-8 offset-sm-2">
            <PostForms />
          </div>
        </div>
      </div>

    );
  }
}

export default App;
