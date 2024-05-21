import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const FoodCard = ({ item }) => {
  const {user} = useContext(AuthContext)
  const { name, image, price, recipe } = item;
  const handleAddtoCart = food => {
    console.log(food);
  }

  return (
    <div className="card w-full mt-6 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="iamge" />
      </figure>
      <p className="absolute right-0 mt-4 mr-4 bg-slate-900 text-white">${price}</p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button onClick={() => handleAddtoCart(item)} className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
