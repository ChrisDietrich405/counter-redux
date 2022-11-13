import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {loginAction, logoutAction, decrement, increment} from "./actions"

const App = () => {
  const loggedIn = useSelector((state) => state.loggedIn)
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  
  return (
    <div>
      <button onClick={() => dispatch(increment(11))}>add</button>
      <span>{counter}</span>
      <button onClick={() => dispatch(decrement(11))}>subtract</button>


      <button onClick={() => dispatch(loginAction())}>login</button>
      
      <button onClick={() => dispatch(logoutAction())}>logout</button>
      {loggedIn ? <h1>hello</h1> : ""}
    </div>
  )
}

export default App