import React, { Component } from 'react'
import AxiosAPI from './axios'

export class AddTodo extends Component {
  state ={
    'title': '',
    'description': '',
    'due_date': ''
  }
  handlerChange = (e)=> {
    this.setState({ [e.target.name]: e.target.value})
  }
  handlerSubmit=async(e)=>{
    e.preventDefault()
    // console.log(this.state)
    await AxiosAPI.post('/todos',this.state)
      .then (response=>{
        console.log(response)
      })
      .catch(err=>{
        console.log(err)
      })
    this.props.history.push('/')
  }
  render() {
    return (
      <div className="container">
        <h2> Add Todo</h2>
        <form onSubmit={this.handlerSubmit}>
          <table>
            <tbody>
              <tr>
                <td>Title</td>
                <td> <input type="text" name="title" onChange={this.handlerChange}/></td>
              </tr>
              <tr>
                <td>Description</td>
                <td> <input type="text" name="description" onChange={this.handlerChange}/></td>
              </tr>
              <tr>
                <td>Due Date</td>
                <td> <input type="date" name="due_date" onChange={this.handlerChange}/></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td><input type="submit" value="Add" className="btn btn-info"/></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    )
  }
}

export default AddTodo
