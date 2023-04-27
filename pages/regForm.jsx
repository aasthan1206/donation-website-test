import React from 'react'

const RegForm = () => {
  return (
    <div>
        <label htmlFor="">Name</label>
      <input type="text" name="name" id="" className='outline-red-500 border-red-500'/>
      <label htmlFor="">Email</label>
      <input type="text" className='border-red-500' />
    </div>
  )
}

export default RegForm
