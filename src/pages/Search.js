import React, { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { HeroeCard } from '../components/HeroeCard'

import { getHeroesBySearch } from '../helpers/getHeroesBySearch'
import { useForm } from '../hooks/useForm'

export const Search = () => {

  const [ searchParams, setSearchParams ] = useSearchParams({
    keyword : ""
  })

  
  const [ inputValue, handleInputChange, reset ] = useForm({
    keyword : searchParams.get('keyword')
  })

  const handleSearch = (e)=>{
    e.preventDefault()
    setSearchParams({
      keyword : inputValue.keyword
    })
    reset()
  }

  console.log(searchParams.get('keyword'))
  const resultado = useMemo(()=> getHeroesBySearch(searchParams.get('keyword')), [searchParams])
  

  return (
    <div className='row'>
      <div className='col-3'>
        <h4>Búsqueda</h4>
        <hr/>
        <form onSubmit={handleSearch}>
          <input type="text" placeholder='Busca tu heroe...' className='form-control' name='keyword' onChange={handleInputChange} value={inputValue.keyword} />
        </form>
      </div>
      <div className='col-9'>
        <h4>Resultados</h4>
        <hr/>
        <div className='row'>
          {
            resultado.map(heroe =>(
              <HeroeCard key={heroe.id} {...heroe}/>
            ))
          }
        </div>

      </div>
    </div>
  )
}
