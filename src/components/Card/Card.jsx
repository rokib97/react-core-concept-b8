import React from "react";

const Card = (drops) => {
  console.log(drops.item);
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title my-custom-class">{drops.item.name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
        <figure>
          {/* <img src="https://i.ibb.co/L1b6xSq/shape.jpg" alt="Shoes" /> */}
          <img src="./images/shape.jpg" alt="" />
        </figure>
        <p></p>
        <p></p>
        <p>{drops.views}</p>
      </div>
    </div>
  );
};

export default Card;
