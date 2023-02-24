import { useEffect } from "react"
import React from 'react'
import axios from "axios"
const DataTable = () => {
    useEffect(()=>{
        axios
            // .get(`https://swapi.dev/api/starship/?page=1`)
            // .get(`https://swapi.dev/api/starships/?page=2`)
            .get(`https://swapi.dev/api/planets/?page=2`)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    },[])
  return (
    <div>
      
    </div>
  )
}

export default DataTable
