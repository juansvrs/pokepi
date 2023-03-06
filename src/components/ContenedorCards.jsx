import React from 'react'
import { PokeCard } from './PokeCard'
import '../cssExtras/extras.css'

export const ContenedorCards = ({results}) => {
  return (
    <div>

        <ul className='cards'>
            {       
                results.map( p=>(
                    <li className='card-item' key={p.name}>
                        <PokeCard url={p.url}></PokeCard>
                    </li>
                ))   
            }

        </ul>
    </div>
    
    
  )
}
