import React, { useState } from "react";

const UseState = () => {
  const arrayOfObjects = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "David" },
    { id: 5, name: "Eve" },
    { id: 6, name: "Frank" },
    { id: 7, name: "Grace" },
    { id: 8, name: "Hannah" },
    { id: 9, name: "Isaac" },
    { id: 10, name: "Julia" },
  ];

  const [data, setData] = useState(arrayOfObjects);

  const handleRemoveAll = () => {
    setData([]);
  };
  const handleSingleRemove = (id) => {
    console.log(id);
    const filteredData = data.filter((item) => item.id !== id);
    setData(filteredData);
  };

  return (
    <div className="text-center text-4xl my-24">
      {data &&
        data?.map((item, index) => (
          <div key={index}>
            <h1>{item.name}</h1>
            <button
              onClick={() => handleSingleRemove(item.id)}
              className="btn btn-xs btn-success"
            >
              remove
            </button>
          </div>
        ))}
      <button className="btn btn-accent" onClick={handleRemoveAll}>
        Remove All
      </button>
    </div>
  );
};

export default UseState;
