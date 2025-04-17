import React from 'react'
import Card from './Card.jsx'
import meals from '../data/meals.json'

const Weekdate = () => {
  return (
    <div className="flex flex-col md:flex-row text-center md:justify-evenly items-center">
      {meals.map((meal, index) => (
        <div key={index}>
          <h1 className="font-bold text-lg">{meal.day}</h1>
          <Card 
            title={meal.title}
            image={meal.image}
            description={meal.description}
          />
        </div>
      ))}
    </div>
  )
}

export default Weekdate