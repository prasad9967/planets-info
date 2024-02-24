import { useState, useEffect } from "react"
import axios from "axios"

const useUsersFetcher = (residents) => {
  
    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
        try{
          const promises = residents.map(async (url) => {
            const {data} = await axios.get(url)
            return data
          })

          const data = await Promise.all(promises)
          setUsers(data)
        }catch(error){
          console.log(error)
        }
    }
      useEffect(() => {
        if(residents && residents.length > 0){
          fetchUsers()
        }
      }, [residents])
      
    
  return {
    users, fetchUsers
  }
}

export default useUsersFetcher
