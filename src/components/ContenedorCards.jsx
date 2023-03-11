import React from 'react'
import { PokeCard } from './PokeCard'
import '../cssExtras/extras.css'

export const ContenedorCards = ({results,filtro}) => {
  return (
    <div>

        <ul className='cards'>
            {       
                results.filter((poke)=>{
                    return filtro.toLowerCase()===''
                    ?poke
                    :poke.name.toLowerCase().includes(filtro);

                }).map( p=>(
                    <li className='card-item' key={p.name}>
                        <PokeCard url={p.url}></PokeCard>
                    </li>
                ))   
            }

        </ul>
    </div>
    
    
  )
}
