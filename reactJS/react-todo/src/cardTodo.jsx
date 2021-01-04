import React from 'react'
import AxiosAPI from './axios'
import {confirmAlert} from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

export default function cardTodo({todo,refresh}) {
  const classes = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }))
  async function deleteTodo(){
    await AxiosAPI.delete("/todos/" + todo.id)
    return refresh()
  }
  function alert () {
    confirmAlert({
      title: 'Delete ?',
      message: "Are You Sure?",
      buttons: [
        {
          label: 'Yes',
          onClick: ()=> deleteTodo()
        },
        {
          label: 'No',
          onClick: ()=> {}
        }
      ]
    })
  }
  return (
    
    <div className="col-md-3 card" style={{margin:5}}>
      <h3> {todo.title}</h3>
      <small> {todo.description} </small>
      <small> status: {todo.status} </small>
      <small> deadline: {todo.due_date} </small>
      
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        
      <Button
        onClick={alert}
        variant="contained"
        size="small"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
      {/* <button type="small-button" className="btn btn-danger" onClick={alert} > delete</button> */}
        <Link to={"/edit/" + todo.id}>
          <button type="button" className="btn btn-warning"> edit </button>
        </Link>
      </div>

    </div>
  )
}
