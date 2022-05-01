import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar.jsx";
import SearchByAll from "./SearchByAll";

function App() {
  //STATE
  const [currentView, setView] = useState("all");
  //HANDLER FUNCTION
  const changeView = (id) => {
    setView(id);
  };

  return (
    <div className="App">
      <Navbar></Navbar>

      {(() => {
        switch (currentView) {
          case "all":
            return <SearchByAll onClick={changeView(this.id)} />;
          case "idName":
            return "#00FF00";
          case "blue":
            return "#0000FF";
          default:
            return "#FFFFFF";
        }
      })()}
    </div>
  );
}

export default App;
