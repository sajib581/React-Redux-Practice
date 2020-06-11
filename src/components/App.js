import React, { Component } from 'react';
import './App.css';
import Books from './Books/Books'
import Book from './Books/Book/Book'

class App extends Component {
  
state = {
  books : [
    {
      name : 'Javascript',
      price : 30,
      id : 1
    },
    {
      name : 'React',
      price : 20,
      id : 2
    },
    {
      name : 'Redux',
      price : 10,
      id : 3
    },
    {
      name : 'React Native',
      price : 50,
      id : 4
    },
  ]
}

deleteHandeler = (id) => {
  let newState = this.state.books.filter((book)=>{
    return book.id != id
  })
  this.setState({
    books : newState
  })
}
changeHandeler = (name,id) => {
  let newBooks = this.state.books.map(book => {
    if(id==book.id){
      return {
        ...book,
        name
      }
    }
    return book    
  })
  this.setState({
    books : newBooks
  })
}

  render(){ 
    
    return (
      <div className='App'>
        
        {this.state.books.map(book => {
          return( 
          <Book changeHandeler = {this.changeHandeler.bind(this)}  
          deleteHandeler={this.deleteHandeler.bind(this)}  
          book={book} />
          )
        })}
      
      
      </div>
      
    );
  }
}

export default App;
