import React, {Component} from 'react'

export default class AddTodo extends Component {
    state={
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addToDo(this.state);
        this.setState({
            content: ''
        })
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Add New To-Do</label>
                <input type="text" onChange={this.handleChange} value={this.state.content}/>
            </form>
        )
    }
}