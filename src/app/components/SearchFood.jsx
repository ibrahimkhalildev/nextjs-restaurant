'use client'
import React, { use, useEffect, useState } from 'react'

const SearchFood = ({ foodPromise }) => {
  // const [foods, setFoods] = useState([])
  // const res = await fetch(
  //   'https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods'
  // )
  // const data = res.json()
  // const food = data.data

  const foods = use(foodPromise).data

  // useEffect(() => {
  //   fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods')
  //     .then(res => res.json())
  //     .then(data => setFoods(data.data))
  // }, [searchText])

  return (
    <div>
      <h2>Top Foods: {foods.length}</h2>
    </div>
  )
}

export default SearchFood
