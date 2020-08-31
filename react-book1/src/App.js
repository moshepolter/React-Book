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
  render(){
    return(
      <div>
        <h4 className="bg-primary text-white text-center p-2">
          {this.state.userName}`s To Do List
          ({this.state.todoItems.filter(t => !t.done).length} item(s) to do)
        </h4>
      <button className="btn btn-primary m-2" 
        onClick={this.creatNewTodo}>
        Add
      </button>
    </div>
    )
  }
}



