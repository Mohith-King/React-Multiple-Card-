import React from 'react'

const Student = ({course,price,yop,note}) => {
  return (
    <div className='bg-red-100 p-10 text-center font-extrabold v '>
        <h1 className='text-2xl text-red-500 underline'>Management Shared</h1>
        <h1 className='text-xl '>Regrading {course} </h1>
        <p>The Price of Course {price}</p>
        <p>Should Be {yop} </p>
        <p> Please Studenets Remember this {note} </p>
    </div>
  )
}

export default Student