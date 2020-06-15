import React from "react"

const initialState = {
    name: '',
    email: '',
    password: '',
    bio: '',
    country : '' ,
    gender : '' ,
    skills : [] 
}
class PostForm extends React.Component {
    constructor(){
        super()

        this.myForm = React.createRef()                                                 ///////////
    }
state = initialState

submitHandeler = (event) => {
    event.preventDefault() 
    console.log(this.state);

    this.myForm.current.reset()                                                         /////////
        this.setState({
            ...initialState
        })    
}

changeHandeler = event =>{
    if(event.target.type == 'checkbox'){
        console.log(event.target.checked)        
        if(event.target.checked){
            this.setState({
                ...this.state,
                skills : this.state.skills.concat(event.target.value)
                //skills:[...this.state.skills,event.target.value]
            })
            
        }
        else{
            this.setState({
                ...this.state,
                skills : this.state.skills.filter(skill => skill!= event.target.value)
            })
        }
    }
    else{
        this.setState({
            [event.target.name] : event.target.value
        })
    }
}
    
    render() {
        return (
            <form ref={this.myForm} onSubmit = {this.submitHandeler} >
                <div className="form-group">
                    <label htmlFor="name">Enter Full name</label>
                    <input
                        type="text"
                        placeholder="Enter name"
                        className="form-control"
                        name="name"
                        id="name"
                        value={this.state.name}
                        onChange={this.changeHandeler} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Enter email</label>
                    <input
                        type="email"
                        placeholder="Enter email"
                        className="form-control"
                        name="email"
                        id="email"
                        value={this.state.email}
                        onChange={this.changeHandeler} />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Enter your password</label>
                    <input
                        type="password"
                        placeholder="Enter password"
                        className="form-control"
                        name="password"
                        id="password"
                        value={this.state.password}
                        onChange={this.changeHandeler} />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Enter your short bio</label>
                    <textarea
                        type="text"
                        placeholder="Enter your bio"
                        className="form-control"
                        name="bio"
                        id="bio"
                        value={this.state.bio}
                        onChange={this.changeHandeler} />
                </div>
                <div className="form-group">
                    <label htmlFor="country">Chose your country</label>
                    <select className="form-control" onChange = {this.changeHandeler} name="country" id="country" >
                        <option value="Select" >Select Your C ountry</option>
                        <option value="Bangladesh" >Bangladesh</option>
                        <option value="Australiya" >Australiya</option>
                        <option value="USA" >USA</option>
                        <option value= "UK" >UK</option>
                        <option value= "Germany" >Germany</option>                        
                    </select>
                </div>
                <div className = "form-group">
                    <div className = "form-check">
                        <input onChange={this.changeHandeler} type="radio" name= "gender"
                        id="gender1" value="Male" />
                        <label htmlFor = "gender1">Male</label>
                    </div>
                    <div className = "form-check">
                        <input onChange={this.changeHandeler} type="radio" name= "gender"
                        id="gender2" value="female" />
                        <label htmlFor = "gender2">Female</label>
                    </div>
                    <div className = "form-check">
                        <input onChange={this.changeHandeler} type="radio" name= "gender"
                        id="gender3" value="other" />
                        <label htmlFor = "gender3">Other</label>
                    </div>
                </div>
                <div className = "form-group">
                    <div className = "form-check">
                        <input className = "form-check-input" onChange={this.changeHandeler} type="checkbox"
                        id="js" value="Javascript" name = "skills" />
                        <label htmlFor = "js">Javascript</label>
                    </div>
                    <div className = "form-check">
                        <input className = "form-check-input" onChange={this.changeHandeler} type="checkbox"
                        id="react" value="React js" name = "skills" />
                        <label htmlFor = "react">React js</label>
                    </div>
                    <div className = "form-check">
                        <input className = "form-check-input" onChange={this.changeHandeler} type="checkbox"
                        id="angular" value="Angular js" name = "skills" />
                        <label htmlFor = "angular">Angular js</label>
                    </div>
                    <div className = "form-check">
                        <input className = "form-check-input" onChange={this.changeHandeler} type="checkbox"
                        id="node" value="Node js" name = "skills" />
                        <label htmlFor = "node">Node js</label>
                    </div>
                </div>

                <button className='btn btn-primary' type="submit" >Submit</button>
            </form>
        )
    }
}

export default PostForm