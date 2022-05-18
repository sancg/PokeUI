import React from "react";
import "./css/App.css";
import Pokemon from "./components/Pokemon";
import Navbar from "./components/Navbar";

const App = () => {
  // HOOKS ----->
  return (
    <section className="App">
      <Navbar />
      <Pokemon />
    </section>
  );
};

export default App;
