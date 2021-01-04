import React, { Component } from 'react'
import CardTodo from './cardTodo'
import AxiosAPI from './axios'
export class listtodos extends Component {
  state={
    listtodo:[]
  }
  componentDidMount = async () => {
    await AxiosAPI.get('/todos')
    .then(response => this.setState({
      listtodo: response.data

    }))
  }
  render() {
    const renderList = this.state.listtodo.map(todo =>{
      return (
        <CardTodo todo={todo} key={todo.id} refresh={this.componentDidMount}/>
      )
    
    })
    return (
      <div className="container">
        <div className="row">
          {renderList}
        </div>
      </div>
      
    )
  }
}

export default listtodos
