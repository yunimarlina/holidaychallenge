import React, { Component } from 'react'
import AxiosAPI from './axios'

export class EditTodo extends Component {
  state ={
    'id':'',
    'title': '',
    'description': '',
    'status': '',
    'due_date': ''
  }

  componentDidMount= async ()=>{
    const id = this.props.match.params.id
   await AxiosAPI.get('/todos/' + id)
    .then(({data})=>{
      // console.log(data)
      this.setState({
        id: data.id,
        title: data.title,
        description: data.description,
        status: data.status,
        due_date: data.due_date
      })
            console.log(this.state)

    })
  }
  handlerChange = (e)=> {
    this.setState({ [e.target.name]: e.target.value})
  }
  handlerSubmit=async(e)=>{
    e.preventDefault()
    // console.log(this.state)
    const id = this.state.id
    await AxiosAPI.put('/todos/' + id,this.state)
      .then (response=>{
        console.log(response)
      })
      .catch(err=>{
        console.log(err)
      })
    this.props.history.push('/')
  }
  render() {
    // const{title,description,status,due_date} = this.state
    return (
      <div className="container">
        <h2> Edit Todo</h2>
        <form onSubmit={this.handlerSubmit}>
          <table>
            <tbody>
              <tr>
                <td>Title</td>
                <td> <input type="text" name="title" value= {this.state.title} onChange={this.handlerChange}/></td>
              </tr>
              <tr>
                <td>Description</td>
                <td> <input type="text" name="description" value= {this.state.description} onChange={this.handlerChange}/></td>
              </tr>
              <tr>
                <td>Status</td>
                <td> <input type="text" name="status" value= {this.state.status} onChange={this.handlerChange}/></td>
              </tr>
              <tr>
                <td>Due Date</td>
                <td> <input type="date" name="due_date" value= {this.state.due_date} onChange={this.handlerChange}/></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td><input type="submit" value="Edit" className="btn btn-info"/></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    )
  }
}

export default EditTodo
