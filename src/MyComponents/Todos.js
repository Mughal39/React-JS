import React from 'react'
import {TodoItem} from "../MyComponents/TodoItem";

export const Todos = ({todos, onDelete}) => {
    return (
        <div className= "container">
            <h3 className=" my-3">Todos List</h3>

            {todos.length === 0? "NO Todos to display ":
            todos.map((todo)=>{
                return <TodoItem todo={todo} key={todo.sno} onDelete={onDelete}/>
                })
            }
            
        </div>
    )
}
