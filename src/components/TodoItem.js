const TodoItem = ({ todo, setRefresh }) => {
    const updateTodo = () => {
        todo.done = !todo.done;
        fetch('http://localhost:8000/todos/' + todo.id, {
            method: 'PUT',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        }).then(() => {
            setTimeout(() => {
				alert('todo updated.')
			}, 500)
            setRefresh(true)
        })
    }
    return (
        <li className={`${todo.done ? 'checked' : ''}`} >
            <div onClick={updateTodo}>
                {todo.title} 
            </div>
            <span className="close">x</span>
        </li>
    )
}

export default TodoItem;