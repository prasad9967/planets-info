import React from 'react'
import usePlanetsFetcher from '../hooks/usePlanetsFetcher'
import Planet from './Planet'
import PaginationButtons from './PaginationButtons'

const Planets = () => {
    const {loading, pages, totalPages, currentPage, setCurrentPage} = usePlanetsFetcher()
   
  return (
    <div className='mx-2'>
        <div className='flex gap-2 flex-wrap justify-center'>
    {loading 
    ?(<div className='text-center text-2xl mt-5'>Loading...</div>)
    :( 
    pages.map((planet)=> (
        <Planet key={planet.name} planet = {planet}/>
    )))
    }
    </div>
    <PaginationButtons totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </div>
  )
}

export default Planets
