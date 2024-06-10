import React,{useState} from 'react'
import {useTodo} from '../contexts/TodoContext'

function TodoForm() {
    const [todo,setTodo]=useState("");
    const {addTodo}=useTodo()

    const add=(e)=>{
        e.preventDefault();
        if (!todo) return;

        addTodo({todo,completed:false});
        setTodo("")
    }

    
    return (
        <form  className="flex" onSubmit={add}>
            <input
                onChange={(e)=>setTodo(e.target.value)}
                value={todo}
                type="text"
                placeholder="Write Todo..."
                className="w-full border placeholder:text-white text-white border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-[#e1dbdb98] py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

