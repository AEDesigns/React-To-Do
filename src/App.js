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

    handleEdit = (belch) => {
        const todos = this.state.todos.slice();
        todos.map((todo, index) => {
            if(todo.id === belch){
                console.log(todo.id)
            }
        })
    }

    addToDo = (todo) => {
        todo.id = Math.round(Math.random() * 1000);
        let todos = [...this.state.todos, todo]
        this.setState({
            todos
        })
    }

    render() {
        return (
            <div className="todo-app container">
                <h1 className="center blue-text">Todo's</h1>
                <Todos todos={this.state.todos} deleteToDo={this.deleteToDo} handleEdit={this.handleEdit}/>
                <AddTodo addToDo={this.addToDo}/>
            </div>
        )
    }
}