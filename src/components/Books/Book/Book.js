import React, { Component } from 'react';

class Book extends Component {

state = {
  isEditable : false 
}
changeKeyHandeler = (event) => {
  if(event.key == "Enter"){
    console.log("You Press Enter Key")
    this.setState({
      isEditable : false
    })
  }
}

  render(){     
    let output = this.state.isEditable ?
    <input onChange = {(e) => this.props.changeHandeler(e.target.value,this.props.book.id)} 
    onKeyPress={this.changeKeyHandeler}
    type="text" placeholder = "Enter name" value={this.props.book.name} />
    : <p>{ this.props.book.name }</p>

    return (
    <li className="list-group-item d-flex">
      { output }
        <p>{ this.props.book.name }</p>
        <span className="ml-auto">${this.props.book.price}</span>
        <div className = "mx-4" >
          <span style={{cursor : "pointer"}} className = "mx-2" onClick = { ()=> this.setState({isEditable : true})}>
          <i class="fas fa-edit"></i>
          </span>
          <span style={{cursor : "pointer"}} onClick={() => {
            this.props.deleteHandeler(this.props.book.id)
          } } >
          <i class="fas fa-trash"></i>
        </span>

        </div>
    </li>   
      
    );
  }
}

export default Book;
 