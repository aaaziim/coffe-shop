import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleCoffe = () => {
    const coffee = useLoaderData()
    return (
        <div>
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
             
              
            </div>
          </div>
        </div>
    );
};

export default SingleCoffe;