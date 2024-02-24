import React, { useEffect, useState } from 'react'
import usePlanetsFetcher from '../hooks/usePlanetsFetcher'
import Planet from './Planet'
import PaginationButtons from './PaginationButtons'

const Planets = () => {
    const {loading, pages, totalPages, currentPage, setCurrentPage} = usePlanetsFetcher()
   
  return (
    <div className='mx-2'>
        <div className='flex gap-2 flex-wrap justify-center'>
    {loading ?(<div className='text-center text-2xl mt-5'>Loading...</div>):( 
    pages.map((planet, idx)=> (
        <Planet key={idx} planet = {planet}/>
    )))
    }
    </div>
    {/* <div className='flex justify-center gap-10 mt-3'>
    <button className='btn' onClick={prevHandler}>Previous</button>
    <button className='btn' onClick={nextHandler}>Next</button>
    </div> */}
    {/* {loading ? (<div className='text-center text-2xl mt-5'>Loading...</div>) : (<>
        <PaginationButtons totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </>)} */}
    <PaginationButtons totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </div>
  )
}

export default Planets
