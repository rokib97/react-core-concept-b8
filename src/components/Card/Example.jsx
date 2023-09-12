import React from "react";

const Example = ({ children }) => {
  const names = ["rokib", "shakib", "afia chy", "sabrina"];
  return (
    <div>
      <h1>Hello</h1>
      {children}
      {names.map((item) => (
        <h2>{item}</h2>
      ))}
    </div>
  );
};

export default Example;
