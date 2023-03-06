import React, { useEffect, useState } from 'react'

export const UseFetch = (url) => {
    const [result,setResult]=useState({cargando:true,data:null})

    useEffect (()=>{
        getDatos(url)
    },[url])
    
    async function getDatos(url){
        try{
            setResult({cargando:true,data:null})
            const resp=await fetch(url)
            const data=await resp.json()
            setResult({cargando:false,data})
        }catch(e){
            console.log(e)
        }
        
    }

  return result
    //retorna los dtos de pokemon
    
  
}
