import React from 'react'

export const Nav = () => {
  return (
    <div>

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Pokemon API <small class="text-muted">by Juanlu & Alejix</small></a>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pokeball" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="9" cy="9" r="9" transform="translate(3 3)" />
                <circle cx="12" cy="12" r="3" />
                <path d="M3 12h6m6 0h6" />
                </svg>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">

            <ul className="ms-5 navbar-nav me-auto">

                <li className="nav-item">
                <a className="nav-link active" href="#">Inicio</a>
                </li>
                
                <li className="nav-item">
                <a className="nav-link" href="#">Mapa</a>
                </li>

                <li className="nav-item">
                <a className="nav-link" href="#">Objetos</a>
                </li>

                <li className="nav-item">
                <a className="nav-link" href="#">Aiuda</a>
                </li>
                <li className="nav-item dropdown">
                
                
                </li>
            </ul>

            
            </div>
        </div>
        </nav>
    
    </div>
  )
}
