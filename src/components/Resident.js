import React from 'react'


const Resident = ({user}) => {
  console.log(user)
  return (
    <>
    {user &&(
      <div className="flex flex-col flex-shrink-0 ml-2 w-40">
      <p className="heading">Name: <span className="content">{user.name}</span></p>
      <p className="heading">Height: <span className="content">{user.height}</span></p>
      <p className="heading">Mass: <span className="content">{user.mass}</span></p>
      <p className="heading">Gender: <span className="content">{user.gender}</span></p>
      </div>
    )}
        
    </>
  )
}

export default Resident
