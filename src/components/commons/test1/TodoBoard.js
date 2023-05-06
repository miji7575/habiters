import React from 'react'
import TodoItem from './TodoItem';

function TodoBoard(props){


    console.log("todoboard는",props.todoLists)

    return(
        <div>
            <h1>TodoList</h1>
            {props.todoLists.map((item) => <TodoItem item={item}/>)}

        </div>
    )
}

export default TodoBoard;