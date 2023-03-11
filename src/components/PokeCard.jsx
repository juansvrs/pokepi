import React, { useState } from 'react'
import { UseFetch } from './UseFetch'

export const PokeCard = ({url}) => {

    const estado= UseFetch(url)
    const {cargando,data}=estado

  return (
    <div>
        {  
            cargando?
            <div className="alert alert-dismissible alert-warning">
                <h4 className="alert-heading">Cargando</h4>
                <p className="mb-0">Porfavor espera...</p>
            </div>
            : 
                <div  className=" card text-white bg-dark mb-3 d-flex">
                    <span class=" badge rounded-pill bg-warning">Id: {data.id}</span>

                    <div className='container d-flex gap-1'>

                    {

                        data.types.map(a=>{


                    switch (a.type.name) {
                        case "flying":
                            //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
                            return(<span class="badge rounded-pill bg-light text-capitalize">{a.type.name}</span>      )
                        case "fire":
                            return( <span class="badge rounded-pill bg-danger text-capitalize">{a.type.name}</span> )
                            //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2 
                        case "grass":
                            //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
                          return( <span class="badge rounded-pill bg-success text-capitalize">{a.type.name}</span>)
                        case "ice":
                                //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
                            return(<span class="badge rounded-pill bg-info text-capitalize" >{a.type.name}</span>)
                        case "water":
                                //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
                            return(<span class="badge rounded-pill bg-info text-capitalize">{a.type.name}</span>)
                        case "bug":
                                //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
                            return( <span class="badge rounded-pill bg-success text-capitalize">{a.type.name}</span>)
                        case "normal":
                                //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
                            return(   <span class="badge rounded-pill bg-dark">{a.type.name}</span>)

                        case "electric":
                                //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
                            return(   <span class="badge rounded-pill bg-warning">{a.type.name}</span>)

                        case "ground":
                         //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
                            return(   <span class="badge rounded-pill bg-warning">{a.type.name}</span>)
                        case "fairy":
                                //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
                            return(   <span class="badge rounded-pill bg-secondary">{a.type.name}</span>)
                        case "psychic":
                                //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
                            return(   <span class="badge rounded-pill bg-secondary">{a.type.name}</span>)


                          
                        default:
                            //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
                            return(<span class="badge rounded-pill bg-primary text-capitalize">{a.type.name}</span> )
                         }
                    //<span class="badge rounded-pill bg-primary">{a.type.name}</span>   
                      
                        }
                    )
        }
                    </div>
                    

                    
                    <img className="img-fluid w-75 align-self-center" src={data.sprites.other.home.front_default} alt="imgPokemon"/>
                    

                    <span className="badge bg-secondary fs-5 text-capitalize">{data.forms[0].name}</span>

                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Habilidades
                            </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    
                                    {
                                        data.abilities.map( a=>(

                                            <li className='card-item text-capitalize' key={a.name}>
                                                {a.ability.name}
                                            </li>
                                            
                                        ))   
                                          
                                    }
                                
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Más
                            </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <p>Estatura: {data.height}</p>
                                    <p>Peso: {data.weight}</p>
                                    
                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>







                </div>
        }
    </div>
  )
}
