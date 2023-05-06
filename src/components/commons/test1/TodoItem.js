import React from 'react'
import styled from 'styled-components';


function TodoItem(props) {

    const TodoItem = styled.div`
    
    width: 300px;
    height: 100px;
    font-size: 15px;
    color: var(--color-purple2);
    border: 1px solid var(--color-green2);
    border-radius: 10px;
    `



    return (
        <div>
            <TodoItem>
                {props.item}
            </TodoItem>
        </div>
    )
}

export default TodoItem;