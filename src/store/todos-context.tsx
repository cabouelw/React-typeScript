import React, { useState } from "react";
import Todo from './../models/todo'

type todoContextObj ={
	items: Todo[];
	addTodo: (text: string) => void;
	removeTodo: (id: string) => void;
};

export const TodoContext = React.createContext<todoContextObj>({
	items: [],
	addTodo: () => {},
	removeTodo: (id: string) => {}
});

const TodoContextProvider= (props: any) => {

	const [todoItems, setTodoItems] = useState<Todo[]>([]);

	const AddTodoHandler = (text: string) => {
		console.log(text);
		const newtodo = new Todo(text);
		setTodoItems(prev => prev.concat(newtodo));
	};

	const RemoveHandler = (id: string) => {
		setTodoItems(prev => prev.filter(item => item.id !== id));
	};

	const contextValue: todoContextObj = {
		items: todoItems,
		addTodo: AddTodoHandler,
		removeTodo: RemoveHandler
	};

	return (<TodoContext.Provider value={contextValue}>
		{props.children}
	</TodoContext.Provider>);
}

export default TodoContextProvider;