import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroesById } from '../helpers/getHeroeById'

export const Heroe = () => {

  const {heroeId} = useParams()
  const navigate = useNavigate()
  const heroe = getHeroesById(heroeId)

  return (
    <div className='row mt-4 animate_animated animate_fadeIn'>
      <div className='col-4'>
        <img className='img-thumbnail animate_animated animate_fadeLeft' src={`../assets/heroes/${heroeId}.jpg`} alt="" />

      </div>
      <div className='col-8'>
        <h3>{heroe.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>{heroe.publisher}</b></li>
          <li className="list-group-item"><b>{heroe.alter_ego}</b></li>
          <li className="list-group-item"><b>{heroe.first_appearance}</b></li>
        </ul>
        <button className='btn btn-outline-dark' onClick={()=>{
          navigate(-1)
        }} >Ir atras</button>
      </div>
    </div>
  )
}
