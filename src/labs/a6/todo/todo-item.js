const TodoItem = ({todo}) => {
        return (
            <li>
                <span style={{paddingRight: "5px"}}>
                    <input type={"checkbox"} defaultChecked={todo.done}/>
                </span>
                {todo.title}
                ({todo.status})
            </li>
    );
};
export default TodoItem;