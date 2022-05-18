import React, { useEffect, useState } from "react";
import GetDataList from "../Services/GetDataList";
import Tarjeta from "./Tarjeta";

const Pokemon = () => {
  //Hooks ----->
  const [pokes, setPokes] = useState([]);

  useEffect(() => {
    GetDataList()
      .then(setPokes)
      .catch((error) => console.log(error));
    console.log("Veces que se ejecuta el UseEffect");
  }, []);

  return (
    <main className="pokedex">
      {pokes.map((item) => {
        return <Tarjeta key={item.id + Math.random()} data={{ ...item }} />;
      })}
    </main>
  );
};

export default Pokemon;
