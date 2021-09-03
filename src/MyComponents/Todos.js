import React from 'react'
import {TodoItem} from "../MyComponents/TodoItem";

export const Todos = ({todos}) => {
    return (
        <div className= "container">
            <h3>Todos List</h3>
            <TodoItem todo={todos[0]}/>
        </div>
    )
}
