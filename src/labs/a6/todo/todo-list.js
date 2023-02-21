import todos from './todos.json'
import TodoItem from './todo-item'

const TodoList = () => {
    return (
        <>
            <h3>Todo List</h3>
            <ul>
                {
                    todos.map(todo => {
                        return (<TodoItem todo={todo} key={todo.id} />);
                    })
                }
            </ul>
        </>
    );
};
export default TodoList;