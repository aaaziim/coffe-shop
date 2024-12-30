import { useState } from 'react'
import Swal from 'sweetalert2';
import { Link, useLoaderData } from 'react-router-dom'

function App() {
  const loadedCoffee = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffee);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Fixed by passing the correct id
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });

              // Remove the deleted coffee from the state
              const remainingCoffees = coffees.filter((coffee) => coffee._id !== id);
              setCoffees(remainingCoffees);
            }
          })
          .catch((error) => {
            console.error("Error deleting coffee:", error);
            Swal.fire({
              title: "Error",
              text: "Something went wrong while deleting the coffee.",
              icon: "error",
            });
          });
      }
    });
  };

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
              <Link to={`/coffees/${coffee._id}`}>
                <button className="btn btn-secondary w-full mb-2">View</button>
              </Link>
              <Link to={`/updatecoffee/${coffee._id}`}>
                <button className="btn btn-secondary w-full mb-2">Edit</button>
              </Link>
             
              <button onClick={() => handleDelete(coffee._id)} className="btn btn-danger w-full">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
