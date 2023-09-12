import React from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Example from "./components/Card/Example";
import UseState from "./components/Card/UseState/UseState";
import PropsDrilling from "./components/PropsDrillig/PropsDrilling";
import FetchData from "./components/UseEffect/FetchData";
import USeEffect from "./components/UseEffect/USeEffect";

function App() {
  const data = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ];
  const myarr = [<h1>hello</h1>, <h2>Gelo</h2>];
  return (
    <>
      <h1 className="text-4xl text-center">Welcome To My Card</h1>
      <div className=" grid grid-cols-3 gap-4 px-12">
        {data.map((item) => {
          console.log(item);
          return <Card item={{ ...item }} key={item.id} />;
        })}
      </div>
      <Example>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, ea?
        </p>
      </Example>

      <UseState />
      <USeEffect />
      <FetchData />
      <PropsDrilling />
    </>
  );
}

export default App;
