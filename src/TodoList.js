import React from 'react'

function TodoList(props){
    const {todo,DeleteTodoFunc} = props
    const todoItems = todo.length ? (
        todo.map(todoitemvalue => {
          return (
            <div className="collection-item" key={todoitemvalue.id} >
                <span onClick={()=>{DeleteTodoFunc(todoitemvalue.id)}}>{todoitemvalue.content}</span>
            </div>
          )
        })
      ) : (
        <p className="center">You have no todo's left, yay!</p>
      );
    return(
        <div className="todos collection">
            {todoItems}
        </div>
    )
}

export default TodoList