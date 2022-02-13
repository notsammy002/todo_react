import React, { useState } from "react";
import '../App.css';
import { TodoInput } from "./TodoInputs";

export const TodoList = () => {
    const [todos, setTodos] = useState([]);

    return (
        <div>
            <TodoInput todos={todos} setTodos={setTodos} />
            <div>
             <ul className="UnListStyle">
                 {todos.map((TodoList, index) => {
                     return (
                         <li className="ListStyle">
                             <input type="checkbox" />
                             <span>{TodoList}</span>
                         </li>
                     )
                 })}
             </ul>
            </div> 
        </div>
    );

};