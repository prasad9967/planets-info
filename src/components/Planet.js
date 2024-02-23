import React, { useState, useEffect } from 'react'
import User from './User'
import axios from 'axios'

const Planet = ({planet}) => {
    const [users, setUsers] = useState([])
   

    useEffect(()=>{
        fetchUsers()
    },[users])

    const fetchUsers = async () => {
        try {
            const promises = planet.residents.map(async (url) => {
                const {data} = await axios.get(url)
                return data
            })
        
        const data = await Promise.all(promises)
        setUsers(data)
        }catch(error){
            console.log(error)
        }
    }

  return (

    <div className="bg-gray-200 rounded shadow-md flex-shrink-0 p-6 mt-4 mx-4 w-64 sm:max-w-16 md:max-w-48 lg:max-w-64">
        <h2 className="font-bold text-xl mb-4">Planet Data:</h2>
            <p className="font-medium">Name: <span className="font-normal">{planet.name}</span></p>
            <p className="font-medium">Orbital Period: <span className="font-normal">{planet.orbital_period}</span></p>
            <p className="font-medium">Diameter: <span className="font-normal">{planet.diameter}</span></p>
            <p className="font-medium">Climate: <span className="font-normal">{planet.climate}</span></p>
            <p className="font-medium">Terrain: <span className="font-normal">{planet.terrain}</span></p>
            <p className="font-medium">Surface Water: <span className="font-normal">{planet.surface_water}</span></p>
            <p className="font-medium">Gravity: <span className="font-normal">{planet.gravity}</span></p>
            <p className="font-medium">Population: <span className="font-normal">{planet.population}</span></p>
       
        {/* <h2 className="font-bold text-xl mt-4 mb-2 lg:text-3xl">Residents Data:</h2>
        {users && users.map((user, idx)=> (
            <User key={idx} user={user} />
        ))} */}
    </div>
  )
}

export default Planet
