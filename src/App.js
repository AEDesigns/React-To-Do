import React, {Component} from 'react'
import Todos from './todos'
import AddTodo from './addform'

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
    addToDo = (todo) => {
        todo.id = Math.random();
        let todos = [...this.state.todos, todo]
        this.setState({
            todos
        })
    }
    render() {
        return (
            <div className="todo-app container">
                <h1 className="center blue-text">Todo's<br /><small>Click to delete items</small></h1>
                <Todos todos={this.state.todos} deleteToDo={this.deleteToDo}/>
                <AddTodo addToDo={this.addToDo}/>
            </div>
        )
    }
}