import React, { useRef } from "react";
import classes from './NewTodo.module.css'
import { TodoContext } from '../store/todos-context'

import { useContext } from 'react'

const NewTodo =  () => {
    const todoCtx = useContext(TodoContext);
    const todoinputRef = useRef<HTMLInputElement>(null);

    const AddNewHandler = (e: React.FormEvent) => {
        e.preventDefault()
        const text = todoinputRef.current!.value;
        if (text.trim().length === 0) return ;
        todoCtx.addTodo(text);
        todoinputRef.current!.value = '';
    }
	return (
        <form onSubmit={AddNewHandler} className={classes.form} >
            <label htmlFor="text">New Todo</label>
            <input type='text' id="text" ref={todoinputRef} ></input>
            <button>Add</button>
        </form>
	);
}

export default NewTodo;