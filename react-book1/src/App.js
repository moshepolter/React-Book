import React, {Component} from 'react';
export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      userName:"Adam",
      todoItems: [{
        action: "buyflowers", done: false,
        action: "get shoes", done: false,
        action: "collect tickets", done: false,
        action: "call joe", done: false,
      }],
    }
  }
  updateNewTextValue = (event) =>{
    this.setState ({newItemText: event.target.value})
  }
  creatNewTodo = () =>{
    if(!this.state.todoItems
      .find(item => item.action === this.state.newItemText)){
        this.setState({
          todoItems: [...this.state.todoItems,
            {action: this.state.newItemText, done: false}],
            newItemText: ""
        })
    }
  }
  toggleTodo = (todo) => this.setState({ todoItems:
  this.state.todoItems.map(item => item.action === todo.action
    ? {...item, done:!item.done}: item) });
    todoTableRows = () => this.state.todoItems.map(item =>
      <tr key={item.action}>
        <td>{item.action}</td>
        <td>
          <input type="checkbox" checked={item.done}
          onChange={() => this.toggleTodo(item)} />
        </td>
      </tr>);

  render(){
    return(
      <div>
        <h4 className="bg-primary text-white text-center p-2">
          {this.state.userName}`s To Do List
          ({this.state.todoItems.filter(t => !t.done).length} item(s) to do)
        </h4>
      <div className="container-fluid">
        <div className="my-1">
          <input className="form-control"
          value={this.state.newItemText}
          onChange={this.updateNewTextValue} />
        <button className="btn btn-primary m-2" 
          onClick={this.creatNewTodo}>
          Add
        </button>
        </div>
        <table className="table table-stripped table-borderd">
          <thead>
            <tr>
              <th>
                Description
              </th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>
            {this.todoTableRows() }
          </tbody>
          </table>
      </div>
    </div>
    )
  }
}



