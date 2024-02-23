import React from 'react'

const User = ({user}) => {
  return (
    <>
        
        <div className="flex flex-col md:flex-row md:flex-wrap gap-4">
        <p className="font-medium lg:text-2xl">Name: <span className="font-normal">{user.name}</span></p>
        <p className="font-medium lg:text-2xl">Height: <span className="font-normal">{user.height}</span></p>
        <p className="font-medium lg:text-2xl">Mass: <span className="font-normal">{user.mass}</span></p>
        <p className="font-medium lg:text-2xl">Gender: <span className="font-normal">{user.gender}</span></p>
        </div>
    </>
  )
}

export default User
