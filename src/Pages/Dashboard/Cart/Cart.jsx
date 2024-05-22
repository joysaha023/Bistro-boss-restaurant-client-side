import React from "react";
import useCarts from "../../../Hooks/useCarts";
import { FaTrashAlt } from "react-icons/fa";

const Cart = () => {
  const [cart] = useCarts();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleDelete = id => {
    
  }

  return (
    <div>
      <div className="flex justify-evenly">
        <h1 className="text-3xl">Items: {cart.length}</h1>
        <h1 className="text-3xl">Total Price: {totalPrice}</h1>
        <button className="btn btn-primary">Pay</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, idx) => (
              <tr key={item._id}>
                <th>
                  {idx + 1}
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <th>
                  <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-md"><FaTrashAlt className="text-red-500"></FaTrashAlt></button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
