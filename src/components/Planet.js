import React, { useState } from 'react'
import useUsersFetcher from '../hooks/useUsersFetcher'
import MyModal from './MyModal'

const Planet = ({planet}) => {
    const {users, fetchUsers} = useUsersFetcher(planet.residents)
    const [showMyModal, setShowMyModal] = useState(false)
    
    const clickHandler = () => {
      fetchUsers()
      setShowMyModal(true)
    }

    const handleOnClose = () => {
      setShowMyModal(false)
    }

  return (
    <>
      <div className="bg-gray-200 rounded shadow-md flex-shrink-0 p-6 mt-4 mx-4 w-64 sm:max-w-16 md:max-w-48 lg:max-w-64">
          <p className="heading">Name: <span className="content">{planet.name}</span></p>
          <p className="heading">Orbital Period: <span className="content">{planet.orbital_period}</span></p>
          <p className="heading">Diameter: <span className="content">{planet.diameter}</span></p>
          <p className="heading">Climate: <span className="content">{planet.climate}</span></p>
          <p className="heading">Terrain: <span className="content">{planet.terrain}</span></p>
          <p className="heading">Surface Water: <span className="content">{planet.surface_water}</span></p>
          <p className="heading">Gravity: <span className="content">{planet.gravity}</span></p>
          <p className="heading">Population: <span className="content">{planet.population}</span></p>
          <div className='flex justify-center'><button className='btn ml-20' onClick={clickHandler}>See Residents</button></div>
      </div>
      <MyModal onClose = {handleOnClose} visible = {showMyModal} users={users}/>
    </>
  )
}

export default Planet
