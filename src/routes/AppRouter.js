import React, { useContext } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext'
import {Login} from '../pages/Login'
import { DashboardRouter } from './DashboardRouter'

export const AppRouter = () => {

  const {user} = useContext(AuthContext);
  const logueado = user.logueado;


  return (
    <BrowserRouter>
        <div className=''>
            <Routes>
                <Route path='/login' element={ !logueado ? <Login/> : <Navigate to='/marvel' />}/>
                <Route path='*' element={ logueado ? <DashboardRouter/> : <Navigate to='/login' />}/>
            </Routes>
        </div>
    </BrowserRouter>
  )
}
