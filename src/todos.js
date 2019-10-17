import React from 'react'

const Todos = ({todos, deleteToDo, handleEdit}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span>{todo.content} <button onClick={() => {deleteToDo(todo.id)}}>x</button><button onClick={() => {handleEdit()}}><i class="fas fa-edit"></i></button></span>
                </div>
            )
        })
    ) : (
        <p className="center"> You have no Todo's left!</p>
    )
    return (
        <div className="Todos collection">
            {todoList}
        </div>
    )
}

export default Todos