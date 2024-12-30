import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    console.log(coffee);

    const handleUpdateCoffee = e => {
        e.preventDefault();

        const name = e.target.coffeeName.value;
        const price = e.target.coffeePrice.value;
        const quantity = e.target.coffeeQuantity.value;
        const photoURL = e.target.coffeePhotoURL.value;

        const newCoffee = { name, price, quantity, photoURL}
        console.log(newCoffee)

        // send data to the server and database
        fetch(`http://localhost:5000/coffee/${coffee._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    console.log('successfully updated');
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    });
                    e.target.reset();
                }
            })

    }

    return (
        <div>
            <h1 className="text-6xl text-purple-600 bg-gray-50 text-center p-6">Update Coffee</h1>

            <form onSubmit={handleUpdateCoffee} className='text-center space-y-2 m-2'>
                <input
                    type="text"
                    placeholder="Coffee Name"
                    defaultValue={coffee.name}
                    className="input input-bordered w-full max-w-xs"
                    name='coffeeName'
                />
                <br />
                <input
                    type="number"
                    placeholder="Coffee Price"
                    defaultValue={coffee.price}
                    className="input input-bordered w-full max-w-xs"
                    name='coffeePrice'
                />
                <br />
                <input
                    type="number"
                    placeholder="Coffee Quantity"
                    defaultValue={coffee.quantity}
                    className="input input-bordered w-full max-w-xs"
                    name='coffeeQuantity'
                />
                <br />
                <input
                    type="text"
                    placeholder="Coffee Photo URL"
                    defaultValue={coffee.photoURL}
                    className="input input-bordered w-full max-w-xs"
                    name='coffeePhotoURL'
                />
                <br />
                <button type="submit" className="btn btn-primary w-full max-w-xs">
                    Update Coffee
                </button>
            </form>
        </div>
    );
};

export default UpdateCoffee;
