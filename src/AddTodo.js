import React from 'react'

class AddTodo extends React.Component {
    state = {
        content:""
    }
    handleChange = (e) =>{
        this.setState({
            content:e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.AddTodoFunc(this.state);
        this.setState({
            content:'' 
        })
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange} placeholder="Add a new todo:" value={this.state.content} />
            </form>
        )
    }
}

export default AddTodo