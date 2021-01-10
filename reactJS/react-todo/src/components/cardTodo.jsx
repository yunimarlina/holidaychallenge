import React, { useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {confirmAlert} from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { deleteTodo } from '../store/action';


export default function CardTodo({todo,refresh}) {
  const dispatch = useDispatch()
  const classes = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }))
  function deleteHandler(id){
    console.log('hello')
    dispatch(deleteTodo(id))

    // return refresh()
  }
  function alert (id) {
    confirmAlert({
      title: 'Delete ?',
      message: "Are You Sure?",
      buttons: [
        {
          label: 'Yes',
          onClick: ()=> deleteHandler(id)
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
      {/* hi */}
      <h3> { todo.title } </h3>
      <small> description: {todo.description} </small>
      <small> status: {todo.status} </small>
      <small> deadline: {todo.due_date} </small>
      
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        
      <Button
        onClick={()=> alert(todo.id)}
        variant="contained"
        size="small"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
        <Link to={"/edit/" + todo.id}>
          <button type="button" className="btn btn-warning"> edit </button>
        </Link>
      </div>

    </div>
  )
}
