import todo from './../models/todo'
import classes from './TodoItem.module.css'

const Todo: React.FC<{todo: todo, RemoveTodo: (id: string) => void }> = (props) => {
    const RemoveHandler = () => {
        props.RemoveTodo(props.todo.id)
    }

	return (
		<li className={classes.item} key={props.todo.id} onClick={RemoveHandler} >{props.todo.text} </li>
	);
}

export default Todo;