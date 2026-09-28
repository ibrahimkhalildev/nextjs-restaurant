import React from 'react'
import FoodCard from '../components/FoodCard'

const MenuPage = async () => {
  const res = await fetch(
    'https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods'
  )
  const data = await res.json()
  const foods = data.data
  console.log('Food Items Data', foods)
  return (
    <div>
      <h2>Food Menu Page</h2>
      <div className='grid grid-cols-3 gap-5'>
        {
          foods.map(food => <FoodCard key={food.id} food={food}/>)
        }
      </div>
    </div>
  )
}

export default MenuPage
