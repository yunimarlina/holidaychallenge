// import React, { useEffect,useState } from 'react'
// import {useSelector, useDispatch,} from 'react-redux'
// import {fetchTodo} from '../store/action.js'
// import CardTodo from '../components/cardTodo'
// import AxiosAPI from '../components/axios'

// export default function listtodo(props) {
//   // const [filter,setFilter] = useState("")
//   const dispatch = useDispatch()
//   // const todos = useSelector(state => 
//   //   state.todos.filter((e)=>{
//   //     if (!filter){
//   //       return e
//   //     }
//   //     return e.status === filter
//   //   })
//   // )
//   useEffect(()=>{
//     dispatch(fetchTodo())
//   },[dispatch])

//   // state={
//   //   listtodo:[]
//   // }
//   // componentDidMount = async () => {
//   //   await AxiosAPI.get('/todos')
//   //   .then(response => this.setState({
//   //     listtodo: response.data

//   //   }))
  

//   return (
//       <div className="container">
//         {
//           todos
//         }
//         {/* <div className="row">
//         <CardTodo key={todos.id} />
//         </div> */}
//       </div>
      
//   )
  
// }


