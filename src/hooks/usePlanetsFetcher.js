import axios from 'axios'
import { useEffect, useState } from 'react'

const usePlanetsFetcher = () => {
    const totalPages = 6
    const [loading, setLoading] = useState(true)
    const [pages, setPages] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(()=>{
        const fetchPlanets = async () => {
            const page = Math.min(currentPage, totalPages)
            try{
            const {data} = await axios.get(`https://swapi.dev/api/planets/?page=${page}&format=json`)
            setPages(data.results)
            setLoading(false)
            }catch(error){
                console.log(error)
            }
        }
        fetchPlanets()
    },[currentPage])

    return{
        loading, pages, totalPages, currentPage, setCurrentPage
    }
}

export default usePlanetsFetcher
