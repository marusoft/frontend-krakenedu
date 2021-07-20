import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";


import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Sidebar />
      <Header />
    </div>
  );
};

export default App;
