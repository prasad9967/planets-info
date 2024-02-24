import React from 'react'
import Resident from './Resident'

const MyModal = ({visible, onClose, users}) => {
    if(!visible) return null

    const handleOnClose = () => {
        onClose()
    }

  return (
    <div onClick = {handleOnClose} className='fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center'>
        <div className='bg-white p-2 rounded flex flex-wrap gap-4 mx-10'>
            {users.length > 0  
            ? (users.map((user)=>(
                <Resident key={user.name} user={user}/>
            ))) 
            : (<p className='p-10 rounded heading'>No Residents are Living in this planet</p>)}
        </div>
    </div>
  )
}

export default MyModal
