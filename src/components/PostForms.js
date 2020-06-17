import React,{Component} from 'react'
import axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

class PostForm extends Component {
    state = {
        title : '' ,
        body : '' ,
        userId : '112',
        isSubmitted : false,
        error : false
    }
    changeHandeler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    submithandeler = e =>{
        e.preventDefault()
        axios.post(`${BASE_URL}/posts`,{
            title : this.state.title ,
            body : this.state.body ,
            userId : this.state.userId,
        })
            .then(res =>{
                this.setState({
                    isSubmitted : true,
                    error : false
                })
                console.log(res);  
                //e.target.reset()              
            })
            .catch(e => {
                this.setState({
                    er : true ,
                    isSubmitted : false
                })
            })
    }
    render(){
        return(
            
            <form onSubmit={this.submithandeler}>  
            <h1>RM Soft Soln</h1>
                <input
                        type="text"
                        placeholder="Enter Your Title"
                        className="form-control"
                        name="title"
                        id="email"
                        value={this.state.title}
                        onChange={this.changeHandeler} 
                    />

                <textarea
                    placeholder="Enter Your Text"
                    className="form-control"
                    name="body"
                    id="email"
                    value={this.state.body}
                    onChange={this.changeHandeler} 
                />

                <button type="submit" className="btn btn-success" >Submit</button>

                {this.state.isSubmitted && <p>Form Submitted Successfully </p>}
                {this.state.error && <p>Error Occured </p>}
            </form>

            
        )
    }
}

export default PostForm