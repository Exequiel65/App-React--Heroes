import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import {Marvel} from '../pages/Marvel'

export const DashboardRouter = () => {
  return (
    <>
    <Navbar/>
    <div className='mt-3'>
        <Routes>
            <Route path='/marvel' element={<Marvel/>}/>
            <Route path='*' element={
                <main>
                    <p>Estás perdido??</p>
                </main>
            }/>
        </Routes>
    </div>
    </>
  )
}
