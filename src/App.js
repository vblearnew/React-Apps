import React from 'react'
import TodoList from './TodoList'
import AddTodo  from './AddTodo.js'


class App extends React.Component {
  state = {
    todo:[
      {id:1,content:"clean Room"},
      {id:2,content:"shoping"}
    ]
  }

  AddTodoFunc = (todoParam) => {
    todoParam.id = Math.random();
    const newtodoParam = [...this.state.todo,todoParam];
    this.setState({
      todo:newtodoParam
    })
  }

  DeleteTodoFunc = (id) =>{
    const deletetoDo = this.state.todo.filter((deletetoDoItem)=>{
      return deletetoDoItem.id !== id
    })
    this.setState({
      todo:deletetoDo
    })
  }

  render(){
    return(
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <TodoList todo={this.state.todo} DeleteTodoFunc={this.DeleteTodoFunc}/>
        <AddTodo AddTodoFunc={this.AddTodoFunc} />
      </div>
    )
  }
}
 
export default App
