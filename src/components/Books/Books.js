import React, { Component } from 'react';

import Book from './Book/Book'

class Books extends Component {
  render(){     
    return (
      <div >
        {this.props.books.map(book => {
            return (
                
                <Book name={book.name} price={book.price} />
            )
        })}
      </div>
      
    );
  }
}

export default Books;
