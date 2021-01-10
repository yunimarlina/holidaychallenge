import React, { useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import AxiosAPI from './axios'
import { addTodo } from '../store/action';

export default function AddTodo() {
  const dispatch = useDispatch()
  const history = useHistory()
  const [title,setTitle] = useState('')
  const [description,setDescription] = useState('')
  const [due_date,setDue_date] = useState('')
  

 

  async function handlerSubmit (e){
    e.preventDefault()
    try {
      await dispatch(addTodo({
        title,
        description,
        due_date
      }))
      history.push('/')

    }
    catch (err){
      console.log(err)
    }
    
    // await AxiosAPI.post('/todos',this.state)
    // .then (response=>{
    //   console.log(response)
    // })
    // .catch(err=>{
    //   console.log(err)
    // })
   
    
    
  }

    return (
      <div className="container">
        <h2> Add Todo</h2>
        <form onSubmit={this.handlerSubmit}>
          <table>
            <tbody>
              <tr>
                <td>Title</td>
                <td> <input type="text" name="title" value={title}
                      onChange={(e) => setTitle(e.target.value)}/> </td>
              </tr>
              <tr>
                <td>Description</td>
                <td> <input type="text" name="description" value={description}
                      onChange={(e) => setDescription(e.target.value)}/></td>
              </tr>
              <tr>
                <td>Due Date</td>
                <td> <input type="date" name="due_date" value={due_date}
                      onChange={(e) => setDue_date(e.target.value)}/></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td><input type="submit" value="Add" className="btn btn-info" 
                  onClick={(e) => handlerSubmit(e)}/></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    )
  
}

