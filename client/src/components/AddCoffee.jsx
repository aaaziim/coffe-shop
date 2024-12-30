import React, { useState } from 'react';

const AddCoffee = () => {


    const handleAddCoffee =(event) => {
        event.preventDefault();
        const name = event.target.coffeeName.value;
        const price = event.target.coffeePrice.value;
        const quantity = event.target.coffeeQuantity.value;
        const photoURL = event.target.coffeePhotoURL.value;
        const coffee = {name, price, quantity, photoURL}
        fetch("http://localhost:5000/coffee",{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(coffee)
        }).then(response => response.json())  // assuming the server responds with JSON
        .then(data => {
            // Do something with the response data
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    return (
        <div>
            <h1 className="text-6xl font-bold text-purple-600 text-center bg-gray-100 p-8 rounded-xl ">Add Coffee</h1>

            <form onSubmit={handleAddCoffee} className='text-center space-y-2 m-2'>

            <input type="text" placeholder="Coffee Name" className="input input-bordered w-full max-w-xs" name='coffeeName'/><br></br> 
            <input type="number" placeholder="Coffee Price" className="input input-bordered w-full max-w-xs" name='coffeePrice'/><br></br> 
            <input type="number" placeholder="Coffee Quantity" className="input input-bordered w-full max-w-xs" name='coffeeQuantity'/><br></br> 
            <input type="text" placeholder="Coffee Photo URL" className="input input-bordered w-full max-w-xs" name='coffeePhotoURL'/><br></br> 
           
            <button type="submit" className="btn btn-primary w-full max-w-xs">Add Coffee</button>

            </form>
           
        </div>
    );
};

export default AddCoffee;