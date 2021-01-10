import React, { useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import CardTodo from '../components/cardTodo';
import { fetchTodo } from '../store/action';

export default function Todos() {
  const dispatch = useDispatch()
  const [filter,setFilter] = useState('')
  // const todos = useSelector(state => state.todos)
  const todos = useSelector(state => 
    state.todos.map((e)=>{
      if(!filter){
        return e
      }
      return e.status === filter

    })
  )

  useEffect(()=>{
    dispatch(fetchTodo())
  })

  return (
    <div className="container">
      {/* {
        JSON.stringify(todos)
      } */}
        <div className="row">
        {
        todos.map(data =>{
          return <CardTodo todo={data} key={data.id}/> 
        })
      }
        </div>
      
      
    </div>
  )
}
