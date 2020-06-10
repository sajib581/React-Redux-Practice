import React, { Component } from 'react';
import './App.css';

import Example from '../components/Example'

class App extends Component {
  state = {
    name : ""
  }
  clickHandeler = (event) =>{
    console.log(event.target)    
  }
  inputHandeler = (event) => {
    this.setState({
      name : event.target.value
    }) 
  }  
    
  render(){ 
    return (
      <div className="App">
        <div class="container my-3">
        <input onChange={this.inputHandeler} type="text" placeholder="Enter your name"/>
          <button className= "btn btn-primary" onClick={ (event)=> console.log(event.target) }>
            Click Me
          </button> 
          { this.state.name ? <p>Hello Mr. {this.state.name} </p>  : "" }
        
          <Example name="Sajib"/>
        </div>        
      
      </div>
      
    );
  }
}

export default App;
