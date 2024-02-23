import ReactPaginate from 'react-paginate'
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs' 
import {motion} from 'framer-motion'

const PaginationButtons = ({setCurrentPage, currentPage, totalPages}) => {
  const handlePageClick = ({selected}) => {
    setCurrentPage(selected+1)
    console.log(selected)
  }
  const paginationVariants = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
        duration: 1,
      }
    }
  }
  const showNextButton = currentPage !== totalPages
  const showPrevButton = currentPage !== 1
  return (
    <motion.div variants={paginationVariants} initial='hidden'  animate='visible'>
      <ReactPaginate breakLabel={<span className='mr-4'>...</span>}
      nextLabel={showNextButton && (<span className='w=10 h-10 flex items-center justify-center rounded-md bg-lightGray'><BsChevronRight /></span>)}
      pageRangeDisplayed={5}
      pageCount={totalPages}
      previousLabel={showPrevButton ? (<span className='w=10 h-10 flex items-center justify-center rounded-md bg-lightGray'><BsChevronLeft /></span>):null}
      renderOnZeroPageCount={null}
      containerClassName='flex items-center justify-center mt-8 mb-4'
      pageClassName='block hover:bg-lightGray w-10 h-10 flex items-center justify-center rounded-md mx-2'
      activeClassName='bg-purple text-white'
      onPageChange={handlePageClick}
      />
    </motion.div>
  )
}

export default PaginationButtons
