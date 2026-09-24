import React from 'react'
import Counter from '../components/Counter'

const DashboardPage = () => {
  console.log('Server page rendered!')
  return (
    <div>
      <h2>Dashboard Page</h2>
      <Counter></Counter>
      <ul>
        <li>Item 01</li>
        <li>Item 02</li>
        <li>Item 03</li>
        <li>Item 04</li>
        <li>Item 05</li>
      </ul>
    </div>
  )
}

export default DashboardPage
