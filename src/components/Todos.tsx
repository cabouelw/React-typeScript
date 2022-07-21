import TodoC from './Todo'
import classes from './Todos.module.css'
import { TodoContext } from '../store/todos-context'

import { useContext } from 'react'

const Todos: React.FC = () => {
	const todoCtx = useContext(TodoContext)
	return (
		<ul className={classes.todos}>
			{todoCtx.items.map(todo =>
				<TodoC
					todo={todo}
					key={todo.id}
					RemoveTodo={todoCtx.removeTodo}
				/>)}
		</ul>
	);
}

export default Todos;