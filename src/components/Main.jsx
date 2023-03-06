import React, { useState } from 'react'
import { ContenedorCards } from './ContenedorCards'
import { PokeCard } from './PokeCard'
import { UseFetch } from './UseFetch'


export const Main = ({results}) => {
    const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon")
    const estado=UseFetch(url)
    const {cargando,data}=estado
    //cargando?console.log("loading"):console.log(data.results)
    let frutas = ["Manzana", "Banana"]



  return (
    
    <div className='container w-75 mt-4'>
        <h1 className='text-center'>Lista de Pokemón</h1>
        <p className="card-text text-warning text-center">Atrápalos todos!</p>
        <div className="card border-primary mt-3 rounded-5">
        
            <div className="card-body d-flex flex-column">
                

                <div>
                {
                    cargando?
                    <div className="alert alert-dismissible alert-warning">
                        <h4 className="alert-heading">Cargando</h4>
                        <p className="mb-0">Porfavor espera...</p>
                    </div>
                    :
                    <div> 
                        

                        <div className='d-flex flex-row gap-5 justify-content-center m-4'>

                            <button   onClick={()=>setUrl(data.previous)
                            } type="button" class="btn btn-outline-danger rounded-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <polyline points="15 6 9 12 15 18" />
                                    </svg>
                            </button>

                            <button onClick={()=>setUrl(data.next)} type="button" class="btn btn-outline-light rounded-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <polyline points="9 6 15 12 9 18" />
                                    </svg>
                            </button>
                        </div>                        




                        <ContenedorCards results={data.results}></ContenedorCards>



                        <div className='d-flex flex-row gap-5 justify-content-center m-4'>

                            <button onClick={()=>setUrl(data.previous)}  type="button" class="btn btn-outline-danger rounded-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <polyline points="15 6 9 12 15 18" />
                                    </svg>
                            </button>

                            <button onClick={()=>setUrl(data.next)} type="button" class="btn btn-outline-light rounded-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <polyline points="9 6 15 12 9 18" />
                                    </svg>
                            </button>
                        </div> 
                        

                    </div>
                    
                    


                }
                </div>

                
            </div>
        </div>
        
       


        


            


    </div>
  )
}
