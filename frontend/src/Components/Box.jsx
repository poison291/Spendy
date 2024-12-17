import React from 'react'

export default function Box() {
    const currentdate =  new Date()
  return (
    <>
    <div className="border-red-600 border-2 absolute w-[300px] mt-10">
        <h1 className='font-bold text-3xl font-mono'>Income </h1>
        <h1>Rs: 500K</h1>
    </div>
    </>
  )
}
