import React from 'react'

const SearchFood = async () => {
  const res = await fetch(
    'https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods'
  )
  const data = res.json()
  const food = data.data
  return (
    <div>
      <h2>Top Foods: {food.length}</h2>
    </div>
  )
}

export default SearchFood
