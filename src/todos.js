import React from 'react'

const Todos = ({todos, deleteToDo}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => {deleteToDo(todo.id)}}>{todo.content} <button>x</button></span>
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