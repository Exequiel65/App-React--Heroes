import React from 'react'
import { HeroesList } from '../components/HeroesList'

export const Marvel = () => {
  return (
    <div>
      <h1>Marvel</h1> 
      <HeroesList editorial={"Marvel Comics"}/>
    </div>
    
  )
}
