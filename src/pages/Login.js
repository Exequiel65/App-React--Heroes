import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types';
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const lastPath = localStorage.getItem('lastPath') || '/marvel'
  const navigate = useNavigate();
  const {dispatch} = useContext(AuthContext);
  const handleLogin = () =>{
    dispatch({
      type : types.login,
      payload : {
        name : "Marcos"
      }
    })
    navigate(lastPath)
  }
  return (
    <div className='mt-5'>
      <h1>Login</h1>
      <hr/>
      <button className='btn btn-primary' onClick={handleLogin}>
        Login
      </button>
    </div>
  )
}
