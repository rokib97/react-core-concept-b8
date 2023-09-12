import React, { useEffect, useState } from "react";

const USeEffect = () => {
  const [value, setValue] = useState(0);
  const [data, setData] = useState("rokib");

  const handleClick = () => {
    setValue(value + 1);
  };

  const handleMinus = () => {
    setData("hasan");
  };
  useEffect(() => {
    console.log("running from useEffet");
  }, []);

  return (
    <div className="text-4xl text-center">
      <h1>Count: {value}</h1>
      <button className="btn btn-success" onClick={handleClick}>
        Add
      </button>
      <h1>{data}</h1>
      <button className="btn btn-success" onClick={handleMinus}>
        Chnage
      </button>
    </div>
  );
};

export default USeEffect;
