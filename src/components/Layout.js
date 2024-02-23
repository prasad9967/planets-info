import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Layout = () => {
  const [users, setUser] = useState([])
  const [count, setCount] = useState(1)
  useEffect(()=>{
    fetchPlanets(count)
  },[count])

  const fetchPlanets = async (count) => {
    try{
    const {data} = await axios.get(`https://swapi.dev/api/planets/?page=${count}&format=json`)
    setUser(data.results)
    }catch(error){
      console.error(error.message)
    }
  }

  const handleClick = () => {
      setCount(count+1)
  }

  return (
    <>
    User List - {count}
      <ul>
        {users ?(
          users.map((user,index)=>(
            <li key={index}> {user.name} </li>
          ))
        ) :null}
       
        </ul>
        <button className='btn' >Previous Page</button>
        <button className='btn' onClick={handleClick} >Next Page</button>
        
    </>
  )
}

export default Layout
