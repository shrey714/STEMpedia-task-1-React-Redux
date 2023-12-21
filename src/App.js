import React from "react";
import Task from "./components/Task";
import Result from "./components/Result";
import "./components/style.css";
const App = () => {
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <Task />
          <Result />
        </div>
      </div>
    </>
  );
};

export default App;
