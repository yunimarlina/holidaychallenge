
import axios from 'axios'

export const fetchTodo = ()=>{
  return (dispatch,getState)=>{
    axios.get('http://localhost:3001/todos')
      // .then(res=> {
      //   if(!res.ok){
      //     throw Error(res.statusText)
      //   }
      //   else {
      //     return res.json()
      //   }
        
      // })
      .then( ({data} )=>{
        dispatch({
          type: "SET_TODO",
          payload: data
        })
      })
      .catch((err)=>{
        console.log(err)
      })
  }
}

export const deleteTodo = (id)=>{
  return (dispatch,getState)=>{
    axios.delete(`http://localhost:3001/todos/${id}`)
     
      .then( ({data} )=>{
        dispatch(fetchTodo())
      })
      .catch((err)=>{
        console.log(err)
      })
  }
}
export const addTodo = (payload)=>{
  return (dispatch,getState)=>{
    axios({
      URL: `http://localhost:3001/todos/`,
      method: "POST",
      data:{
        title: payload.title,
        description: payload.description,
        due_date: payload.due_date
        
      }
    })     
      .then( ({data} )=>{
        dispatch(fetchTodo())
      })
      .catch((err)=>{
        console.log(err)
      })
  }
}

