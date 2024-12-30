import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLoaderData } from 'react-router-dom'

function App() {

  const loadedCoffee = useLoaderData()

  const [coffees, setCoffees] = useState(loadedCoffee)

  return (
    <>
     <h1 className="text-6xl font-bold text-purple-600 text-center bg-gray-100 p-8 rounded-xl ">All Coffee</h1>

     <div className="grid grid-cols-2 gap-3">
     {coffees.map((coffee) => (
  <div key={coffee._id} className="max-w-sm rounded-lg shadow-lg overflow-hidden bg-white m-4">
    <img
      src={coffee.photoURL}
      alt={coffee.name}
      className="w-full h-64 object-cover"
    />
    <div className="p-4">
      <h2 className="text-2xl font-semibold text-gray-800">{coffee.name}</h2>
      <p className="text-lg text-gray-600">Price: ${coffee.price}</p>
      <p className="text-sm text-gray-500">Quantity: {coffee.quantity}</p>
      <p className="text-xs text-gray-400">ID: {coffee._id}</p>
      <button className="btn btn-primary w-full mb-2">Edit</button>
      <button className="btn btn-danger w-full">Delete</button>
    </div>
  </div>
))}
     </div>

    

    </>
  )
}

export default App
