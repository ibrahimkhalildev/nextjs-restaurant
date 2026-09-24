"use client"

import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  const handleIncrease = () => {
    console.log('Increase button clicked')
    setCount(count + 1)
  }

  console.log('Counter component Render')
  return (
    <div>
      <h2 className='text-4xl font-bold mb-4'>Counter: {count}</h2>

      <button
        onClick={handleIncrease}
        class='bg-sky-500 hover:bg-amber-200 p-2 rounded-2xl'
      >
        Increase
      </button>
    </div>
  )
}

export default Counter
