import React, { useState } from "react";
import '../App.css';

export const TodoInput = ( {todos, setTodos}) => {
    const [value, setValue] = useState("");

    return (
    <div>
        <div>
            <input type="text" className="InputBox"
            value = {value}
            onChange = { (e) => setValue(e.currentTarget.value)}
             />
             <button className="InputButton"
             onClick={ () => {
                 setTodos([...todos, value]);
                 setValue("");
             }}
             >ADD</button>
        </div>
        
    </div>
    );
};