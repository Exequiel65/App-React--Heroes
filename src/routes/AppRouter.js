import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Login} from '../pages/Login'
import { DashboardRouter } from './DashboardRouter'

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <div className=''>
            <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='*' element={<DashboardRouter/>}/>
            </Routes>
        </div>
    </BrowserRouter>
  )
}
