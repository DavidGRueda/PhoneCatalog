import React from "react";
import "./App.css";
import Header from "./components/Header";
import ListOfPhones from "./components/ListOfPhones";

function App() {
  return (
    <div className="App">
      <Header />
      <ListOfPhones />
    </div>
  );
}

export default App;
