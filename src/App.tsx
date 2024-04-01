import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import AboutPage from "./components/AboutPage";

function App() {
  return (
    <>
      <Home age={1} name="abc" />
      <AboutPage />
    </>
  );
}

export default App;
