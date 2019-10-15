import React, {Component} from 'react'
import Todos from './todos'

export default class App extends Component {
    state = {
        todos: [
            {id: 1, content: 'Buy Milk'},
            {id: 2, content: 'Watch Avengers'}
        ]
    }
    deleteToDo = (id) => {
        const todos = this.state.todos.filter(todo => {
            return todo.id !== id
        })
        this.setState({
            todos
        })
    }
    render() {
        return (
            <div className="todo-app container">
                <h1 className="center blue-text">Todo's</h1>
                <Todos todos={this.state.todos} deleteToDo={this.deleteToDo}/>
            </div>
        )
    }
}